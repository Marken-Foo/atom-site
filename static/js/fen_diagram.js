// Functions to parse a FEN and draw a diagram using a canvas.

// Global (ewww): image sources and images
const charToImgIdx = {'P' : 0, 'N' : 1, 'B' : 2,
					  'R' : 3, 'Q' : 4, 'K' : 5,
					  'p' : 6, 'n' : 7, 'b' : 8,
					  'r' : 9, 'q' : 10, 'k' : 11};
const pieceSrcs = ["/../images/pieces/wP.svg", "/../images/pieces/wN.svg", "/../images/pieces/wB.svg",
				   "/../images/pieces/wR.svg", "/../images/pieces/wQ.svg", "/../images/pieces/wK.svg",
				   "/../images/pieces/bP.svg", "/../images/pieces/bN.svg", "/../images/pieces/bB.svg",
				   "/../images/pieces/bR.svg", "/../images/pieces/bQ.svg", "/../images/pieces/bK.svg"];
const numImgs = pieceSrcs.length;
let pieceImgs = [];
for (let i = 0; i < numImgs; i++) {
	pieceImgs.push(new Image());
}

//=== Run the script ===
window.onload = loadImages; // main is run as callback once images are loaded.
//======================
function main() {
	// Hugo creates a <div class=chess-diagram> in a <figure class=fen-diag>, containing a canvas and a textbox.
	// div is styled by CSS, specifies width.
	// Canvas is added and drawn by JS. (here)
	let diagDivs = document.getElementsByClassName("fen-diag-cnv-wrapper");
	for (div of diagDivs) {
		// could optimise later because reflow when calling scrollWidth/Height
		let cnvSize = Math.min(div.scrollWidth, div.scrollHeight); // must be before putting the canvas in.
		let cnv = document.createElement("canvas");
		let flip = div.dataset.hasOwnProperty("flip");
		div.appendChild(cnv);
		cnv.width = cnvSize;
		cnv.height = cnvSize;
		drawDiagram(cnv, div.dataset.fen, flip=flip);
	}
}


// =========== Class and function definitions ==============

function loadImages() {
	/** Loads images used to draw chess position.
	Calls back main() function when all images are successfully loaded.
	**/
	let numImgsLoaded = 0;
	let numImgsError = 0;
		
	for (let i = 0; i < numImgs; i++) {
		pieceImgs[i].onload = onloadCallback;
		pieceImgs[i].onerror = onerrorCallback;
		pieceImgs[i].src = pieceSrcs[i];
	}
	
	function onloadCallback() {
		numImgsLoaded++;
		if (numImgsLoaded + numImgsError === numImgs) {
			main();
		}
		return;
	}
	
	function onerrorCallback() {
		numImgsError++;
		if (numImgsLoaded + numImgsError === numImgs) {
			console.log("Not all piece images were loaded.");
		}
		return;
	}
	return;
}


function drawDiagram(canvas, fen, flip=false) {
	/** Draws a chess position (given by the FEN) on the given canvas.
		Board can be flipped to be from black's perspective.
	**/
	// These settings determine the colour and internal sizing of the board.
	const colourLight = "rgb(240, 217, 181)";
	const colourDark = "rgb(181, 136, 99)";
	const colourBorder = "rgb(128, 80, 64)";
	
	const boardSize = Math.min(canvas.width, canvas.height);
	const borderSqRatio = 0.5; // border size in terms of square size
	const sqSize = boardSize / (8 + 2 * borderSqRatio);
	const borderSize = borderSqRatio * sqSize;
	
	let fenObj = new Fen(fen);
	let ctx = canvas.getContext("2d");
	
	ctx.fillStyle = colourBorder;
	ctx.fillRect(0, 0, boardSize, boardSize);
	ctx.save();
	ctx.translate(borderSize, borderSize);
	// canvas origin should now be at corner of main 8x8 area
	
	// Draw board squares.
	ctx.fillStyle = colourDark;
	ctx.fillRect(0, 0, sqSize * 8, sqSize* 8);
	ctx.fillStyle = colourLight;
	for (let x = 0; x < 4; x++) {
		for (let y = 0; y < 4; y++) {
			ctx.fillRect((2*x)*sqSize, (2*y)*sqSize, sqSize, sqSize);
			ctx.fillRect((2*x+1)*sqSize, (2*y+1)*sqSize, sqSize, sqSize);
		}
	}
	
	// Add coordinates.
	const sqInnerPad = 0.05;
	const sqFontSize = sqSize / 5;
	
	ctx.font = String(sqFontSize) + "px Calibri";
	for (let i = 0; i < 8; i++) {
		let rowChar = flip ? i + 1 : 8 - i;
		let colChar = flip ? String.fromCharCode('h'.charCodeAt(0) - i) : 
							 String.fromCharCode('a'.charCodeAt(0) + i);
		ctx.fillStyle = (i & 1) ? colourLight : colourDark;
		ctx.fillText(rowChar, sqSize*sqInnerPad, sqSize*(i + 4 * sqInnerPad));
		ctx.fillStyle = !(i & 1) ? colourLight : colourDark;
		ctx.fillText(colChar, sqSize*(i + sqInnerPad), sqSize*(8 - sqInnerPad));
	}
	
	// Draw pieces. FEN is parsed by fenObj methods.
	let unitArray = fenObj.parseRanks(flip);
	for (let i = 0; i < 8; i++) {
		for (let pair of unitArray[i]) {
			let pieceImg = pieceImgs[charToImgIdx[pair[0]]];
			ctx.drawImage(pieceImg, sqSize*pair[1], sqSize*i, sqSize, sqSize);
		}
	}
	
	// Draw ornaments (board orientation, side to move).
	// TODO: add castling rights/ep rights indicators.
	const ornSize = borderSize * 0.6 // diameter or width of ornaments
	
	ctx.restore(); // canvas origin should now be at corner of border
	ctx.strokeStyle = "black";
	ctx.lineWidth = 1.0;
	
	// board orientation (white/black side) indicator
	const x_apex = boardSize - borderSize * 0.5;
	const y_apex = boardSize - borderSize - 4 * sqSize;
	
	ctx.fillStyle = (flip) ? "black" : "white";
	ctx.beginPath(); //up-pointing triangle (middle-right of board, lower)
	ctx.moveTo(x_apex, y_apex);
	ctx.lineTo(x_apex - ornSize/2, y_apex + ornSize * Math.sqrt(3)/2);
	ctx.lineTo(x_apex + ornSize/2, y_apex + ornSize * Math.sqrt(3)/2);
	ctx.fill();
	ctx.closePath();
	
	ctx.fillStyle = (flip) ? "white" : "black";
	ctx.beginPath(); //down-pointing triangle (middle-right of board, upper)
	ctx.moveTo(x_apex, y_apex);
	ctx.lineTo(x_apex - ornSize/2, y_apex - ornSize * Math.sqrt(3)/2);
	ctx.lineTo(x_apex + ornSize/2, y_apex - ornSize * Math.sqrt(3)/2);
	ctx.fill();
	ctx.closePath();

	// side-to-move indicator (bottom right of board)
	ctx.beginPath();
	ctx.arc(boardSize - borderSize * 0.5, boardSize - borderSize - ornSize,
			ornSize/2, 0, Math.PI*2);
	ctx.stroke();
	if (fenObj.sideToMove === 'w') {
		ctx.fillStyle = "white";
		ctx.fill();
	} else if (fenObj.sideToMove === 'b') {
		ctx.fillStyle = "black";
		ctx.fill();
	}
	ctx.closePath();
	
	return;
}


function Fen(fen) {
	/** FEN object. Abstract representation of a FEN string.
	**/
	// TODO: FEN validation
	let fenParts = fen.split(' ');
	this.ranks = fenParts[0].split('/');
	this.sideToMove = (typeof fenParts[1] !== "undefined") ? fenParts[1] : null;
	this.castling = (typeof fenParts[2] !== "undefined") ?
					fenParts[2].split('') : null;
	this.ep = (typeof fenParts[3] !== "undefined") ? fenParts[3] : null;
	this.halfmove = (typeof fenParts[4] !== "undefined") ? fenParts[4] : null;
	this.fullmove = (typeof fenParts[5] !== "undefined") ? fenParts[5] : null;
	return;
}

// Fen.parseRank and Fen.parseRanks generate arrays to help draw pieces
Fen.prototype.parseRank = function(fenRank, flip=false) {
	let rankUnits = [];
	let fileNum = 0;
	
	if (flip) { fenRank = fenRank.split('').reverse().join(''); }
	
	for (let ch of fenRank) {
		if (ch in charToImgIdx) {
			rankUnits.push([ch, fileNum]);
			fileNum++;
		} else {
			fileNum += Number(ch); // ASSUMES FEN IS VALID
		}
	}
	return rankUnits; //returns array of [pieceChar, fileNum] pairs representing pieces locations' in a rank.
};

Fen.prototype.parseRanks = function(flip = false) {
	units = [];
	for (let fenRank of this.ranks) {
		units.push(Fen.prototype.parseRank(fenRank, flip));
	}
	if (flip) { units.reverse(); }
	return units; //returns array. Each element is output of Fen.parseRank() representing a rank.
}




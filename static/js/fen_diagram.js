fen_diagram = (function(){
    // CONFIG: Piece image directory path and filenames.
    const imgPath = "/../images/pieces/";
    let pieceSrcs = {"P" : "wP.svg", "N" : "wN.svg", "B" : "wB.svg",
                     "R" : "wR.svg", "Q" : "wQ.svg", "K" : "wK.svg",
                     "p" : "bP.svg", "n" : "bN.svg", "b" : "bB.svg",
                     "r" : "bR.svg", "q" : "bQ.svg", "k" : "bK.svg"};
    // CONFIG: Colour themes for board.
    const BROWN = new Theme(light="rgb(240, 217, 181)",
                            dark="rgb(181, 136, 99)",
                            border="rgb(128, 80, 64)");
    const GREY = new Theme(light="rgb(166, 166, 166)",
                           dark="rgb(134, 134, 134)",
                           border="rgb(94, 94, 94)");
    const STEEL = new Theme(light="rgb(222, 227, 230)",
                           dark="rgb(140, 162, 173)",
                           border="rgb(78, 110, 126)");
    const DEFAULT_THEME = BROWN;
    const VARIATION_THEME = STEEL;
    // CONFIG: Class name of divs to draw in.
    const containerClass = "fen-diag-cnv-wrapper";
    
    // list of FEN characters recognised
    const pieceChars = Object.keys(pieceSrcs);
    let pieceImgs = {};
    for (let key of pieceChars) {
        pieceSrcs[key] = imgPath + pieceSrcs[key];
        pieceImgs[key] = new Image();
    }
    numImgs = pieceChars.length;


    //=== Run the script only if there are diagrams to draw ===
    // Array.from(list) is for Microsoft Edge compatibility
    let diagDivs = Array.from(document.getElementsByClassName(containerClass));
    if (diagDivs.length > 0) {
        window.onload = loadImages;
    }
    
    // CONFIG: main() is called back when images are loaded.
    function main() {
        for (let div of diagDivs) {
            // could optimise later because reflow when calling scrollWidth/Height
            // Size calculation must be before putting the canvas in.
            let cnvSize = Math.min(div.scrollWidth, div.scrollHeight);
            let cnv = document.createElement("canvas");
            let flip = div.dataset.hasOwnProperty("flip");
            div.appendChild(cnv);
            cnv.width = cnvSize;
            cnv.height = cnvSize;
            let theme = (div.dataset.diagType === "variation") ? VARIATION_THEME : DEFAULT_THEME;
            drawDiagram(cnv, div.dataset.fen, flip=flip, theme=theme);
        }
    }

    // =========== Class and function definitions ==============

    function loadImages() {
        /** Loads images used to draw chess position.
        Calls back main() function when all images are successfully loaded.
        **/
        let numImgsLoaded = 0;
        let numImgsError = 0;
        
        for (let key of pieceChars) {
            pieceImgs[key].onload = onloadCallback;
            pieceImgs[key].onerror = onerrorCallback;
            pieceImgs[key].src = pieceSrcs[key];
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
    

    function drawDiagram(canvas, fen, flip=false, theme=DEFAULT_THEME) {
        /** Draws a chess position (given by the FEN) on the given canvas.
            Board can be flipped to be from black's perspective.
        **/
        // These settings determine the colour and internal sizing of the board.
        const colourLight = theme.light;
        const colourDark = theme.dark;
        const colourBorder = theme.border;
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
            let colChar = flip ? String.fromCharCode("h".charCodeAt(0) - i) : 
                                 String.fromCharCode("a".charCodeAt(0) + i);
            ctx.fillStyle = (i & 1) ? colourLight : colourDark;
            ctx.fillText(rowChar, sqSize*sqInnerPad, sqSize*(i + 4 * sqInnerPad));
            ctx.fillStyle = !(i & 1) ? colourLight : colourDark;
            ctx.fillText(colChar, sqSize*(i + sqInnerPad), sqSize*(8 - sqInnerPad));
        }
        
        // Draw pieces.
        let unitArray = fenObj.parseRanks(flip);
        for (let i = 0; i < 8; i++) {
            for (let pair of unitArray[i]) {
                let pieceImg = pieceImgs[pair[0]];
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
        if (fenObj.sideToMove === "w") {
            ctx.fillStyle = "white";
            ctx.fill();
        } else if (fenObj.sideToMove === "b") {
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
        let fenParts = fen.split(" ");
        this.ranks = fenParts[0].split("/");
        this.sideToMove = (typeof fenParts[1] !== "undefined") ? fenParts[1] : null;
        this.castling = (typeof fenParts[2] !== "undefined") ?
                        fenParts[2].split("") : null;
        this.ep = (typeof fenParts[3] !== "undefined") ? fenParts[3] : null;
        this.halfmove = (typeof fenParts[4] !== "undefined") ? fenParts[4] : null;
        this.fullmove = (typeof fenParts[5] !== "undefined") ? fenParts[5] : null;
    }

    // Fen.parseRank and Fen.parseRanks generate arrays to help draw pieces
    Fen.prototype.parseRank = function(fenRank, flip=false) {
         /** Takes one rank of a FEN position string.
         Returns array of [pieceChar, fileNum] pairs, from 0th to 7th file.
         Rank is mirrored when called with flip=true.
         **/
        let rankUnits = [];
        let fileNum = 0;
        
        if (flip) { fenRank = fenRank.split("").reverse().join(""); }
        
        for (let ch of fenRank) {
            if (pieceChars.includes(ch)) {
                rankUnits.push([ch, fileNum]);
                fileNum++;
            } else {
                fileNum += Number(ch); // ASSUMES FEN IS VALID
            }
        }
        return rankUnits;
    };

    Fen.prototype.parseRanks = function(flip = false) {
        /** Calls Fen.prototype.parseRank() on each rank of the FEN.
        Returns array of rankUnits, from 7th to 0th rank (standard FEN order).
        Output rank order is reversed if called with flip=true.
        **/
        units = [];
        for (let fenRank of this.ranks) {
            units.push(Fen.prototype.parseRank(fenRank, flip));
        }
        if (flip) { units.reverse(); }
        return units;
    }

    // Colour theme parameters for drawing board. Light/dark squares and border.
    function Theme(light, dark, border) {
        this.light = light;
        this.dark = dark;
        this.border = border;
    }
    
    
    return {
        loadImages: loadImages,
        Theme: Theme,
        Fen: Fen,
        drawDiagram: drawDiagram
    }
})();

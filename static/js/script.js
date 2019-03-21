// Helloworld to ensure javascript file is loaded
function createParagraph() {
  let para = document.createElement('p')
  para.textContent = 'You clicked the button!';
  document.body.appendChild(para);
}

const buttons = document.querySelectorAll('button')

for(let i=0; i<buttons.length; i++) {
  buttons[i].addEventListener('click', createParagraph);
}

//another helloworld
var x = document.querySelectorAll("p");
// Set the background color of the first <p> element with class="example" (index 0)
x[0].style.backgroundColor = "red";  

//TODO: put a div container on each lichess embed via the shortcode so that they don't jump to the doc end.
var boards = document.querySelectorAll(".lichess-board");
for(let i=0; i<boards.length; i++){
	var par = boards[i].parentNode;
	var source = boards[i].getAttribute("src");
	par.removeChild(boards[i]);
	boards[i].style.border = "10px solid red";
	boards[i].setAttribute("src", source);
	par.append(boards[i]);
}

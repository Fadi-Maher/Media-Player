// let red = document.getElementById("inp1");
// let green = document.getElementById("inp2");
// let blue = document.getElementById("inp3");
// let paragraph = document.getElementsByClassName("tColor")[0];

// let redValue = 0;
// let greenValue = 0;
// let blueValue = 0;

 

// red.oninput = function(e) {
//     redValue = e.target.value;
//     paragraph.style.color =`rgb(${redValue}, ${greenValue}, ${blueValue})`;
// };

// green.oninput = function(e) {
//     greenValue = e.target.value;
//     paragraph.style.color =    `rgb(${redValue}, ${greenValue}, ${blueValue})`;

// };

// blue.oninput = function(e) {
//     blueValue = e.target.value;
//     paragraph.style.color =    `rgb(${redValue}, ${greenValue}, ${blueValue})`;

// };


let red = document.getElementById("inp1");
let green = document.getElementById("inp2");
let blue = document.getElementById("inp3");
let paragraph = document.getElementsByClassName("tColor")[0];

let redValue = 0;
let greenValue = 0;
let blueValue = 0;

function handleColorChange() {
    redValue = red.value;
    greenValue = green.value;
    blueValue = blue.value;
    paragraph.style.color = `rgb(${redValue}, ${greenValue}, ${blueValue})`;
}


red.oninput = handleColorChange;
green.oninput = handleColorChange;
blue.oninput = handleColorChange;

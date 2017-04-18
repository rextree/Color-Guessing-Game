//default background color value
var defaultBgColor = "#3498db";

var colorList = generateRandomColors(6);

var squares = document.querySelectorAll(".colorPanel");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var message = document.getElementById("message");
var resetBtn = document.getElementById("btnReset");
var easyBtn = document.querySelector("#btnEasy");
var hardBtn = document.querySelector("#btnHard");

resetBtn.addEventListener("click", function () {
	//reset the textcontent of reset Btn
	resetBtn.textContent = "New color";
	//generate the new color
	colorList = generateRandomColors(6);
	//pick a new color from the array
	pickedColor = pickColor();
	//change the color display to display the new color value
	colorDisplay.textContent = pickedColor;
	//assign the color in colorList to the color Panel
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.background = colorList[i];
	}
	//title background reset to default color
	document.querySelector(".title").style.background = defaultBgColor;

});

easyBtn.addEventListener("click", function () {
	resetBtn.textContent = "New color";

	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	colorList = generateRandomColors(3);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < squares.length; i++) {
		if (colorList[i]) {
			squares[i].style.background = colorList[i];
		} else {
			squares[i].style.display = "none";
		}
	}
});

hardBtn.addEventListener("click", function () {
	resetBtn.textContent = "New color";

	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	colorList = generateRandomColors(6);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < squares.length; i++) {
		if (squares[i].style.display = "none") {
			squares[i].style.display = "block";
		}
		squares[i].style.background = colorList[i];
	}
});



colorDisplay.textContent = pickedColor;

for (var i = 0; i < colorList.length; i++) {
	squares[i].style.background = colorList[i];
	squares[i].addEventListener("click", function () {
		var clickedColor = this.style.background;
		resetBtn.textContent = "Try again?";
		if (clickedColor === pickedColor) {
			document.querySelector(".title").style.background = pickedColor;
			message.textContent = "You are correct!";
			changeColors(clickedColor);
		} else {
			message.textContent = "You are wrong, please try again.";
			this.style.background = "#fff"
		}
	});
}

function changeColors(color) {
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.background = color;
	}
}

function pickColor() {
	var random = Math.round(Math.random() * (colorList.length - 1));
	return colorList[random];
}

function generateRandomColors(num) {
	//make an array
	var arr = [];
	for (var i = 0; i < num; i++) {
		arr.push(randomColor());
	}

	return arr;
}

function randomColor() {
	//random red value from 0 to 255
	var r = Math.round(Math.random() * 256);
	//random green value from 0 to 255
	var g = Math.round(Math.random() * 256);
	//random blue value from 0 to 255
	var b = Math.round(Math.random() * 256);
	//return the rgb color
	return "rgb(" + r + ", " + g + ", " + b + ")";
}

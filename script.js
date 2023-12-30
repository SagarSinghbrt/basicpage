var circle = document.getElementById("circle");
var upBtn = document.getElementById("upBtn");
var downBtn = document.getElementById("downBtn");

// Store value of circle transform which is
// rotate 0deg.
var rotateValue = circle.style.transform;
var rotateSum;

upBtn.onclick = function () {
	rotateSum = rotateValue + "rotate(-90deg)";
	circle.style.transform = rotateSum;
	// circle transform = rotate(0deg -90deg);
	rotateValue = rotateSum;
};

downBtn.onclick = function () {
	rotateSum = rotateValue + "rotate(90deg)";
	circle.style.transform = rotateSum;
	// circle transform = rotate(0deg -90deg);
	rotateValue = rotateSum;
};

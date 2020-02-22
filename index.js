var footer = document.getElementById("footer");
var primary = "hsl(218, 38%, 50%)";
var secondary = "hsl(0, 0%, 14%)";

footer.addEventListener('mouseover',changeColor);
footer.addEventListener('mouseout', changeBack);
footer.addEventListener('click', toProfile);

function changeColor() {
    this.style.background = primary;
}

function changeBack() {
    this.style.background = secondary;
}

function toProfile() {
    window.open('http://github.com/dabrentmeister/survey','_blank');
}

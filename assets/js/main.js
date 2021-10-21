var body = document.querySelector("body")
var input = document.querySelector("input")
var darkMode = document.getElementsByClassName ("dark-mode")

document.addEventListener("onclick", myFunction);

function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}
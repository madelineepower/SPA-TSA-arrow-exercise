console.log("hi");
var bodyDiv = document.getElementById("body");
var arrowDiv = document.getElementById("arrow");

window.addEventListener("click", function(event) {
  var randomNum = Math.floor((Math.random() * 10) + 1);
  console.log(randomNum);
  if (randomNum <= 5) {
    arrowDiv.innerHTML = `<img src="goleft.jpeg">`
  } else {
    arrowDiv.innerHTML = `<img src="goright.jpeg">`
  }
});

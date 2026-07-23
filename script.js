// Welcome message
console.log("Online Earning Hub India Loaded!");

// Button animation
const button = document.querySelector(".btn");

button.addEventListener("click", function () {
  button.innerText = "Opening...";
});

// Smooth page fade-in
document.body.style.opacity = "0";

window.onload = function () {
  document.body.style.transition = "opacity 0.8s ease";
  document.body.style.opacity = "1";
};
const navbar = document.getElementsByTagName("nav")[0];

window.addEventListener("scroll", () => {
  if (window.scrollY >= 70) {
    navbar.classList.add("active-color");
  } else {
    navbar.classList.remove("active-color");
  }
});

// window.addEventListener("scroll", function () {
//   var scrolled = this.window.pageYOffset;
//   var background = this.document.querySelectorAll("figure img");
//   background.style.background = "center" + -scrolled * 0.3 + "px";
// });
let cursor = document.querySelector("#cursor");

window.addEventListener("mousemove", function (e) {
  let x = e.clientX;
  let y = e.clientY;
  cursor.style.left = x + "px";
  cursor.style.top = y + "px";
});

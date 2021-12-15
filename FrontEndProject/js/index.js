// const hamburgerIcon = document.querySelector(".hamburger-menu");
// const navItems = document.querySelector(
//   "#nav-list-ul"
// );
// const navLeft = document.querySelector(".nav-left-side");
// hamburgerIcon.addEventListener("click", function () {
//   navItems.classList.toggle("nav-hamburger-menu");
// //   navItems.style.height = "200px"
// //   navItems.classList.toggle("container");
// //   navLeft.style.position = "relative"
// //   console.log(navLeft);
// });
// function returnClick() {
//     if (window.style) {

//     }
// }

$(document).ready(function () {
  $(".hamburger-menu").click(function () {
    $("#nav-list-ul").slideToggle("fast");
    if (window.screen.width == 992) {
          $("#nav-list-ul").css("display", "flex");
    }
  });
  $(".submenu").click(function(){
    $("#first-submenu").slideToggle("fast");
    console.log("salam");
  })
});

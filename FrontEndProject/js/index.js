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
  $(".hamburger-menu").on("click", function () {
    $("#nav-list-ul").slideToggle("fast");
    $("#nav-list-ul").css("background", "white")
  });
  $(".submenu").on("click", function(){
    // $("#first-submenu").toggleClass("active")
    // $("#first-submenu").slideToggle("fast")
  })
})
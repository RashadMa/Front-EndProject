//navigation
$(document).ready(function () {
  $(".hamburger-menu").on("click", function () {
    $(".hamburger-menu").toggleClass("toggle");
    $("#nav-list-ul").slideToggle("fast");
    $("#nav-list-ul").css("background", "white");
  });
  // $(".submenu").on("click", function () {
  //   $("#first-submenu").slideToggle();
  //   $("#second-submenu").slideToggle();
  // });
  //main
  $("#about-help .square-card").css("opacity", "1");
  $("#about-help .square-card").css("transform", "translateY(0)");
  $(document).on("scroll", function () {
    if (window.scrollY > 30) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }
    if (window.scrollY > 140) {
      $(".square-card").css("opacity", "1");
      $(".square-card").css("transform", "translateY(0)");
    }
    if (window.scrollY > 700) {
      $("#cloud-image").css("opacity", "1");
      $("#cloud-image").css("transform", "translateX(0)");
    }
    if (window.scrollY > 1350) {
      $("#cloud-image-part-2").css("opacity", "1");
      $("#cloud-image-part-2").css("transform", "translateX(0)");
    }
    if (window.scrollY > 2200) {
      $(".card-col").css("opacity", "1");
      $(".card-col").css("transform", "translateX(0)");
    }
    if (window.scrollY > 2925) {
      $(".pricing-card").css("opacity", "1");
      $(".pricing-card").css("transform", "translateX(0)");
    }
  });
  //counter
  $(".num").counterUp({ delay: 10, time: 1000 });
});
//map
function initMap() {
  let location = { lat: -37.8136, lng: 144.9631 };
  let map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: location,
  });
  let marker = new google.maps.Marker({ position: location, map: map });
}
$(document).ready(function () {
  $(".accordionheader").click(function (e) {
    $(".accordionbody").not($(this).next()).slideUp("fast");
    $(this).next().slideToggle("fast");
  });
});
$(window).on("load", function () {
  $("#preloader").fadeOut("slow");
});

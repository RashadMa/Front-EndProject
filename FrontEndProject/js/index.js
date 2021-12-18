//navigation
$(document).ready(function () {
  $(".hamburger-menu").on("click", function () {
    $("#nav-list-ul").slideToggle("fast");
    $("#nav-list-ul").css("background", "white");
  });
  //main

  $("#about-help .square-card").css("opacity", "1");
  $("#about-help .square-card").css("transform", "translateY(0)");
  console.log("salam");

  $(document).on("scroll", function () {
    if (window.scrollY > 30) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }
    // console.log(window.scrollY);
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
// $(document).ready(function(){
//   $(".accordionheader").click(function(e){
//     $(".accordionbody").not($(this).next()).slideUp();
//       $(this).next().slideToggle();
//   })
// });
// $(document).ready(function(){
//   $(".hamburger").click(function(e){
//     if(!$(".accordion").hasClass(".active")){
//       $(".accordion").css("display","block");
//       $(".accordion").addClass(".active");
//     }
//     else{
//       $(".accordion").css("display","none");
//       $(".accordion").removeClass(".active")
//     }
//   })
// });

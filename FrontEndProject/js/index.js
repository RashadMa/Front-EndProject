//navigation
$(document).ready(function () {
  $(".hamburger-menu").on("click", function () {
    $("#nav-list-ul").slideToggle("fast");
    $("#nav-list-ul").css("background", "white")
  });
  $(document).on("scroll", function(){
    if (window.scrollY > 30) {
      $(".navbar").addClass("sticky")
    }else{
      $(".navbar").removeClass("sticky")
    }
    console.log(window.scrollY);
    if (window.scrollY > 140) {
      $(".square-card").css("opacity", "1")
      $(".square-card").css("transform", "translateY(0)")
    }
    if (window.scrollY > 700) {
      $("#cloud-image").css("opacity", "1")
      $("#cloud-image").css("padding-left", "85px")
    }
  })
})
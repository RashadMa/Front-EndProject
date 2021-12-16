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
  })

})
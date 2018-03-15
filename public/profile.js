$(document).ready(function(){
    $('.parallax').parallax();
    $("#proj").click(function() {
    $('html,body').animate({
        scrollTop: $(".projects").offset().top},
        'slow');
});
  });

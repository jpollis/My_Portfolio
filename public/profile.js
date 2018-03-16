$(document).ready(function(){
  // scroll feature
  $('.parallax').parallax();
  $("#proj").click(function() {
    $('html,body').animate({
      scrollTop: $(".projects").offset().top},
      'slow');
    });
    // sidenav activate
    $(".button-collapse").sideNav();

    $(".contact").click(function(){
      $('.modal').modal();
      $('#modal1').modal('open');
    })
  });

$(document).ready(function(){
  // scroll feature
  $('.parallax').parallax();
  $("#proj").click(function() {
    $('html,body').animate({
      scrollTop: $(".projects").offset().top},
      'slow');
    });
    $("#proj2").click(function() {
      $('html,body').animate({
        scrollTop: $(".projects").offset().top},
        'slow');
      });
    // sidenav activate
    // $(".button-collapse").sideNav();

    $('.button-collapse').sideNav({
      menuWidth: 300, // Default is 300
      edge: 'left', // Choose the horizontal origin
      closeOnClick: false, // Closes side-nav on <a> clicks, useful for Angular/Meteor
      draggable: true // Choose whether you can drag to open on touch screens
    }
  );

    $(".contact").click(function(){
      $('.modal').modal();
      $('#modal1').modal('open');
    })
  });

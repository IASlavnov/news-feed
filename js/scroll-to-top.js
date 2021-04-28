$(document).ready(function() {
  $('.button-up').fadeOut();
  $(window).scroll(function() {
    if($(this).scrollTop() > 250) {
      $('.button-up').fadeIn();
    } else {
      $('.button-up').fadeOut();
    }
  });
  $('.button-up').click(function() {
    $('body,html').animate({
      scrollTop: 0
    }, 400);
    return false;
  });
});

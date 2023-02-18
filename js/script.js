$(document).ready(function(){
    $('#introSlider').slick({
        autoplay: false,
        autoplaySpeed: 5000,
        arrows: false,
        mobileFirst: true,
        touchThreshold: 3,
    });

    $('#introSlider').prepend("<div class='welcome-text-container'><p>Welcome to</p><img src='./img/hardin-beach-resort-text-logo.png'></div><div class='overlay'></div>")
});

$(function() {
    $('a[href*=#]').on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
    });
  });
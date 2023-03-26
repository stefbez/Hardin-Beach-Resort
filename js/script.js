$(document).ready(function(){
    $('#introSlider').slick({
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
        mobileFirst: true,
        touchThreshold: 3,
    });

    $('#introSlider').prepend("<div class='welcome-text-container'><p>Welcome to</p><img src='./img/hardin-beach-resort-text-logo.png'></div><div class='overlay'></div>")

    $(function() {
        $('a[href*=#]').on('click', function(e) {
            e.preventDefault();
            $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
        });
    });

    // Get the modal
    var modal = document.getElementById("menuModal");
    document.getElementById("menuLink").addEventListener('click', function(e) {
        e.preventDefault();
        console.log("CLICK")
        modal.style.display = "flex";
    })
    // Get the image and insert it inside the modal - use its "alt" text as a caption
    // var img = document.getElementById("myImg");
    // var modalImg = document.getElementById("img01");
    // var captionText = document.getElementById("caption");
    // .onclick = function(){
    // modalImg.src = this.src;
    // captionText.innerHTML = this.alt;
    // }

    // Get the <span> element that closes the modal
    var closeMenu = document.getElementsByClassName("closeMenu")[0];

    // When the user clicks on <span> (x), close the modal
    closeMenu.onclick = function() { 
    modal.style.display = "none";
    }
});
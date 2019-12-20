$(window).on('load', () => {
    $('.spinner-wrapper').fadeOut('slow');
})
$(document).ready(() => {
    $('footer p').html = `&copy; ${new Date().getFullYear} Prabha Dahal All Rights Reserved`;
})
/*progress bar animation on scroll*/
$(window).on("scroll", function () {
    if ($(this).scrollTop() > 1100) {
        $('.outer-bar').addClass('animate-progress');
        $(window).off("scroll"); // last line
    }
});
/*menu*/
$('.menu-btn').on('click', () => {
    $('.menu-items').toggleClass('toggle-scale');

})

/*smooth scroll*/
//smooth scrool



$(document).on('click', 'a[href^="#"]', function (event) {

    event.preventDefault();

    $('html, body').animate({

        scrollTop: $($.attr(this, 'href')).offset().top

    }, 800);

});

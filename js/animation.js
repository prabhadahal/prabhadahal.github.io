$(window).on('load', () => {
    $('.spinner-wrapper').fadeOut('slow');
})
$(document).ready(() => {
    console.log($('footer p'));
    $('footer p').html = `&copy; ${new Date().getFullYear} Prabha Dahal All Rights Reserved`;
})

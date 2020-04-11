$('#home').on('click', function () {
    $('body, html').animate({
        scrollTop: $('.wrap').offset().top
    }, 1000)
})
$('#me').on('click', function () {
    $('body, html').animate({
        scrollTop: $('.me').offset().top
    }, 1000)
})
$('#room').on('click', function () {
    $('body, html').animate({
        scrollTop: $('.room').offset().top
    }, 1000)
})
$('#services').on('click', function () {
    $('body, html').animate({
        scrollTop: $('.services').offset().top
    }, 1000)
})
$('#contact').on('click', function () {
    $('body, html').animate({
        scrollTop: $('.contact').offset().top
    }, 1000)
})
$('#arrow_up').on('click', function () {
    $('body, html').animate({
        scrollTop: $('.main').offset().top
    }, 1000)
})
$('#home-mobile').on('click', function () {
    $('body, html').animate({
        scrollTop: $('.main').offset().top
    }, 1000)
})

window.onscroll = function () {
    myFunction()
};

var navbar = document.querySelector("nav");
var sticky = navbar.offsetTop;

function myFunction() {

    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}
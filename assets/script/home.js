

const navBtn = document.querySelector('.navbar')
const navigation = document.querySelector('.nav')
const menuOverlay = document.querySelector('.nav__link-overlay')

navBtn.onclick = function () {
    navigation.classList.toggle('open')
}
menuOverlay.onclick = function () {
    event.stopImmediatePropagation()
    navigation.classList.remove('open')
}

$(document).ready(function () {
    var owl = $('.owl-carousel');

    owl.owlCarousel({
        loop: true,
        margin: 30,
        center: true,
        // nav: true,
        items: 2,
        autoplay: true,
        autoplayTimeout: 9000,
        autoplayHoverPause: false,
        navRewind: true,
        responsive: {
            0: {
                items: 1,
                margin: 10
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    })
})



$(document).ready(function () {
    let currentFloor = 2;
    let floorPath = $(".floors__home path");
    let counterUp =  $(".counter__button_up");
    let counterDown =  $(".counter__button_down");
    let modal = $(".overlay");
    let modalCloseButton = $(".modal__close");
    let viewFlatsButton = $(".view-flats");
    let currentFlat = 0;
    let flatsPath = $('.modal__flats path').toArray();
    let flatsLinks = $('.modal__link').toArray();
    let body = $(".overf");


    floorPath.on('mouseover', function () {
        floorPath.removeClass("floors__home_current");
        currentFloor = $(this).attr("data-floor");
        $(".counter__num").text(currentFloor);
    });

    floorPath.on('click', toggleModal);
    modalCloseButton.on('click', toggleModal);
    viewFlatsButton.on('click', toggleModal);

    counterUp.on('click', function () {
        if (currentFloor < 18) {
            currentFloor++;
            usCurrentFloor = currentFloor.toLocaleString("en-US", {minimumIntegerDigits: 2,
                useGrouping: false});
            $(".counter__num").text(usCurrentFloor);
            floorPath.removeClass("floors__home_current");
            $(`[data-floor=${usCurrentFloor}]`).toggleClass("floors__home_current")
        }
    });
    counterDown.on('click', function () {
        if (currentFloor > 2) {
            currentFloor--;
            usCurrentFloor = currentFloor.toLocaleString("en-US", {minimumIntegerDigits: 2,
                useGrouping: false});
            $(".counter__num").text(usCurrentFloor);
            floorPath.removeClass("floors__home_current");
            $(`[data-floor=${usCurrentFloor}]`).toggleClass("floors__home_current")
        }
    });
    function toggleModal() {
        modal.toggleClass("overlay_active");
        body.toggleClass("overf_active");
    }

    $(flatsPath).on('mouseover', function() {
        let flatPathIndex = flatsPath.indexOf(this);
        showCurrenFlat(flatPathIndex);
    });

    $(flatsLinks).on('mouseover', function() {
        let flatLinkIndex = flatsLinks.indexOf(this);
        showCurrenFlat(flatLinkIndex);
    });

    function showCurrenFlat(index) {
        currentFlat = index;

        $(flatsPath).removeClass('modal__flats_current');
        $(flatsLinks).removeClass('modal__link_active');

        $(flatsLinks[currentFlat]).toggleClass('modal__link_active');
        $(flatsPath[currentFlat]).toggleClass('modal__flats_current');
    }
});

window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.navbar'),
        menuItem = document.querySelectorAll('.navbar__link'),
        logo = document.querySelector('.logo__mob'),
        hamburger = document.querySelector('.hamburger'),
        body = document.querySelector('.overf');

    hamburger.addEventListener('click', () => {
        logo.classList.toggle('logo__mob_dis');
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('navbar_active');
        body.classList.toggle('overf_active');
    });
    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            if ( window.innerWidth <= 768) {
                logo.classList.toggle('logo__mob_dis');
                hamburger.classList.toggle('hamburger_active');
                menu.classList.toggle('navbar_active');
                body.classList.toggle('overf_active');
            }
        })
    });
});
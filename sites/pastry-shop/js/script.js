$(document).ready(function () {
    $(".sitebranding__carousel").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 10000,
        nav: true,
        navText: ['<i class="bi bi-chevron-compact-left text-light display-1"></i>', '<i class="bi bi-chevron-compact-right text-light display-1"></i>'],
    });
    $(".responsive-carousel").owlCarousel({
        margin: 20,
        responsive: {
            0: {
                items: 2,
                margin: 5,
            },
            768: {
                items: 3,
            },
            1200: {
                items: 4,
            },
        }
    });

    $('.owl-carousel').owlCarousel();

    $('.dropdown-menu a.dropdown-toggle').on('click', function (e) {
        if (!$(this).next().hasClass('show')) {
            $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
        }
        var $subMenu = $(this).next(".dropdown-menu");
        $subMenu.toggleClass('show');


        $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function (e) {
            $('.dropdown-submenu .show').removeClass("show");
        });


        return false;
    });

});





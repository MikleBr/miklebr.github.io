$(document).ready(function () {
  $(".reviews-carousel").owlCarousel({
    loop: true,
    center: true,
    margin: 10,
    nav: true,
    navText: [
      '<span class="arrow-owl arrow-left"><img src="./img/l-arrow.svg" alt=""></span>',
      '<span class="arrow-owl arrow-right"><img src="./img/r-arrow.svg" alt=""></span>',
    ],

    dots: true,

    responsive: {
      0: {
        items: 1,
        center: true,
        nav: false,
      },

      420: {
        items: 2,
        margin: 10,
        center: false,
        nav: false,
      },

      980: {
        items: 3,
      },
    },
  });
});

var $page = $("html, body");
$('a[href*="#"]').click(function () {
  $page.animate(
    {
      scrollTop: $($.attr(this, "href")).offset().top - 77,
    },
    400
  );
  return false;
});

function PopUpShow() {
  $("#pop-up").css({
    opacity: 1,
    "z-index": 5,
  });
}

function PopUpHide() {
  $("#pop-up").css({
    opacity: 0,
    "z-index": -1,
  });
}

$(".pop-up__close").click(function () {
  PopUpHide();
});

$(document).click(function (e) {
  if ($(e.target).is("#pop-up")) {
    PopUpHide();
  }
});

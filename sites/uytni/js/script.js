$(function () {
  $(".product-carousel").owlCarousel({
    loop: true,
    autoplay: true,
    smartSpeed: 400,
    autoplayTimeout: 10000,
    nav: true,
    center: false,
    autoWidth: false,
    navText: ["", ""],
    margin: 10,
    responsive: {
      0: {
        items: 1,
        center: false,
        nav: false,
        dots: true,
      },
      480: {
        items: 2,
      },
      640: {
        items: 3,
      },
      981: {
        items: 4,
        dots: false,
      },
    },
  });

  var owl = $(".img-preview__container");
  owl.owlCarousel({
    autoplay: true,
    smartSpeed: 1000,
    autoplayTimeout: 15000,
    nav: false,
    dots: false,
    margin: 10,
    responsive: {
      0: {
        items: 3,
        center: false,
      },
      1200: {
        items: 4,
      },
    },
  });
});

$(document).click(function (e) {
  if (
    $(e.target).closest(".burger-btns").length == 0 &&
    $(e.target).closest(".search__burger-checkbox").length == 0
  ) {
    $(".search__burger-checkbox").prop("checked", false);
  }

  if (
    $(e.target).closest(".pop-up__container").length == 0) {
      $("#pop-up").hide();
  }

  if (
    $(e.target).closest(".main__left-column").length == 0 &&
    $(e.target).closest(".catalog-nav__checkbox").length == 0
  ) {
    $(".catalog-nav__checkbox").prop("checked", false);
  }
});

$(".product-description__img").css({
  "background-image": "url(" + $(".img-preview__image:first").attr("src") + ")",
});

$(".img-preview__image").click(function () {
  let src_link = $(this).attr("src");
  $(".product-description__img").css({
    "background-image": "url(" + src_link + ")",
  });
});

//Скрыть PopUp при загрузке страницы
$(document).ready(function () {
  PopUpHide();
  BuyPopUp_Hide();
});

function BuyPopUp_Hide(){
  $("#pop-up-sum").hide();
}

function BuyPopUp_Show(){
  $("#pop-up-sum").show();
}

function PopUpShow() {
  $("#pop-up").show();
}

function PopUpHide() {
  $("#pop-up").hide();
}

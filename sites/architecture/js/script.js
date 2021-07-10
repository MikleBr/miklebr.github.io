"use strict";

var $header = $(".scrolling-header");
var $burger = $(".burger-nav");

$burger.css({
  top: "300px",
  height: "calc(100% - 300px)",
});

var scroll = 300;
var active = "scrolling-header--visible";

$(window).scroll(function () {
  let x = 300 - window.pageYOffset;

  if ($(window).scrollTop() > scroll) {
    $header.addClass(active);
    $burger.addClass("burger--scrolled");
    $burger.css({
      top: "90px",
      height: "calc(100% - 90px)",
    });
  } else {
    $header.removeClass(active);
    $burger.removeClass("burger--scrolled");
    $burger.css({
      top: x + "px",
      height: "calc(100% - " + x + "px)",
    });
  }
});

$('input[type="checkbox"]').click(function (event) {
  if ($('input[type="checkbox"]').is(":checked")) {
    $("body").addClass("no-scroll");
  } else {
    $("body").removeClass("no-scroll");
  }
});

$(".up-button a").on("click", function () {
  var get_id = $(this).attr("data-item");
  var target = $("#" + get_id).offset().top;

  $("html, body").animate(
    {
      scrollTop: target,
    },
    800
  );
});

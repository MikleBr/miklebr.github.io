"use strict";

var $header = $(".header");

var scroll = 0;

var active = "header--scrolling";

$(window).scroll(function () {

  if ($(window).scrollTop() > scroll) {
    $header.addClass(active);
  } else {
    $header.removeClass(active);
  }

});

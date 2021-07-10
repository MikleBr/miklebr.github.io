$(function () {
  var $slide_bar = $(".info-bar__container");
  function loopEl() {
    var $first = $slide_bar.find(
      ".scroll-container .exchange-info:first-child"
    );
    $first.animate(
      {
        marginLeft: "-=" + $first.outerWidth(true) + "px",
      },
      5000,
      "linear",
      function () {
        $first.clone().removeAttr("style").appendTo($first.parent());
        $first.remove();
        loopEl();
      }
    );
  }
  loopEl();
});

let elem = $(".header__image");
window.addEventListener("mousemove", function (e) {
  let x = e.clientX / window.innerWidth;
  let y = e.clientY / window.innerHeight;

  $(elem).css("transform", "translate(-" + x * 50 + "px, -" + y * 50 + "px)");
});

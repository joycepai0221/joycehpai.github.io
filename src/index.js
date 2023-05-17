$(document).ready(function () {
  $(".selfie-wrapper").animate(
    {
      opacity: 1,
      left: "0",
    },
    1800,
    "linear"
  );
  $(".content").animate(
    {
      opacity: 1,
      right: "0",
    },
    1800,
    "linear"
  );
  $(window).on("scroll resize", checkHeight);
  function checkHeight() {
    var windowHeight = $(window).height();
    var clientScrollY = $(window).scrollTop();
    var AboutTop = $("#about").offset().top;
    var ResumeTop = $("#resume").offset().top;
    var PorfolioTop = $("#porfolio").offset().top;
    // if (clientScrollY >= AboutTop - 20) {
    //   alert(AboutTop);
    // var
    //   $eachElement.
    // }
  }
});

$(document).ready(function () {
  let toTheTopBtn = $(".to-top__link");
  let links = $("a[href^='#'");

  links.on("click", function (e) {
    e.preventDefault();
    let target = $($(this).attr("href"));

    if (target.length) {
      $("html").animate({ scrollTop: target.offset().top - 40 }, 1000);
    }
  });
  toTheTopBtn.on("click", function () {
    $("html, body").animate({ scrollTop: 0 }, 300);
  });
});

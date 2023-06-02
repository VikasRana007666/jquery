$(document).ready(function () {
  $(".navbar").on("click", function (e) {
    e.preventDefault();
    // console.log($(this).find(".navbar-nav").children());
  });

  $(".nav-item").on("click", function (e) {
    e.preventDefault();
    console.log($(this).closest(".navbar"));
  });
});

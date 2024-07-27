$(document).ready(function () {
  // console.log(1, $(".header").offset().top);
  var headerTop = $(".header .header__middle-flex").offset().top;
  var poisitionIndex = 0;
  let positionBar = $(window).scrollTop();
  var posSticky = $(".main").offset().top;

  $(window).scroll(function () {
    //header scroll page home
    if ($(this).scrollTop() > headerTop) {
      $(".header .header__middle-flex").addClass("sticky_header");
    } else {
      $(".header .header__middle-flex").removeClass("sticky_header");
    }

    if ($(this).scrollTop() > posSticky) {
      $(".header").addClass("sticky");
    } else {
      $(".header").removeClass("sticky");
    }

    // if (
    //   $(this.window).height() + $(this).scrollTop() <
    //   $("body").height() - 150
    // ) {
    //   poisitionIndex = $(this).scrollTop();
    // }
  });

  $(".header .nav-bar .icon-bar").click(function (e) {
    e.preventDefault();

    if ($("body").hasClass("open-menu")) {
      $("body").removeClass("open-menu");
    } else {
      $("body").addClass("open-menu");
    }
  });

  $(".header__middle-menu .nav-bar .icon-close").click(function (e) {
    e.preventDefault();
    $("body").removeClass("open-menu");
  });
});

document.fonts.ready.then(function () {
  var swiper = new Swiper(".home-sw", {
    slidesPerView: "auto",
  });

})
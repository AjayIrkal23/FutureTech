(function ($) {
  "use strict";

  $(document).ready(function () {
    /**-----------------------------
     *  Navbar fix
     * ---------------------------*/
    $(document).on(
      "click",
      ".navbar-area .navbar-nav li.menu-item-has-children>a",
      function (e) {
        e.preventDefault();
      }
    );

    if (document.getElementById("revenueChart") != null) {
      var ctx = document.getElementById("revenueChart").getContext("2d");
      ctx.canvas.height = 430;
      var myChart = new Chart(ctx, {
        type: "bar",
        data: {
          labels: ["Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
          font: {
            color: "#ffffff"
          },
          datasets: [
            {
              label: "# Monthly site visitors",
              data: [25, 45, 25, 30, 45, 25, 48],
              backgroundColor: ["rgba(20, 171, 239, 1)"],
              borderColor: ["#ffffff"],
              backgroundColor: [
                "#8542e7",
                "#045abe",
                "#f0438d",
                "#045abe",
                "#8542e7",
                "#045abe",
                "#f0438d"
              ],
              pointRadius: 0,
              pointHoverRadius: 5
            }
          ]
        },
        fontColor: "#ffffff",
        fontSize: "12",
        options: {
          maintainAspectRatio: false,
          elements: {
            line: {
              tension: 0
            }
          },
          scales: {
            xAxes: [
              {
                gridLines: {
                  color: "transparent"
                }
              }
            ],
            yAxes: [
              {
                gridLines: {
                  color: "transparent"
                },
                ticks: {
                  beginAtZero: true
                }
              }
            ]
          },
          legend: {
            display: false
          },
          tooltips: {
            callbacks: {
              label: function (tooltipItem) {
                return tooltipItem.yLabel;
              }
            }
          }
        }
      });
    }

    /*-------------------------------------
            menu activation
        -------------------------------------*/
    $(".menu").on("click", function (e) {
      e.preventDefault();
      $(this).toggleClass("open");
    });

    // mobile menu
    if ($(window).width() < 992) {
      $(".in-mobile").clone().appendTo(".sidebar-inner");
      $(".in-mobile ul li.menu-item-has-children").append(
        '<i class="fas fa-chevron-right"></i>'
      );
      $('<i class="fas fa-chevron-right"></i>').insertAfter("");

      $(".menu-item-has-children a").on("click", function (e) {
        // e.preventDefault();

        $(this).siblings(".sub-menu").animate(
          {
            height: "toggle"
          },
          300
        );
      });
    }

    var menutoggle = $(".menu-toggle");
    var mainmenu = $(".navbar-nav");

    menutoggle.on("click", function () {
      if (menutoggle.hasClass("is-active")) {
        mainmenu.removeClass("menu-open");
      } else {
        mainmenu.addClass("menu-open");
      }
    });

    /* -------------------------------------------------------------
            menu show Form
        ------------------------------------------------------------- */
    if ($(window).width() > 991) {
      if ($(".cat-menu").length) {
        $(".cat-menu").on("click", function () {
          $(".cat-menu-wrap .sidebar-categories").fadeToggle(
            "sidebar-categories-show",
            "linear"
          );
          $(".cat-menu").toggleClass("open");
        });

        $("body").on("click", function (event) {
          if (
            !$(event.target).closest(".cat-menu").length &&
            !$(event.target).closest(".cat-menu-wrap .sidebar-categories")
              .length
          ) {
            $(".cat-menu-wrap .sidebar-categories").fadeOut(
              "sidebar-categories-show"
            );
          }
          if (
            !$(event.target).closest(".cat-menu").length &&
            !$(event.target).closest(".cat-menu-wrap .sidebar-categories")
              .length
          ) {
            $(".cat-menu").removeClass("open");
          }
        });
      }
    }

    /*---------------------------
            banner V3 slider
        ---------------------------*/
    var bannerSlider = $(".banner-v3-slider-area-wrapper");
    if (bannerSlider.length) {
      bannerSlider
        .slick({
          slidesToShow: 1,
          autoplay: false,
          arrows: false,
          pauseOnFocus: true,
          pauseOnHover: false,
          pauseOnDotsHover: true,
          dots: true,
          autoplaySpeed: 10000,
          responsive: [
            {
              breakpoint: 769,
              settings: {
                dots: false
              }
            }
          ]
        })
        .slickAnimation();
    }

    $(".banner-v3-slider-area-wrapper").on(
      "beforeChange",
      function (event, slick, currentSlide, nextSlide) {
        var firstNumber = check_number(++nextSlide);
        $(".banner-v3-slider-controls .slider-extra .text .first").text(
          firstNumber
        );
        resetProgressbar(
          $(
            ".banner-v3-slider-controls .slider-extra .slider-progress .progress-width"
          )
        );
      }
    );
    $(".banner-v3-slider-area-wrapper").on(
      "afterChange",
      function (event, slick, currentSlide, nextSlide) {
        startProgressbar(
          $(
            ".banner-v3-slider-controls .slider-extra .slider-progress .progress-width"
          )
        );
      }
    );
    startProgressbar(
      $(
        ".banner-v3-slider-controls .slider-extra .slider-progress .progress-width"
      )
    );
    //progressbar js
    function startProgressbar(selector) {
      selector.css({
        width: "100%",
        transition: "all 10000ms"
      });
    }

    function resetProgressbar(selector) {
      selector.css({
        width: "0%",
        transition: "all 0ms"
      });
    }
    var bannerv3Slider = $(".banner-v3-slider-area-wrapper").slick("getSlick");
    var bannerv3SliderCount = bannerv3Slider.slideCount;
    $(".banner-v3-slider-controls .slider-extra .text .last").text(
      check_number(bannerv3SliderCount)
    );

    function check_number(num) {
      var IsInteger = /^[0-9]+$/.test(num);
      return IsInteger ? "0" + num : null;
    }

    /*---------------------------------------------------
            banner consult Slider
        ----------------------------------------------------*/
    $(".banner-silder")
      .slick({
        dots: true,
        autoplay: true,
        infinite: true,
        arrows: true,
        autoplaySpeed: 5000,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow:
          '<a class="slick-prev"><i class="fa fa-arrow-left" aria-hidden="true"></i></a>',
        nextArrow:
          '<a class="slick-next"><i class="fa fa-arrow-right" aria-hidden="true"></i></a>',
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      })
      .on("afterChange", function () {
        new WOW().init();
      });

    /*----------------------
            Search Popup
        -----------------------*/
    var bodyOvrelay = $("#body-overlay");
    var searchPopup = $("#search-popup");
    var sidebarMenu = $("#sidebar-menu");

    $(document).on("click", "#body-overlay", function (e) {
      e.preventDefault();
      bodyOvrelay.removeClass("active");
      searchPopup.removeClass("active");
      sidebarMenu.removeClass("active");
    });
    $(document).on("click", "#search", function (e) {
      e.preventDefault();
      searchPopup.addClass("active");
      bodyOvrelay.addClass("active");
    });

    // sidebar menu
    $(document).on("click", ".sidebar-menu-close", function (e) {
      e.preventDefault();
      bodyOvrelay.removeClass("active");
      sidebarMenu.removeClass("active");
    });
    $(document).on("click", "#navigation-button", function (e) {
      e.preventDefault();
      sidebarMenu.addClass("active");
      bodyOvrelay.addClass("active");
    });

    /*------------------
           back to top
       ------------------*/
    $(document).on("click", ".back-to-top", function () {
      $("html,body").animate(
        {
          scrollTop: 0
        },
        2000
      );
    });
  });

  /*-----------------
            scroll
    ------------------*/
  $(window).on("scroll", function () {
    var ScrollTop = $(".back-to-top");
    if ($(window).scrollTop() > 1000) {
      ScrollTop.fadeIn(1000);
    } else {
      ScrollTop.fadeOut(1000);
    }
  });

  $(window).on("load", function () {
    /*-----------------
            preloader
        ------------------*/
    var preLoder = $("#preloader");
    preLoder.fadeOut(0);

    /*-----------------
            back to top
        ------------------*/
    var backtoTop = $(".back-to-top");
    backtoTop.fadeOut();

    /*---------------------
            Cancel Preloader
        ----------------------*/
    $(document).on("click", ".cancel-preloader a", function (e) {
      e.preventDefault();
      $("#preloader").fadeOut(2000);
    });

    /**-------------------------------
     * - wow js init
     * ---------------------------**/
    new WOW().init();

    /* -------------------------------------------------------------
        fact counter
        ------------------------------------------------------------- */
    $(".counter").counterUp({
      delay: 15,
      time: 2000
    });

    /*---------------------------------------
            Nice Select
        ---------------------------------------*/
    if ($("select").length) {
      $("select").niceSelect();
    }
  });
  /* -------------------------------------------------
            Magnific JS 
    ------------------------------------------------- */
  $(".video-play-btn").magnificPopup({
    type: "iframe",
    removalDelay: 260,
    mainClass: "mfp-zoom-in"
  });
  $.extend(true, $.magnificPopup.defaults, {
    iframe: {
      patterns: {
        youtube: {
          index: "youtube.com/",
          id: "v=",
          src: "https://www.youtube.com/embed/ttv0ApD4wtw"
        }
      }
    }
  });

  /* -------------------------------------------------
        partner-slider JS 
    ------------------------------------------------- */
  $(".partner-slider").owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    smartSpeed: 1500,
    dots: false,
    responsive: {
      0: {
        items: 2
      },
      600: {
        items: 3
      },
      1000: {
        items: 4
      }
    }
  });

  // coun down Timer
  var myDate = new Date();
  myDate.setDate(myDate.getDate() + 7);
  $("#countdown").countdown(myDate, function (event) {
    $(this).html(
      event.strftime(
        '<div class="timer-wrapper"><div class="time">%D<span class="text">Days</span></div></div><div class="timer-wrapper"><div class="time">%H<span class="text">Hours</span></div></div><div class="timer-wrapper"><div class="time">%M<span class="text">Minutes</span></div></div><div class="timer-wrapper"><div class="time">%S<span class="text">Seconds</span></div></div>'
      )
    );
  });
  // coun down Timer
  var myDate = new Date();
  myDate.setDate(myDate.getDate() + 10);
  $("#countdown2").countdown(myDate, function (event) {
    $(this).html(
      event.strftime(
        '<div class="timer-wrapper"><div class="time">%D<span class="text">Days</span></div></div><div class="timer-wrapper"><div class="time">%H<span class="text">Hours</span></div></div><div class="timer-wrapper"><div class="time">%M<span class="text">Minutes</span></div></div><div class="timer-wrapper"><div class="time">%S<span class="text">Seconds</span></div></div>'
      )
    );
  });
  // coun down Timer
  var myDate = new Date();
  myDate.setDate(myDate.getDate() + 3);
  $("#countdown3").countdown(myDate, function (event) {
    $(this).html(
      event.strftime(
        '<div class="timer-wrapper"><div class="time">%D<span class="text">Days</span></div></div><div class="timer-wrapper"><div class="time">%H<span class="text">Hours</span></div></div><div class="timer-wrapper"><div class="time">%M<span class="text">Minutes</span></div></div><div class="timer-wrapper"><div class="time">%S<span class="text">Seconds</span></div></div>'
      )
    );
  });

  $(".invest-go-top")
    .find("a")
    .on("click", function () {
      $(window).scrollTop(0);
    });
})(jQuery);

$(function () {
  $(".input input")
    .focus(function () {
      $(this)
        .parent(".input")
        .each(function () {
          $("label", this).css({
            "line-height": "18px",
            "font-size": "18px",
            "font-weight": "100",
            top: "0px"
          });
          $(".spin", this).css({
            width: "100%"
          });
        });
    })
    .blur(function () {
      $(".spin").css({
        width: "0px"
      });
      if ($(this).val() == "") {
        $(this)
          .parent(".input")
          .each(function () {
            $("label", this).css({
              "line-height": "60px",
              "font-size": "24px",
              "font-weight": "300",
              top: "10px"
            });
          });
      }
    });

  $(".button").click(function (e) {
    var pX = e.pageX,
      pY = e.pageY,
      oX = parseInt($(this).offset().left),
      oY = parseInt($(this).offset().top);

    $(this).append(
      '<span class="click-efect x-' +
        oX +
        " y-" +
        oY +
        '" style="margin-left:' +
        (pX - oX) +
        "px;margin-top:" +
        (pY - oY) +
        'px;"></span>'
    );
    $(".x-" + oX + ".y-" + oY + "").animate(
      {
        width: "500px",
        height: "500px",
        top: "-250px",
        left: "-250px"
      },
      600
    );
    $("button", this).addClass("active");
  });

  $(".alt-2").click(function () {
    if (!$(this).hasClass("material-button")) {
      $(".shape").css({
        width: "100%",
        height: "100%",
        transform: "rotate(0deg)"
      });

      setTimeout(function () {
        $(".overbox").css({
          overflow: "initial"
        });
      }, 600);

      $(this).animate(
        {
          width: "140px",
          height: "140px"
        },
        500,
        function () {
          $(".box").removeClass("back");

          $(this).removeClass("active");
        }
      );

      $(".overbox .title").fadeOut(300);
      $(".overbox .input").fadeOut(300);
      $(".overbox .button").fadeOut(300);

      $(".alt-2").addClass("material-buton");
    }
  });

  $(".material-button").click(function () {
    if ($(this).hasClass("material-button")) {
      setTimeout(function () {
        $(".overbox").css({
          overflow: "hidden"
        });
        $(".box").addClass("back");
      }, 200);
      $(this).addClass("active").animate({
        width: "700px",
        height: "700px"
      });

      setTimeout(function () {
        $(".shape").css({
          width: "50%",
          height: "50%",
          transform: "rotate(45deg)"
        });

        $(".overbox .title").fadeIn(300);
        $(".overbox .input").fadeIn(300);
        $(".overbox .button").fadeIn(300);
      }, 700);

      $(this).removeClass("material-button");
    }

    if ($(".alt-2").hasClass("material-buton")) {
      $(".alt-2").removeClass("material-buton");
      $(".alt-2").addClass("material-button");
    }
  });
});

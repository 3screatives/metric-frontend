$(document).ready(function () {
    //media
    $("span.news").click(function () {
        if (!$(this).hasClass("show")) {
            $(this).addClass("show");
            $("span.videos").removeClass("show");
            $(".news-slider").addClass("show");
            $(".videos-slider").removeClass("show");
        }
    });
    $("span.videos").click(function () {
        if (!$(this).hasClass("show")) {
            $(this).addClass("show");
            $("span.news").removeClass("show");
            $(".videos-slider").addClass("show");
            $(".news-slider").removeClass("show");
        }
    });

    //menu
    $(".menu-btn").click(function () {
        $(this).addClass("open");
        $(".menu-main").addClass("show");
        $(".menu-close-btn").addClass("animate-close");
        $(".contact-panel").removeClass("show");
    });
    $(".menu-close-btn").click(function () {
        $(".menu-btn").removeClass("open");
        $(".menu-main").removeClass("show");
        setTimeout(function () {
            $(".menu-close-btn").removeClass("animate-close");
        }, 500);
    });

    //contact panel
    $("#contact-btn, #contact-btn-black").click(function () {
        $(".contact-panel").addClass("show");
        $(".menu-btn").removeClass("open");
        $(".menu-main").removeClass("show");
        setTimeout(function () {
            $(".menu-close-btn").removeClass("animate-close");
        }, 500);
    });
    $(".close-btn").click(function () {
        $(".contact-panel").removeClass("show");
    });

    //Video popup Home
    $(".open-video").click(function () {
        if ($(this).hasClass("open")) {
            $(this).removeClass("open");
            $(".video-pop").fadeOut();
        } else {
            $(this).addClass("open");
            $(".video-pop").css("display", "flex").hide().fadeIn();
        }
    });
    $(".play-close").click(function () {
        $(".open-video").removeClass("open");
        $(".video-pop").fadeOut();
        var video = $(".video-pop iframe").attr("src");
        $(".video-pop iframe").attr("src", "");
        $(".video-pop iframe").attr("src", video);
    });

    $(".codAnimate-1").addClass("codText-1");
    $(".codAnimate-2").addClass("codText-2");
    $(".codAnimate-3").addClass("codText-3");
});

$(document).mouseup(function (e) {
    var containerVideo = $(".video-pop iframe");
    if (
        !containerVideo.is(e.target) &&
        containerVideo.has(e.target).length === 0
    ) {
        $(".open-video").removeClass("open");
        $(".video-pop").fadeOut();
        var video = $(".video-pop iframe").attr("src");
        $(".video-pop iframe").attr("src", "");
        $(".video-pop iframe").attr("src", video);
    }
});

$(window).scroll(function () {
    var mainScroll = $(window).scrollTop();
    var standAloneTop = $(".standalone").offset().top;
    var actualOffset = standAloneTop - $(window).height() / 2;
    var productOffset = $(".products-services").offset().top;
    var sportsbookOffset = $(".sportsbook").offset().top;
    var footerOffset = $("footer").offset().top;
    var footerOffsetHalf = $("footer").offset().top - $(window).height() / 2;

    if (mainScroll >= actualOffset && mainScroll <= footerOffsetHalf) {
        $('#contact-btn svg g[aria-label="Contact Us"]').css(
            "fill",
            "rgb(31 52 93)"
        );
        $("#contact-btn svg path").css("stroke", "rgb(31 52 93)");
    } else if (mainScroll >= footerOffsetHalf) {
        $('#contact-btn svg g[aria-label="Contact Us"]').css(
            "fill",
            "rgb(0,174,239)"
        );
        $("#contact-btn svg path").css("stroke", "rgb(0,174,239)");
    } else {
        $('#contact-btn svg g[aria-label="Contact Us"]').css(
            "fill",
            "rgb(0,174,239)"
        );
        $("#contact-btn svg path").css("stroke", "rgb(0,174,239)");
    }

    if (mainScroll <= productOffset - 48) {
        $(".menu-btn span").removeClass("black");
    } else if (
        mainScroll >= productOffset - 48 &&
        mainScroll <= sportsbookOffset - 48
    ) {
        $(".menu-btn span").addClass("black");
    } else if (
        mainScroll >= sportsbookOffset - 48 &&
        mainScroll <= standAloneTop - 48
    ) {
        $(".menu-btn span").removeClass("black");
    }

    if (mainScroll >= standAloneTop - 48 && mainScroll <= footerOffset - 48) {
        $(".logo img").attr("src", "images/metric-logo-black.png");
        $(".menu-btn span").addClass("black");
    } else if (mainScroll >= footerOffset - 48) {
        $(".logo img").attr("src", "images/metric-logo.png");
        $(".menu-btn span").removeClass("black");
    } else {
        $(".logo img").attr("src", "images/metric-logo.png");
    }
});

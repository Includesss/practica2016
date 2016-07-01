function showMenu() {
    $(".mobileNav").show().scrollTop(0);
    $("body").addClass("modal-open");

    setTimeout(function () {
        $(".mobileNav").addClass("in");
    }, 100);
}

function hideMenu() {
    $(".mobileNav").removeClass("in");

    setTimeout(function () {
        $("body").removeClass("modal-open");
        $(".mobileNav").hide();
    }, 300);
}

$(".js-open-menu").on("click", function () {
    showMenu();
});

$(".js-close-menu").on("click", function () {
    hideMenu();
});

$(".mobileNav").on("click", function (event) {
    if (!$(event.target).closest(".mobileNav-inner").length) {
        hideMenu();
    }
});
// Linear gradient for text
$(".js-gradient-text, .text-content blockquote").gradientText({
    colors: ['#FCAE00', '#F9495C'],
    toProcess: ['a']
});

// Update background position for wire on speaking page
if ($(".page--speaking").length && $(".microcord-placeholder").length) {
    function updateWireBgPosition() {
        var wirePosition = $(".microcord-placeholder").offset().top - $(".page--speaking").offset().top;

        $(".page--speaking").css("background-position", "100% " + wirePosition + "px");
    }

    $(window).on("resize", updateWireBgPosition);
    updateWireBgPosition();
}

// Animation
var animationsController = new ScrollMagic.Controller({});

animationsController.addScene([
    // Paralax for body backgrounds
    new ScrollMagic
        .Scene({triggerElement: "body", triggerHook: "onLeave", duration: 400})
        .setTween(TweenMax.to("body", 1, {backgroundPosition: "100% -150px", ease: Linear.easeNone})),

    // Show page next link
    new ScrollMagic
        .Scene({triggerElement: ".page-footer", triggerHook: "onEnter", reverse: false, offset: 100})
        .setTween(TweenMax.from(".page-footer", 1, {opacity: "0", y: 60, duration: 100}))
]);
// ROCKET LAUNCH
// =============================================

var rocketsLaunched = 0;

$("#launchPad").on("click", countDown);

// Count down to blast off
function countDown() {

    // Prevents user from spamming Launch button
    if (rocketsLaunched == 0) {

        rocketsLaunched += 1;

        // Hide expanded sections
        $(".moreInfo").slideUp();
        $(".showMore").text("Show more");
        $(".showMore").attr("data-status", "more");

        var count = 3;

        $("#launchText")
            .text(count);

        var interval = setInterval(function () {
            count -= 1;

            switch (count) {
                case 0: $("#launchText").text("Blast off!"); break;
                case -1: launchRocket(); clearInterval(interval); break;
                default: $("#launchText").text(count);
            }

        }, 400);
    }
}

// Handles rocket launching and display changes
function launchRocket() {

    var rocketTime = 3000;              // Time for rocket to fly to top of screen
    var scrollTime = 2800;              // Time to scroll to top of page
    var showStarsTime = 500;            // Time to fade in stars
    var hideStarsTime = 2000;           // Time to fade out stars
    var showOverlayTime = 2000;         // Time to fade in overlay
    var starDisplayTime = 4500;         // Time to keep stars displayed
    var showQuoteTime = 2500;           // Time to fade in quote
    var hideQuoteTime = 500;            // Time to fade out quote
    var showGradientTime = 500;         // Time to fade in background gradient
    var hideGradientTime = 500;         // Time to fade out background gradient

    // Hide launch button and pad
    $("#launchButton").hide();
    $("#launchText").hide();

    // Hide the jumbotron overlay
    $("#overlay").animate({
        opacity: 0
    }, 500);

    // Hide main header
    $("#mainHeader").animate({
        opacity: 0
    }, 500);

    // Get height to use
    var body = document.body,
        html = document.documentElement;

    var height = Math.max(
        window.screen.height,
        body.scrollHeight,
        body.offsetHeight,
        html.clientHeight,
        html.scrollHeight,
        html.offsetHeight
    );

    // Show rocket
    $("#rocket").animate({
        opacity: 1
    }, 500);

    // Show and size gradient
    $("#gradient").show().css("height", height - 900);

    setTimeout(function () {

        // Launch Rocket
        $("#rocketLaunch").animate({
            marginTop: `-=${height}`,
        }, rocketTime);

        // Make window scroll to top    
        $("html, body").animate({ scrollTop: 0 }, scrollTime);

        // Show background gradient
        $("#gradient").animate({
            opacity: 0.8
        }, showGradientTime);

        // Change profile picture to moon
        // $("#profileImg")
        //     .attr("src", "./assets/images/moon.jpg")
        //     .css("border", "1px solid black");

        // Show stars
        $("#stars").animate({
            opacity: 1,
        }, showStarsTime);

        // Show quote
        setTimeout(function () {
            $("#quote").animate({
                opacity: 1,
            }, 500);

        }, showQuoteTime);

        // Return display to normal 
        setTimeout(function () {

            // Hide rocket
            $("#rocket").hide();

            // Change profile picture back to portrait
            // $("#profileImg")
            //     .addClass("profileImgHover")
            //     .attr("src", "./assets/images/curtis.png")
            //     .css("border", "1px solid darkgray");

            // Fade out stars
            $("#stars").animate({
                opacity: 0,
            }, hideStarsTime);

            // Fade out gradient
            $("#gradient").animate({
                opacity: 0,
            }, hideGradientTime);

            // Fade out quote
            $("#quote").animate({
                opacity: 0,
            }, hideQuoteTime);

            // Fade out gradient
            $("#gradient").animate({
                opacity: 0
            }, 700);

            setTimeout(function () { $("#gradient").hide() }, 500);

            // Fade in overlay
            $("#overlay").animate({
                opacity: 0.75,
            }, showOverlayTime);

            // Fade in name and tagline
            $("#mainHeader").animate({
                opacity: 1,
            }, showOverlayTime);

            $("#rocketLaunch").hide();

            $("#backToTop")
                .css("display", "block")
                .text("Back to Top");

        }, starDisplayTime);

    }, 500);
}

$("#backToTop").on("click", function() {
    $("html, body").animate({ scrollTop: 0 }, 500);
});
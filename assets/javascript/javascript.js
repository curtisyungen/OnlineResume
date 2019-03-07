// SHOW MORE / SHOW LESS
// =============================================

// Event Handler

$(".showMore").on("click", showMore);

// Show More Function
// Called when "show more" or "show less" is clicked
// Displays more or less info about category

function showMore() {

    // Get status attribute from clicked link
    var status = $(this).attr("data-status");

    // Get label name to which this link pertains
    var label = $(this).attr("data-label");

    // Toggle show more/less info
    // Update status and text of link
    if (status == "more") {

        // Show more
        $(`#${label}`).slideDown("slow");

        // Rotate plane icon
        // $(`#${label}Icon`).css("transform", "rotate(90deg)");

        $(this)
            .attr("data-status", "less")
            .text("Show less");
    }
    else {

        // Show less
        $(`#${label}`).slideUp("slow");

        // Rotate plane icon
        // $(`#${label}Icon`).css("transform", "rotate(270deg)");

        $(this)
            .attr("data-status", "more")
            .text("Show more");
    }
}



// BLUE ANGELS
// =============================================

// Event handler profile image hover

$("#profileImg").on("mouseenter", promptJets);
$("#profileImg").on("mouseout", hidePromptJets);

function promptJets() {
    $("#promptJets").show();
}

function hidePromptJets() {
    $("#promptJets").hide();
}

// Secondary handlers

$("#promptJets").on("mouseenter", promptJets);
$("#promptJets").on("click", flyJets);

// Event Handler profile image click

$("#profileImg").on("click", flyJets);

// Fly Jets Function
// Called when profile image is clicked
// Creates blue angel icons and moves them across screen

function flyJets() {

    // Create div that will house blue angel icons
    var blueAngels = $("<div>").attr("id", "blueAngels");

    blueAngels.css("left", "-5%");

    // Generate random number of jets between 2 and 5
    var numJets = Math.floor((Math.random() * 2) + 1 + Math.floor(Math.random() * 3) + 1);

    // Generate formation ID
    var formation = Math.floor((Math.random() * 4) + 1);

    // Create jets and populate div
    for (var j = 0; j < numJets; j++) {

        var jet = $("<p>").addClass("fas fa-fighter-jet fa-3x blueAngel");

        // Create formation
        switch (formation) {
            case 1: if ((j % 2 == 0)) { jet.css("margin-left", "-45px"); } break; // V formation
            case 2: jet.css("margin-left", "-5px"); break;                        // Vertical Line formation
            case 3: if ((j % 2 != 0)) { jet.css("margin-left", "-45px"); } break; // Inverse V formation
            case 4: jet.css("margin-left", `${"-25" - (j * 25)}px`); break;       // Diagonal formation
            default: if ((j % 2 == 0)) { jet.css("margin-left", "-45px"); }
        }

        blueAngels.append(jet);
        blueAngels.append("<br>");
    }

    $("#blueAngelRow").append(blueAngels);

    // Get width to use
    var body = document.body,
        html = document.documentElement;

    var width = Math.max(
        window.screen.width,
        body.scrollWidth,
        body.offsetWidth,
        html.clientWidth,
        html.scrollWidth,
        html.offsetWidth
    );

    // Animate the div
    blueAngels.animate({
        marginLeft: `+=${width * 1.25}`,
    }, width * 1.25)

    // Delete jet div after animation
    setTimeout(function () {
        blueAngels.animate({
            opacity: 0
        }, 500);

        blueAngels.remove();
    }, width * 1.25);
}


// PORTFOLIO SECTION: INFO BOXES
// =============================================

var openBox = "";

$(".projInfo").on("click", toggleInfoBox);

function toggleInfoBox() {

    // Identify box that was clicked
    var $this = $(this);

    // Identify ID data attribute of box that was clicked
    var boxId = $this.attr("data-id");

    // Determine whether to open or close clicked info box
    var status = $this.attr("data-status");

    // Close open box
    if (openBox != "" && openBox != $this) {

        // Will use for targeting the text of the open box
        var openBoxId = openBox.attr("data-id");
        
        // Shrink open box
        $(openBox).animate({
            opacity: 0.125,
            width: 80
        }, 750);

        // Fade out open box text
        $(`#${openBoxId}`).animate({
            opacity: 0
        }, 100);

        // Reset the arrow icon of the open box
        $(openBox).children(".arrow")
            .removeClass("fa-arrow-circle-right")
            .addClass("fa-arrow-circle-left");
        
        // Update the status of open box
        $(openBox).attr("data-status", "closed");

        // Clear the open box variable
        openBox = "";
    }    

    if (status == "closed") {

        // Update status
        $this.attr("data-status", "open");

        openBox = $this;

        // Get width to use
        var body = document.body,
            html = document.documentElement;

        var width = Math.min(
            window.screen.width,
            body.scrollWidth,
            body.offsetWidth,
            html.clientWidth,
            html.scrollWidth,
            html.offsetWidth
        );

        // Adjust width to be responsive to window size
        var adjust = 360;

        if (width < 960) {
            adjust = 0;
        }

        // Expand info box
        $this.animate({
            opacity: 1,
            width: width - adjust
        }, 750);

        // Show info box text
        setTimeout(function () {
            $(`#${boxId}`).animate({
                opacity: 1
            }, 250);
        }, 650);

        // Flip arrow
        $this.children(".arrow")
            .removeClass("fa-arrow-circle-left")
            .addClass("fa-arrow-circle-right");

    }

    else if (status == "open") {

        // Update status
        $this.attr("data-status", "closed");

        // Hide info box text
        $(`#${boxId}`).animate({
            opacity: 0
        }, 100);

        // Shrink info box
        $this.animate({
            opacity: 0.125,
            width: 80
        }, 750);

        // Flip arrow
        $this.children(".arrow")
            .removeClass("fa-arrow-circle-right")
            .addClass("fa-arrow-circle-left");
    }
}


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

        setInterval(function () {
            count -= 1;

            switch (count) {
                case 0: $("#launchText").text("Blast off!"); break;
                case -1: launchRocket(); break;
                default: $("#launchText").text(count);
            }

        }, 900);
    }
}

// Handles rocket launching and display changes
function launchRocket() {

    var rocketTime = 3000;              // Time for rocket to fly to top of screen
    var scrollTime = 2800;              // Time to scroll to top of page
    var showStarsTime = 500;            // Time to fade in stars
    var hideStarsTime = 2000;           // Time to fade out stars
    var showOverlayTime = 2000;         // Time to fade in overlay
    var starDisplayTime = 5200;         // Time to keep stars displayed
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

            // Replace launch button w/ Contact label in footer
            $("#contact").text("Contact").css("margin-bottom", "-50px").css("margin-top", "-15px");

        }, starDisplayTime);

    }, 500);
}

// TOASTMASTERS: DEFINE 'OFFICIAL CLUB'

$("#definition").hover(function () {
    $("#officialClub").animate({
        opacity: 1
    }, 500);
}, function () {
    $("#officialClub").animate({
        opacity: 0
    }, 500)
});

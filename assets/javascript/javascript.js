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
            case 3: if ((j % 2 != 0)) { jet.css("margin-left", "-45px"); } break; // inverse V formation
            case 4: jet.css("margin-left", `${"-25" - (j * 25)}px`); break;           // Diagonal formation
            default: if ((j % 2 == 0)) { jet.css("margin-left", "-45px"); }
        }

        blueAngels.append(jet);
        blueAngels.append("<br>");
    }

    $("#blueAngelRow").append(blueAngels);

    var width = window.screen.width;

    // Animate the div
    blueAngels.animate({
        marginLeft: `+=${width * 1.25}`,
    }, width)

    // Delete jet div after animation
    setTimeout(function () {
        blueAngels.remove();
    }, width * 0.70);
}

// ROCKET LAUNCH
// =============================================

// Event handler profile image hover
$("#launchButton").on("click", countDown);

// Count down to blast off
function countDown() {

    var count = 3;

    $("#launchButton").text(count);

    setInterval(function() {
        count -= 1;

        switch (count) {
            case 0: $("#launchButton").text("Blast off!"); break;
            case -1: launchRocket(); break;
            default: $("#launchButton").text(count);
        }
        
    }, 900);
}

// Handles rocket launching and display changes
function launchRocket() {

    var rocketTime = 4000;              // Time for rocket to fly across screen
    var scrollTime = rocketTime - 1500; // Time to scroll to top of page
    var showStarsTime = 500;            // Time to fade in stars
    var hideStarsTime = 2000;           // Time to fade out stars
    var showOverlayTime = 2000;         // Time to fade in overlay
    var starDisplayTime = 5200;         // Time to keep stars displayed
    var showQuoteTime = 2500;           // Time to fade in quote
    var hideQuoteTime = 500;            // Time to fade out quote

    // Hide launch button
    $("#launchButton").hide();
    $("#portfolioContainer").css("margin-bottom", "-50px");

    // Hide the jumbotron overlay
    $("#overlay").css("opacity", 0);

    // Hide expanded sections
    $("#moreAboutMe").hide();
    $("#boeing").hide();

    // Hide main header
    $("#mainHeader").css("opacity", 0);

    // Get height of window
    var height = window.screen.height;

    // Show rocket
    $("#rocket").css("opacity", 1);

    // Launch Rocket
    $("#rocketLaunch").animate({
        marginTop: `-=${height * 4.5}`,
    }, rocketTime);

    // Make window scroll to top    
    $("html, body").animate({ scrollTop: 0 }, scrollTime);

    // Show stars
    $("#stars").animate({
        opacity: 1,
    }, showStarsTime);
    
    // Show quote
    setTimeout(function() {
        $("#quote").animate({
            opacity: 1,
        }, 500);
    }, showQuoteTime);

    // Return display to normal 
    setTimeout(function () {
        $("#stars").animate({
            opacity: 0,
        }, hideStarsTime);

        $("#overlay").animate({
            opacity: 0.75,
        }, showOverlayTime);

        $("#mainHeader").animate({
            opacity: 1,
        }, showOverlayTime);

        $("#quote").animate({
            opacity: 0,
        }, hideQuoteTime);

    }, starDisplayTime);
}


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

// Back up handlers

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
        if (formation != 5) {
            blueAngels.append("<br>");
        }
    }

    $("#blueAngelRow").append(blueAngels);

    var width = window.screen.width;

    // Animate the div
    blueAngels.animate({
        marginLeft: `+=${width + 125}`,
    }, width)

    // Delete jet div after animation
    setTimeout(function () {
        blueAngels.remove();
    }, width * 0.95);
}

// ROCKET LAUNCH
// =============================================

// Event handler profile image hover
$("#launchButton").on("click", launchRocket);

function launchRocket() {

    // Hide launch button
    $("#launchButton").hide();

    $("#overlay").css("opacity", 0);

    // Get height of window
    var height = window.screen.height;

    // Countdown

    // Launch Rocket
    $("#rocketLaunch").animate({
        marginTop: `-=${height * 4.5}`,
    }, 8000);

    // Show stars
    $("#stars").animate({
        opacity: 1,
    }, 3000);

    // Unhide overlay
    setTimeout(function() {
        // Hide stars
        $("#stars").animate({
            opacity: 0,
        },2000);

        $("#overlay").animate({
            opacity: 0.75,
        }, 2000)
    }, 7000);
}


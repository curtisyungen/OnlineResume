// PORTFOLIO SECTION: INFO BOXES
// =============================================

$(".projInfo").on({
        mouseenter: function() {
            if ($(this).attr("data-status") == "closed") {
                $(this).css("opacity", "1");
            }
        },
        mouseleave: function() {
//             if ($(this).attr("data-status") == "closed") {
//                 $(this).css("opacity", ".125");
//             }
        }
    });

var openBox = "";

$(".projInfo").on("click", toggleInfoBox);

function toggleInfoBox() {

    // Identify box that was clicked
    var $this = $(this);

    // Identify ID data attribute of box that was clicked
    var boxId = $this.attr("data-id");

    // Create reference for text to be displayed
    var infoText = $(`#${boxId}`);

    // Determine whether to open or close clicked info box
    var status = $this.attr("data-status");

    // Close open box
    if (openBox != "" && openBox != $this) {

        // Will use for targeting the text of the open box
        var openBoxId = openBox.attr("data-id");

        // Shrink open box
        $(openBox).animate({
//             opacity: 0.125,
            width: 80
        }, 400);

        // Fade out open box text
        $(`#${openBoxId}`).animate({
            opacity: 0
        }, 100);

        $(`#${openBoxId}`).hide();

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
        // 180 padding left and right
        var adjust = 180 + 180;

        if (width < 960) {
            adjust = 10; // 5 padding both left and right
        }

        // Set width of info text based on info box width
        // 50 is the width of the arrow icon
        var textWidth = width - adjust - 50;

        $this.children(".projInfoText").css("width", textWidth);

        // Expand info box
        $this.animate({
            opacity: 1,
            width: width - adjust + 6
        }, 400);

        // Show info box text
        infoText.show();

        // Fade in info box text
        setTimeout(function () {
            infoText.animate({
                opacity: 1
            }, 250);
        }, 300);

        // Flip arrow
        $this.children(".arrow")
            .removeClass("fa-arrow-circle-left")
            .addClass("fa-arrow-circle-right");

    }

    else if (status == "open") {

        // Update status
        $this.attr("data-status", "closed");

        // Fade out info box text
        $(`#${boxId}`).animate({
            opacity: 0
        }, 100);

        infoText.hide();

        // Shrink info box
        $this.animate({
//             opacity: 0.125,
            width: 80
        }, 400);

        // Flip arrow
        $this.children(".arrow")
            .removeClass("fa-arrow-circle-right")
            .addClass("fa-arrow-circle-left");
    }
}


// Hide all info boxes on window resize
// This is to prevent box from being too large or too small after window adjustment
$(window).on("resize", hideOpenBox);

function hideOpenBox() {

    // Close open box
    if (openBox != "") {

        // Will use for targeting the text of the open box
        var openBoxId = openBox.attr("data-id");

        // Shrink open box
        $(openBox).animate({
//             opacity: 0.125,
            width: 80
        }, 400);

        // Fade out open box text
        $(`#${openBoxId}`).animate({
            opacity: 0
        }, 100);

        $(`#${openBoxId}`).hide();

        // Reset the arrow icon of the open box
        $(openBox).children(".arrow")
            .removeClass("fa-arrow-circle-right")
            .addClass("fa-arrow-circle-left");

        // Update the status of open box
        $(openBox).attr("data-status", "closed");

        // Clear the open box variable
        openBox = "";
    }
}

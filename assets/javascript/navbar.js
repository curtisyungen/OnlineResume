// NAVBAR 
// =============================================

// Displays navbar and controls navbar scrolling
$(window).on('load, scroll', function() {
    
    // Get window vertical scroll distance
    var y_scroll_pos = window.pageYOffset;
    var scroll_pos_test = $("#navbar-arrow").offset().top + 2;  
    
    var $navbar = $("#navbar");

    // Navbar scroll with window
    if (y_scroll_pos >= scroll_pos_test) {
        $navbar
            .css("top", "58px")
            .css("position", "fixed");        
    }

    // Keep navbar in starting place
    else {
        $navbar
            .css("top", "auto")
            .css("position", "absolute");
    }

    // Control highlighting of Navbar Items
    $("#nav-about").css("background", "none");
    $("#nav-skills").css("background", "none");
    $("#nav-projects").css("background", "none");
    $("#nav-experience").css("background", "none");
    $("#nav-education").css("background", "none");
    $("#nav-affiliations").css("background", "none");
    $("#nav-contact").css("background", "none");

    if ($(window).scrollTop() + $(window).height() == $(document).height()) {
        $("#nav-contact").css("background", "rgb(0, 57, 166)");
    }
    else if (y_scroll_pos >= $("#pastContainer").offset().top - 200) {
        $("#nav-affiliations").css("background", "rgb(0, 57, 166)");
    }
    else if (y_scroll_pos >= $(".educationTitle").offset().top) {
        $("#nav-education").css("background", "rgb(0, 57, 166)");
    }
    else if (y_scroll_pos >= $("#workExpContainer").offset().top) {
        $("#nav-experience").css("background", "rgb(0, 57, 166)");
    }
    else if (y_scroll_pos >= $("#portfolioContainer").offset().top) {
        $("#nav-projects").css("background", "rgb(0, 57, 166)");
    }
    else if (y_scroll_pos >= $("#techContainer").offset().top) {
        $("#nav-skills").css("background", "rgb(0, 57, 166)");
    }
    else if (y_scroll_pos >= $("#aboutMeContainer").offset().top) {
        $("#nav-about").css("background", "rgb(0, 57, 166)");
    }
});

// Scroll to section on page when navbar clicked
$(".navbar-item").on("click", function() {
    var title = $(this).attr("data-title");
    var scroll = 0;

    switch (title) {
        case "arrow": scroll = $("#navbar-arrow").offset().top + 60; break;
        case "about": scroll = $("#aboutMeContainer").offset().top; break;
        case "skills": scroll = $("#techContainer").offset().top; break;
        case "projects": scroll = $("#portfolioContainer").offset().top; break;
        case "experience": scroll = $("#workExpContainer").offset().top; break;
        case "education": scroll = $(".educationTitle").offset().top; break;
        case "affiliations": scroll = $("#pastContainer").offset().top; break;
        case "contact": scroll = $("#footerContainer").offset().top; break;
        default: "";
    }

    $("html, body").animate({ scrollTop: scroll }, 400);
});

// Animates navbar arrow to move up and down
function floatArrow() {

    $(".fa-chevron-down").animate({
        marginTop: `-=10`,
    }, 500);

    setInterval(function() {
        
        $(".fa-chevron-down").animate({
            marginTop: `+=10`,
        }, 500);

        $(".fa-chevron-down").animate({
            marginTop: `-=10`,
        }, 500);

    }, 500);
}

floatArrow();

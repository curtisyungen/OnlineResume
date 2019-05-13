// NAVBAR 
// =============================================

$(window).on('load, scroll', function() {
    
    var y_scroll_pos = window.pageYOffset;
    var scroll_pos_test = $("#navbar-arrow").offset().top + 180;  
    
    var $navbar = $("#navbar");

    // Navbar Movement
    if (y_scroll_pos >= scroll_pos_test) {
        $navbar
            .css("top", "58px")
            .css("position", "fixed");        
    }
    else {
        $navbar
            .css("top", "auto")
            .css("position", "absolute");
    }
});

$(".navbar-item").on("click", function() {
    var title = $(this).attr("data-title");
    var scroll = 0;

    console.log(title);

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
})


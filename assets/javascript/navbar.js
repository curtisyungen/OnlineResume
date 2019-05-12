// NAVBAR 
// =============================================

$(window).on('load, scroll', function() {
    
    var y_scroll_pos = window.pageYOffset;
    var scroll_pos_test = 750;  
    
    var $navbar = $("#navbar");

    // Navbar Movement
    if (y_scroll_pos > scroll_pos_test) {
        $navbar
            .css("top", "50px")
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
        case "arrow": scroll = 800; break;
        case "about": scroll = 1100; break;
        case "skills": scroll = 1400; break;
        case "projects": scroll = 1700; break;
        case "experience": scroll = 2300; break;
        case "education": scroll = 2650; break;
        case "affiliations": scroll = 2850; break;
        case "contact": scroll = 3200; break;
        default: "";
    }

    $("html, body").animate({ scrollTop: scroll }, 500);
})


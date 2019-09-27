// Running Animation
// ============================================
$(".factRunning").hover(
    function() {
        $(".fa-running").animate({
            marginLeft: "+=25px"
        }, 500);
    },
    function() {
        $(".fa-running").animate({
            marginLeft: "-=25px"
        }, 500);
    }
)

// Juggling Animation
// ============================================
$(".factJuggling").hover(
    function() {

    }
);

// Guitar Animation
// ============================================
$(".factMusic").hover(
    function() {
        var $this = $(".fa-guitar");
        $this.css("transition", "1s");
        $this.css("color", "black");
        $this.css("transform", "rotate(45deg)");
    },
    function() {
        var $this = $(".fa-guitar");

        $this.css("color", "black");
        $this.css("transform", "rotate(0deg)");
    }
)


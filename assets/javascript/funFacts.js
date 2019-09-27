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
        for (var i=1; i<4; i++) {
            $(`#ball${i}`)
                .css("transition", "0.75s")
                .css("margin-left", `${i * -20}px`);
        }
        for (var i=4; i<8; i++) {
            $(`#ball${i}`)
                .css("transition", "1s")
                .css("margin-left", `${(i-4) * 20}px`);
        }
    },
    function() {
        for (var i=1; i<8; i++) {
            $(`#ball${i}`).css("margin-left", `0px`);
        }
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


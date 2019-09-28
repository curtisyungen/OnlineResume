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
        for (var i=2; i<=4; i++) {
            $(`#ball${i}`)
                .css("transition", "0.75s")
                .css("margin-left", `${(i-1) * -20}px`);
        }
        for (var i=5; i<8; i++) {
            $(`#ball${i}`)
                .css("transition", "1s")
                .css("margin-left", `${(i-4) * 20}px`);
        }
    },
    function() {
        $("#ball4").css("margin-left", "-20px");
        $("#ball7").css("margin-left", "20px");

        for (var i=1; i<7; i++) {
            if (i !== 4) {
                $(`#ball${i}`).css("margin-left", `0px`);
            }
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


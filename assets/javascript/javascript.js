$(".showMore").on("click", showMore);

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
        $(`#${label}Icon`).css("transform", "rotate(90deg)");

        $(this)
        .attr("data-status", "less")
        .text("Show less");
    }
    else {

        // Show less
        $(`#${label}`).slideUp("slow");

        // Rotate plane icon
        $(`#${label}Icon`).css("transform", "rotate(270deg)");

        $(this)
        .attr("data-status", "more")
        .text("Show more");
    }
}

$("#profileImg").on("click", flyJets);

function flyJets() {

    var blueAngels = $("<div>").attr("id", "blueAngels");

        // Create jets and populate div
        for (var j=0; j<3; j++) {

            var jet = $("<p>").addClass("fas fa-fighter-jet blueAngel");

            // Create V formation
            if ((j % 2 != 0)) {
                jet.css("margin-left", "-20px");
            }

            blueAngels.append(jet);
            blueAngels.append("<br>");
        }

        $("#blueAngelRow").append(blueAngels);

        // Animate the div
        blueAngels.animate({ 
            marginLeft: "+=1800px",
        }, 2000)
        
        // Reset jets after certain time
        setTimeout(function() {
            blueAngels.remove();
        }, 1950);
    
    
}


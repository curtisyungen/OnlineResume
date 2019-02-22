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

        $(this)
        .attr("data-status", "less")
        .text("Show less");
    }
    else {

        // Show less
        $(`#${label}`).slideUp("slow");

        $(this)
        .attr("data-status", "more")
        .text("Show more");
    }
}


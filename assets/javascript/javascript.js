$(".showMore").on("click", showMore);

function showMore() {

    // Get status attribute from clicked link
    var status = $(this).attr("data-status");

    // Get label name to which this link pertains
    var label = $(this).attr("data-label");

    // Update status and text of link
    if (status == "more") {

        $(`#${label}`).show();

        $(this)
        .attr("data-status", "less")
        .text("Show less");
    }
    else {

        $(`#${label}`).hide();

        $(this)
        .attr("data-status", "more")
        .text("Show more");
    }
}


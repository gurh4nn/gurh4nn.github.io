$(function() {
    $(".scrolling").click(function() {
        // remove classes from all
        $(".scrolling").removeClass("active");
        // add class to the one we clicked
        $(this).addClass("active");
    });
});
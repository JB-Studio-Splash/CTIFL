$(document).ready(function() {
    $("#tablet-burger").on("click", function() {
        $(this).toggleClass("open");
        $(this).find(".header_burger-line").toggleClass("open");
        $("#tablet-menu").toggleClass("open");
    });

    $("#phone-burger").on("click", function() {
        $(this).toggleClass("open");
        $(this).find(".header_burger-line").toggleClass("open");
        $("#phone-menu").toggleClass("open");
    });
});

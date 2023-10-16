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

$(document).ready(function() {
    $('.nav-dropdown-trigger').hover(
        function() { 
            const $dropdown = $(this).find('.header_dropdown');
            const hasChildren = $dropdown.find('.header-dropdown_grid').children().length > 0;
            if (hasChildren) {
                $dropdown.removeClass('closed');
            }
        },
        function() {
            $(this).find('.header_dropdown').addClass('closed');
        }
    );
});

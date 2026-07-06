$(document).ready(function () {

    // Tab navigation — data-page on buttons is lowercase, matches article class exactly
    $(".navbar-list .navbar-link").on("click", function () {
        $(".navbar-list .navbar-link").removeClass("active");
        $(this).addClass("active");
        $(".main-content article").removeClass("active");
        $("." + $(this).attr("data-page")).addClass("active");
    });

    // Sidebar "Show Contacts" toggle (mobile only)
    $("[data-sidebar-btn]").on("click", function () {
        $("[data-sidebar]").toggleClass("active");
    });

});

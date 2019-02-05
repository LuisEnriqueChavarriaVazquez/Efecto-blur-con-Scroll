$(document).ready(function() {
    var height = $(window).height();

    function ajustesIniciales() {
        $(".body").css({ "margin-top": height - 80 + "px" });
    }

    ajustesIniciales();
});
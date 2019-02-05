$(document).ready(function() {
    var height = $(window).height();

    function ajustesIniciales() {
        $(".body").css({ "margin-top": height - 80 + "px" });
    }

    ajustesIniciales();

    $(document).scroll(function() {
        var scrollTop = $(this).scrollTop();
        var pixels = scrollTop / 70;

        if (scrollTop < height) {
            $(".contenedorGeneral").css({
                "-webkit-filter": "blur(" + pixels + "px)",
                "background-position": "center -" + pixels * 10 + "px"
            });
        }

    });

});
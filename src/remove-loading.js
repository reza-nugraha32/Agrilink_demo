$(window).on("load", function () {
    setTimeout(removeLoader);
    });

function removeLoader() {
    $(".loading").fadeOut(500, function () {
        $(".loading").remove();
    });
};

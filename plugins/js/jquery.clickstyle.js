(function ($) {
    $.fn.clickStyle = function (options) {
        var settings = $.extend({
            color: "white",
            background: "#29bf35",
            text: "Success!",
            rotate: true,
            transition: "1000",
            bordercolor: "none",
            onclick: true
        }, options);

        return this.each(function () {
            if (settings.onclick == true) {
                $(this).click(function () {
                    $(this).text(settings.text);
                    $(this).css("color", settings.color);
                    $(this).css("background", settings.background);
                    if (settings.bordercolor == "none") {
                        $(this).css("border", "none");
                    } else {
                        $(this).css("border", "1px solid" + settings.border);
                    }
                    $(this).css("transition", settings.transition + "ms" + " " + "ease");
                    if (settings.rotate == true) {
                        $(this).css("transform", "rotateY(360deg)");
                        $(this).css("-webkit-transform", "rotateY(360deg)");
                    }
                });
            } else {
                $(this).text(settings.text);
                $(this).css("color", settings.color);
                $(this).css("background", settings.background);
                if (settings.bordercolor == "none") {
                    $(this).css("border", "none");
                } else {
                    $(this).css("border", "1px solid" + settings.border);
                }
                $(this).css("transition", settings.transition + "ms" + " " + "ease");
                if (settings.rotate == true) {
                    $(this).css("transform", "rotateY(360deg)");
                    $(this).css("-webkit-transform", "rotateY(360deg)");
                }
            }
        });
    }
}(jQuery));
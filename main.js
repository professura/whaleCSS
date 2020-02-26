$("#switch").click(function () {
    if ($("#fullpage").hasClass("night")) {
        $("#fullpage").removeClass("night");
        $("#switch").removeClass("switched");
    }
    else {
        $("#fullpage").addClass("night");
        $("#switch").addClass("switched");

    }
});
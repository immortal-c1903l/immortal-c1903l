/*------------Hiệu ứng nổi chữ--------------*/

$(".txtb input").focus( function () {
    $(this).addClass("rise");
})

$(".txtb input").blur(function () {
    if ($(this).val() == "")
        $(this).removeClass("rise");
})
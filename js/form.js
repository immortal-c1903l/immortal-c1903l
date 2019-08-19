
/*------------Popup text input--------------*/

$(".txtb input").focus( function () {
    $(this).addClass("rise");
})

$(".txtb input").blur(function () {
    if ($(this).val() == "")
        $(this).removeClass("rise");
})

/*------------Form Rotation--------------*/

$("#flipToSignUp").click(function () {
    $(".login-form").css("animation-name", "showSignUp")
    $(".login-form").css("transform","translate(-50%,-50%) rotateY(180deg)") /*để kích hoạt backface-visibility: hidden;*/

    $(".Signup-form").css("animation-name", "hideSignIn")
    $(".Signup-form").css("transform","translate(-50%,-50%) rotateY(0deg)")
})

$("#flipToSignIn").click(function () {
    $(".login-form").css("animation-name", "hideSignUp")
    $(".login-form").css("transform","translate(-50%,-50%) rotateY(0deg)")

    $(".Signup-form").css("animation-name", "showSignIn")
    $(".Signup-form").css("transform","translate(-50%,-50%) rotateY(180deg)")
})
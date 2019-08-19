(function () {

    var preload = document.getElementById("load_main");
    var loading = 0;
    var id = setInterval(frame, 50);

    function frame() {
        if (loading === 60) {
            clearInterval(id);
            window.open("form.html", "_self");

        }   else {
            loading = loading + 1;
            if (loading === 50) {
                preload.style.animation = "fade 1s ease";
            }
        }
    }
})();
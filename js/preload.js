(function () {

    var preload = document.getElementById("load_main");
    var loading = 0;
    var id = setInterval(frame, 64);
    
    function frame() {
        if (loading === 100) {
            clearInterval(id);
            window.open("form.html", "_self");

        }   else {
            loading = loading + 1;
            if (loading === 90) {
                preload.style.animation = "fade 1s ease";
            }
        }
        
    }
})();
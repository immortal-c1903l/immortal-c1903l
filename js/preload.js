(function () {

    var preload = document.getElementById("load_main");
    var loading = 0;
    var id      = setInterval(frame, 50);

    function frame() {
        if (loading === 60) {
            clearInterval(id);
            var userchecked = localStorage.getItem('user');
            if(userchecked == 'thangtm'){
                window.open("cv_thang.html", "_self");
            }else if(userchecked == 'sonvt8'){
                window.open("CV_sonvt8.html", "_self");
            }else{
                window.open("CV_phat.html", "_self");
            }
        }   else {
            loading = loading + 1;
            if (loading === 50) {
                preload.style.animation = "fade 1s ease";
            }
        }
    }
})();
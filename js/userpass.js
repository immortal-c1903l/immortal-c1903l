var objPeople = [
    {
        username: "phat",
        password: "123"
    },
    {
        username: "thang",
        password: "123"
    },
    {
        username: "son",
        password: "123"
    }

]

function getInfo() {
    setTimeout(function(){
        var username = document.getElementById('Username').value
        var password = document.getElementById('Password').value

        for(var i = 0; i < objPeople.length; i++) {

            if(username == objPeople[i].username && password == objPeople[i].password) {
                if(username == 'phat' && password == '123'){
                    window.location.href = "CV_phat.html";
                }
                if (username == 'thang' && password == '123'){
                    window.location.href = "CV_thang.html"
                }
                if (username == 'son' && password == '123'){
                    window.location.href = "CV_sonvt8.html"
                }
            }
        }
        console.log("incorrect username or password")
    }, 1000);
}
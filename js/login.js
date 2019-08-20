/*------------Validate Input Information--------------*/

var users = [
    { username: 'sonvt8', password: '123' },
    { username: 'thangtm', password: '123' },
    { username: 'phat', password: '123' }
];

var button = document.getElementById('mainbtn');

button.onclick = function() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var i = 0;
    do{
        if(username == users[i].username && password == users[i].password) {
            window.location.href = 'spinner.html';
            break;
        }
        ++i;
    }while (i<users.length);
    if (i == users.length){
        alert('Wrong User or Password. Try again ');
    }
}
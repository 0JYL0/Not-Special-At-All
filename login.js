var text = "";
var store = [];
var Login = /** @class */ (function () {
    function Login(UserName, Password) {
        this.UserName = UserName;
        this.Password = Password;
    }
    return Login;
}());
function Register() {
    var user = document.getElementById("user").value;
    var pass = document.getElementById("pass").value;
    var repass = document.getElementById("repass").value;
    var msg = document.getElementById("msg");
    var reg = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,8}$/;
    var val;
    store.forEach(function (a) { return a.UserName == user && a.Password == pass ? val = 0 : val = 1; });
    if (pass != "") {
        if (pass.length < 6 && pass.length > 8) {
            msg.innerHTML = "Enter btw 6 - 8";
            return false;
        }
        else if (!reg.test(pass)) {
            msg.innerHTML = "Regular Expression..!!";
            return false;
        }
        else {
            msg.innerHTML = "R";
            if (pass != repass) {
                msg.innerHTML = "Password doesn't match !";
                return false;
            }
            else {
                var Log = new Login(user, pass);
                if (val == 0) {
                    msg.innerHTML = "Already exist !!";
                    return false;
                }
                else {
                    text += "<tr><td>" + user + "</td><td>" + pass + "</td></tr>";
                    store.push(Log);
                }
            }
        }
    }
    else {
        msg.innerHTML = "Can't be empty";
        return false;
    }
    document.getElementById("body").innerHTML = text;
}
function signin() {
    var user = document.getElementById("usr").value;
    var pass = document.getElementById("pass1").value;
    if (user == "" || pass == "") {
        document.getElementById("msg1").innerHTML = "Empty!!!";
        return false;
    }
    else {
        console.log(store);
        store.forEach(function (b) {
            return (b.UserName == user && b.Password == pass) ?
                document.getElementById("msg1").innerHTML = "सही है!!" :
                document.getElementById("msg1").innerHTML = "गलत है!!";
        });
    }
}

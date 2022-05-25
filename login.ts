var text = "";
var store = [];

class Login {
    UserName: string;
    Password: string;
    constructor(UserName: string, Password: string) {
        this.UserName = UserName;
        this.Password = Password;
    }
}

function Register() {
    var user = (document.getElementById("user") as HTMLInputElement).value;
    var pass = (document.getElementById("pass") as HTMLInputElement).value;
    var repass = (document.getElementById("repass") as HTMLInputElement).value;
    var msg = (document.getElementById("msg") as HTMLElement);

    let reg = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,8}$/;

    let val;

    store.forEach(a => a.UserName == user && a.Password == pass ? val = 0 : val = 1);

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
                const Log = new Login(user, pass);
                if (val == 0) {
                    msg.innerHTML = "Already exist !!";
                    return false;
                } else {
                    text += "<tr><td>" + user + "</td><td>" + pass + "</td></tr>";
                    store.push(Log);
                }
            }
        }
    } else {
        msg.innerHTML = "Can't be empty";
        return false;
    }
    document.getElementById("body").innerHTML = text;
}

function signin() {
    let user = (document.getElementById("usr") as HTMLInputElement).value;
    let pass = (document.getElementById("pass1") as HTMLInputElement).value;

    if (user == "" || pass == "") {
        document.getElementById("msg1").innerHTML = "Empty!!!";
        return false;
    } else {
        console.log(store);
        store.forEach(
            b =>
                (b.UserName == user && b.Password == pass) ?
                    document.getElementById("msg1").innerHTML = "सही है!!" :
                    document.getElementById("msg1").innerHTML = "गलत है!!");
    }
}

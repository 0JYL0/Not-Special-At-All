<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        table,
        th,
        td {
            border: 1px solid black;
        }
        pre{
            font: 15px bold;
        }
    </style>
</head>

<body>
    Jyl@123
    <div>
        <pre>
            <div><label>User Name : </label>        <input type="text" name="" id="user" required></div>
            <div><label>password : </label>         <input type="password" name="" id="pass" required></div>
            <div><label>Re-Enter password : </label><input type="password" name="" id="repass" required></div>
        </pre>

        <div><input type="submit" value="Sign Up" onclick="Register()"></div>
        <p id="msg" style="color: red;"></p>

    </div>

    <br><br>

    <div>
        <table cellpadding="5">
            <th>Name</th>
            <th>Password</th>
            <tbody id="body">

            </tbody>
        </table>
    </div>

    <br><br><br><br>

    <div>
        <div>

            <pre>
            <div><label>User Name : </label><input type="text" id="usr" required></div>
            <div><label>Password : </label> <input type="password" id="pass1" required>
            </div>
        </pre>
            <div>
                <input type="submit" value="submit" onclick="signin()">
            </div>
            <p id="msg1" style="color: red;"></p>

        </div>


    </div>
    <script src="login.js"></script>
</body>

</html>

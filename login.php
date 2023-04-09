<?php
    $conn=mysqli_connect("localhost","root","","amcars");
    mysqli_set_charset($conn,"utf8");
    if(!$conn){die("Connection failed : ".mysqli_connect_error());}
    $username=$_POST["user"];
    $password=$_POST["pass"];
    $sql="SELECT * FROM client WHERE password='$password' AND username='$username' ;";
    $result=mysqli_query($conn,$sql);
    if(mysqli_num_rows($result)==1){
        session_start();
        $_SESSION["username"]=$_POST["user"];
        $_SESSION["password"]=$_POST["pass"];
        header("Location: index-login.php");  
    }
    else{
        $message="error";
        header("Location: http://localhost/amcars-v3/index.php?message=".urlencode($message));
    }


?>
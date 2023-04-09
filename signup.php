<?php
    $conn=mysqli_connect("localhost","root","","amcars");
    mysqli_set_charset($conn,"utf8");
    if(!$conn){die("Connection failed : ".mysqli_connect_error());}
    $username=$_POST['username2'];
    $password=$_POST["pass2"];
    $email=$_POST["email2"];
    $sexe=$_POST["genre2"];
    $country=$_POST["country"];
    $date=$_POST["date12"];
    $sql="SELECT * FROM client WHERE  username='$username' OR email='$email' ;";
    $result=mysqli_query($conn,$sql);
    if(mysqli_num_rows($result)>0){
        header("Location: http://localhost/amcars-v3/index.php?signup=ok");
    }
    else{
        $add="INSERT INTO client(username,password,email,sexe,country,date) VALUES('$username','$password','$email','$sexe','$country','$date');";
        if(mysqli_query($conn,$add)){
            header("Location: http://localhost/amcars-v3/index.php?login=okk");
        }
    }
?>
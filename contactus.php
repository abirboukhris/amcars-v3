<?php
$fname=$_POST["fname"];
$lname=$_POST["lname"];
$email=$_POST["email"];
$mobile=$_POST["mobile"];
$message=$_POST["message"];

if(!empty($fname) &&!empty($lname) &&!empty($mobile) && !empty($message)){
    if(filter_var($email,FILTER_VALIDATE_EMAIL)){ // fonction php taamel verification mta3 email
        $receiver="mahertun5@gmail.com";
        $subject="From: $fname $lname <$email> ";
        $body= "Fisrt name: $fname\nLast name: $lname\nEmail: $email\nMobile Number: $mobile\nMessage : $message\n";
        $sender= "From: $email";
        if(mail($receiver,$subject,$body,$sender)){
            echo "Your message has been sent successfully!";
        }
        else{
            echo "Sorry, failed to send your message!";
        }
    }
    else{
        echo "Enter a valid email adress!";
    }
}
else echo "All fileds are required!";

?>
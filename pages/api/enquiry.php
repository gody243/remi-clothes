<?php
    header('Access-Control-Allow-Origin: *');
    $conn=new mysqli('localhost','root','','remi_clothes');

    if (mysqli_connect_error()){
        echo mysqli_connect_error();
        exit();
    }
    else{
        $username=$_POST['username'];
        $email=$_POST['email'];
        $password=$_POST['password'];

        $sql="INSERT INTO register1 VALUES('$username','$email','$password');";
        $res= mysqli_query($conn,$sql);

        if($res){
            echo "success";
        }
        else{
            echo "Error";
        }
        $conn ->close();

    }
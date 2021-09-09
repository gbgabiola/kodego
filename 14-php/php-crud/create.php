<?php
  require('server.php');

  if (isset($_POST['create'])) {
    $firstname= $_POST['firstname'];
    $lastname= $_POST['lastname'];
    $email= $_POST['email'];
    $password= password_hash($_POST['password'], PASSWORD_DEFAULT);
    $gender= $_POST['gender'];
    $accessRole= $_POST['accessRole'];

    $query="INSERT INTO users (firstname, lastname, email, pass, gender, access_role) VALUES ('$firstname', '$lastname', '$email', '$password', '$gender', '$accessRole')";

    $sqlCreate=mysqli_query($connection, $query) OR trigger_error('Query failed SQL ' . $query);

    echo '<script>alert("Successfully created!");</script>';
    echo '<script>window.location.href = "index.php";</script>';
  } else {
    echo '<script>window.location.href = "index.php";</script>';
  }

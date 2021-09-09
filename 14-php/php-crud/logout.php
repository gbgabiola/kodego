<?php
  session_start();
  $_SESSION['status']= 'invalid';
  unset($_SESSION['email']);
  unset($_SESSION['userId']);
  unset($_SESSION['accessRole']);
  header('location: login.php');
?>

<?php
  require('server.php');

  if (isset($_POST['delete'])) {
    $email = $_POST['email'];
    $query3="DELETE FROM tbl_users WHERE email = '$email'";
    $sql3 = mysqli_query($connection, $query3);

    echo '<script>alert("Successfully deleted!");</script>';
    header('location: index.php');
  } else {
    echo '<script>window.location.href = "index.php";</script>';
  }

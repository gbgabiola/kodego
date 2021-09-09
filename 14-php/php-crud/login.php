<?php
  require('server.php');

  session_start();
  if (isset($_POST['login'])) {
    $email = trim($_POST['email']);
    $password = trim($_POST['password']);

    if (empty($email) || empty($password)) {
      echo 'Please fill up all fields';
    } else {
      $query= "SELECT * FROM users WHERE email = '$email'";
      $sql = mysqli_query($connection, $query);

      // Password verification
      $row = mysqli_fetch_assoc($sql);
      $currentPassword= $row['password'];

      if (password_verify($password, $currentPassword)) {
        // If password is valid
        $_SESSION['userId']= $row['userId'];
        header('location: index.php');
      } else {
        $errMessage = 'Login Failed, Wrong Email or Password';
        echo '<script>alert("Failed to login.");</script>';
      }
      if(mysqli_num_rows($sql) > 0 && password_verify($password, $currentPassword)) {
        $_SESSION['status'] = 'valid';
        $_SESSION['email'] = $row['email'];
        $_SESSION['accessRole'] = $row['access_role'];
      }
    }
  }
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <!-- Bootstrap CSS -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" crossorigin="anonymous" />
  <title>PHP CRUD | Login</title>
</head>
<body>
  <div class="container">
    <form action="login.php" method="POST">
      <div class="mb-3">
        <input type="text" name="email" class="form-control" placeholder="Enter email" />
      </div>
      <div class="mb-3">
        <input type="password" name="password" class="form-control" placeholder="Enter password" />
      </div>
      <div class="mb-3">
        <button type="submit" name="login">Login</button>
      </div>
      <span><p?>Not yet a member? <a href="index.php">Sign Up here</a></p></span>
    </form>
  </div>
  <!-- .container -->

</body>
</html>

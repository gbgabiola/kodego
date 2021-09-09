<?php
  require('server.php');

  if (isset($_POST['edit'])) {
    $email = $_POST['email'];
    $query = "SELECT * FROM users WHERE email = '$email'";
    $sql = mysqli_query($connection, $query);
    $row = mysqli_fetch_assoc($sql);
  }

  if (isset($_POST['update'])) {
    $firstname = $_POST['firstname'];
    $lastname = $_POST['lastname'];
    $email = $_POST['email'];
    $gender = $_POST['gender'];
    $accessRole = $_POST['accessRole'];

    $query2 = "UPDATE users SET firstname = '$firstname', lastname = '$lastname', gender = '$gender', access_role = '$accessRole' WHERE email = '$email'";

    $sql2 = mysqli_query($connection, $query2);
    echo '<script>alert("Successfully updated!");</script>';
    header('location: index.php');
  }
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>PHP CRUD | Update User</title>
</head>
<body>
  <h1>Update User</h1>
  <form action="update.php" method="POST">
    <input type="text" name="email" placeholder="Enter email" value="<?php echo $row['email']; ?>" readonly />
    <input type="text" name="firstname" placeholder="Enter first name" value="<?php echo $row['firstname']; ?>" />
    <input type="text" name="lastname" placeholder="Enter last name" value="<?php echo $row['lastname']; ?>" />

    <select name="gender">
      <option value="">Select Gender</option>
      <option value="male" <?php echo ($row['gender'] === 'male' ? 'selected' : ' '); ?>>Male</option>
      <option value="female" <?php echo ($row['gender'] === 'female' ? 'selected' : ' '); ?>>Female</option>
    </select>

    <select name="accessRole">
      <option value="">Select Role</option>
      <option value="client" <?php echo ($row['access_role'] === 'client'? 'selected':' '); ?>>Client</option>
      <option value="admin" <?php echo ($row['access_role'] === 'Admin' ? 'selected' : ' '); ?>>Admin</option>
    </select>

    <input type="submit" name="update" value="Update"/>
  </form>

</body>
</html>

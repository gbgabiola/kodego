<?php
  require('retrieve.php');
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>PHP CRUD | Create User</title>
</head>
<body>
  <h1>Create a User</h1>
  <form action="create.php" method="POST">
    <input type="text" name="firstName" placeholder="Enter first name" />
    <input type="text" name="lastName" placeholder="Enter last name" />
    <input type="text" name="email" placeholder="Enter email" />
    <input type="password" name="password" placeholder="Enter Password" />

    <select name="gender">
      <option value="">Select Gender</option>
      <option value="male">Male</option>
      <option value="female">Female</option>
    </select>

    <select name="accessRole">
      <option value="">Select Role</option>
      <option value="client">Client</option>
      <option value="admin">Admin</option>
    </select>

    <button name="create">Create</button>
  </form>

  <table>
    <tr>
      <th><a href="?column=firstName&sort=<?php echo $sort; ?>">First Name</a></th>
      <th><a href="?column=lastName&sort=<?php echo $sort; ?>">Last Name</a></th>
      <th><a href="?column=email&sort=<?php echo $sort; ?>">Email</a></th>
      <th><a href="?column=gender&sort=<?php echo $sort; ?>">Gender</a></th>
      <th><a href="?column=accessRole&sort=<?php echo $sort; ?>">Access Role</a></th>
      <th colspan="2">Actions</th>
    </tr>

    <?php while ($row = mysqli_fetch_array($sqlUsers)) { ?>
    <tr>
      <td><?php echo $row['firstName']; ?></td>
      <td><?php echo $row['lastName']; ?></td>
      <td><?php echo $row['email']; ?></td>
      <td><?php echo $row['gender']; ?></td>
      <td><?php echo $row['accessRole']; ?></td>
      <td>
        <form action="update.php" method="POST">
          <input type="submit" name="edit" value="EDIT" />
          <input type="hidden" name="email" value="<?php echo $row['email']; ?>" />
        </form>
      </td>
      <td>
        <form action="delete.php" method="POST">
          <input type="submit" name="delete" value="DELETE" />
          <input type="hidden" name="email" value="<?php echo $row['email']; ?>" />
        </form>
      </td>
    </tr>
    <?php } ?>
  </table>
</body>
</html>

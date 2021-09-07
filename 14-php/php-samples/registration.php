<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>PHP Form</title>
  <!-- Bootstrap CSS -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossorigin="anonymous">
  <style>
    .error {
      color: red;
      border-color: red;
    }
  </style>
</head>
<body class="container">
  <?php
  $firstName = $lastName = $email = $gender = '';
  $firstNameErr = $lastNameErr = $emailErr = $genderErr = '';

  if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if(empty($_POST['firstName'])) {
      $firstNameErr = 'First name is required.';
    } else {
      $firstName = checkInput($_POST['firstName']);
      if (!preg_match('/^[a-zA-Z]*$/', $firstName)) {
        $firstNameErr = 'Only letters are allowed.';
      }
    }

    if(empty($_POST['lastName'])) {
      $lastNameErr = 'Last name is required.';
    } else {
      $lastName = checkInput($_POST['lastName']);
      if (!preg_match('/^[a-zA-Z]*$/', $lastName)) {
        $lastNameErr = 'Only letters are allowed.';
      }
    }

    if(empty($_POST['email'])) {
      $emailErr = 'Email is required.';
    } else {
      $email = checkInput($_POST['email']);
      if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $emailErr = 'Invalid email format.';
      }
    }

    if(empty($_POST['gender'])) {
      $genderErr = 'Gender is required.';
    } else {
      $gender = checkInput($_POST['gender']);
    }


  }

  function checkInput($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
  }
  ?>

  <form action="<?php echo htmlspecialchars($_SERVER['PHP_SELF']); ?>" method="POST">
    <div class="mb-3">
      <label for="firstName" class="form-label">First Name</label>
      <input type="text" class="form-control" name="firstName" id="firstName">
      <span class="error"><?php echo $firstNameErr; ?></span>
    </div>

    <div class="mb-3">
      <label for="lastName" class="form-label">Last Name</label>
      <input type="text" class="form-control" name="lastName" id="lastName">
      <span class="error"><?php echo $lastNameErr; ?></span>
    </div>

    <div class="mb-3">
      <label for="email" class="form-label">Email</label>
      <input type="text" class="form-control" name="email" id="email">
      <span class="error"><?php echo $emailErr; ?></span>
    </div>

    <div class="mb-3">
      <label for="gender">Gender</label>
      <br>
      <label for="male" class="form-label">Male</label>
      <input type="radio" id="male" name="gender" value="male" <?php if(isset($gender) && $gender === 'male') echo 'checked'; ?>>
      <label for="female" class="form-label">Female</label>
      <input type="radio" id="female" name="gender" value="female" <?php if(isset($gender) && $gender === 'female') echo 'checked'; ?>>
      <span class="error"><?php echo $genderErr; ?></span>
    </div>

    <input type="submit" id="submit" name="submit" value="Submit" class="btn btn-primary">
  </form>

  <?php
  echo '<h2>Your input data</h2>';
  echo '<p>First Name: ' . $firstName . '</p>';
  echo '<p>Last Name: ' . $lastName . '</p>';
  echo '<p>Email: ' . $email . '</p>';
  echo '<p>Gender: ' . $gender . '</p>';
  ?>
</body>
</html>

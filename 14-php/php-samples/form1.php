<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Form 1</title>
</head>
<body>
  <form action="form2.php" method="POST">
    <div>
      <label for="firstName">
        <input type="text" id="firstName" name="firstName" placeholder="First Name">
      </label>
    </div>

    <div>
      <label for="lastName">
        <input type="text" id="lastName" name="lastName" placeholder="Last Name">
      </label>
    </div>

    <div>
      <label for="email">
        <input type="text" id="email" name="email" placeholder="Email">
      </label>

    </div>
    <button>Submit</button>
  </form>
</body>
</html>

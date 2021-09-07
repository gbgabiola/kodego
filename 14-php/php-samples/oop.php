<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>PHP Classes and Object</title>
</head>
<body>
  <?php
  class Fruit {
    // Properties
    public $name;
    public $color;

    // Methods
    function set_name($name) {
      $this->name = $name;
    }
    function set_color($color) {
      $this->color = $color;
    }
    function get_name() {
      return $this->name;
    }
    function get_color() {
      return $this->color;
    }
  }

  $apple = new Fruit();
  $banana = new Fruit();

  $apple->set_name('Apple');
  $banana->set_name('Banana');
  $apple->set_color('Red');
  $banana->set_color('Yellow');

  echo $apple->get_name() . ' is ' . $apple->get_color();
  echo '<br />';
  echo $banana->get_name() . ' is ' . $banana->get_color();
  ?>

</body>
</html>

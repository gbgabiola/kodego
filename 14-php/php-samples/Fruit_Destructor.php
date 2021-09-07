<?php
class Fruit {
  public $name;
  public $color;

  function __construct($name) {
    $this->name = $name;
  }
  function __destruct() {
    echo "The fruit {$this->name}";
  }
}

$apple = new Fruit('Apple');

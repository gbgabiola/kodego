<?php
class Rectangle {
  // Properties
  public $length = 0;
  public $width = 0;

  // Methods
  public function getPerimeter() {
    return (2 * ($this->length + $this->width));
  }
  public function getArea() {
    return ($this->length * $this->width);
  }
}

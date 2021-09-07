<?php
// Include class definition
require 'Rectangle.php';

// Create new object from Rectangle class
$obj1 = new Rectangle();
// echo 'Length: ' . $obj1->length;
// echo '<br />';
// echo 'Width: ' . $obj1->width;

echo '<br />';
// Set object properties values
$obj1->length = 30;
$obj1->width = 20;
echo 'Object1 length: ' . $obj1->length;
echo '<br />';
echo 'Object1  Width: ' . $obj1->width;
echo '<br />';

// Call object methods
echo 'Object1 perimeter ' . $obj1->getPerimeter();
echo '<br />';
echo 'Object1 area ' . $obj1->getArea();
echo '<br />';
echo '<br />';

$obj2 = new Rectangle();
$obj2->length = 50;
$obj2->width = 60;
echo 'Object2 length: ' . $obj2->length;
echo '<br />';
echo 'Object2 width: ' . $obj2->width;
echo '<br />';
echo 'Object2 perimeeter: ' . $obj2->getPerimeter();
echo '<br />';
echo 'Object2 area: ' . $obj2->getArea();

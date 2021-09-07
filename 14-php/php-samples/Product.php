<?php
class Product {
  public $name = '';
  public $price = 0;
  public $quantity = 0;

  public function getNameAndPrice() {
    return $this->name . ' ' . $this->price;
  }

  public function getTotal() {
    return $this->price * $this->quantity;
  }
}

$product1 = new Product();
$product1->name = 'Safeguard';
$product1->price = 25;
$product1->quantity = 2;
echo $product1->getNameAndPrice();
echo '<br />';
echo 'Total: ' . $product1->getTotal();
echo '<br />';

$product2 = new Product();
$product2->name = 'Creamsilk';
$product2->price = 10;
$product2->quantity = 2;
echo $product2->getNameAndPrice();
echo '<br />';
echo 'Total: ' . $product2->getTotal();

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>PHP Samples</title>
</head>
<body>
  <?php
    // VARIABLES
    $name = 'Genesis';
    $message = 'Hello World';
    $num = 7.2;
    $num1 = 5;
    $num2 = 2;

    $sum = $num1 + $num2;
    $difference = $num1 - $num2;
    $product = $num1 * $num2;
    $quotient = $num1 / $num2;

    echo $name . ' says ' . $message . '<br />' . $sum . '<br />' . $difference . '<br />' . $product . '<br />' . $quotient;

    function test() {
      $x = 5;
      echo $x;
    }
    test();
    echo '<br />';

    echo 'Lenght of the variable name: ' . strlen($name);
    echo '<br />';

    echo 'Number of words in variable name: ' . str_word_count($name);
    echo '<br />';

    echo 'Variable name in reverse is: ' . strrev($name);
    echo '<br />';

    var_dump(is_int($num));
    echo '<br />';

    var_dump(is_float($num));
    echo '<br />';

    echo ('Minimum number is: ' . min(2, 5, 133, 87, 65, 28, 42));
    echo '<br />';

    echo 'Maximum number is: ' . (max(2, 5, 133, 87, 65, 28, 42));
    echo '<br />';

    echo 'Random number: ' . rand();
    echo '<br />';

    // IF STATEMENTS
    $time = date('H');
    if ($time < '10') {
      echo 'Good morning!';
    } elseif ($time < '20') {
      echo 'Good day!';
    } else {
      echo 'Good night!';
    }

    echo '<br />';

    echo $time;
    echo '<br />';

    // SWITCH
    $fruit = 'melon';
    switch ($fruit) {
      case 'Apple':
        echo 'Your favorite fruit is apple.';
        break;
      case 'banana':
        echo 'Your favorite fruit is banana.';
        break;
      case 'guava':
        echo 'Your favorite fruit is guava.';
        break;
      case 'melon':
        echo 'Your favorite fruit is melon.';
        break;
      default:
        echo 'Invalid fruit.';
        break;
    }
    echo '<br />';

    // WHILE Loop
    $i = 1;
    while ($i <= 5) {
      echo 'The number is ' . $i . '<br />';
      $i++;
    }
    echo '<br />';

    // DO WHILE Loop
    $j = 1;
    do {
      echo 'The number is ' . $j . '<br />';
      $j++;
    } while($j <= 10);
    echo '<br />';

    // FOR Loop
    for ($i = 0; $i <= 50; $i += 10) {
      echo 'The number is ' . $i . '<br />';
    }
    echo '<br />';

    // FOREACH
    $fruits = array('apple', 'banana', 'guava', 'melon');
    foreach ($fruits as $fruit) {
      echo $fruit . '<br />';
    }
    echo '<br />';

    $people = array('Genesis' => '28', 'David' => '29', 'Jemuel' => '30',);
    foreach ($people as $person => $age) {
      echo "$person = $age <br />";
    }
    echo '<br />';

    function add($num1, $num2) {
      return "The sum of $num1 and $num2 is: " . ($num1 + $num2);
    }

    function multiply($num1, $num2) {
      return "The product of $num1 and $num2 is: " . $num1 * $num2;
    }

    echo add(5, 2);
    echo '<br />';

    echo multiply(5, 2);
  ?>
</body>
</html>

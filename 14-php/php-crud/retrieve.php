<?php
  require('server.php');

  $sort = 'ASC';
  $column1 = 'firstName';

  if (isset($_GET['column']) && isset($_GET['sort'])) {
    $column = $_GET['column'];
    $sort = $_GET['sort'];

    // Descending order (Opposite)
    $sort === 'ASC' ? $sort = 'DESC' : $sort = 'ASC';
  }

  // $query = 'SELECT * FROM users';
  $querySort = "SELECT * FROM users ORDER BY $column1 $sort";
  $sqlUsers = mysqli_query($connection, $querySort);

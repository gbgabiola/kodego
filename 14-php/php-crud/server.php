<?php
  $dbconfig = parse_ini_file('.env');

  $host = $dbconfig['DB_HOST'];
  $user = $dbconfig['DB_USER'];
  $password = $dbconfig['DB_PASS'];
  $database = $dbconfig['DB_NAME'];
  $port = $dbconfig['DB_PORT'];

  $connection = mysqli_connect($host, $user, $password, $database, $port);

  if (mysqli_connect_error()) {
    echo 'Unable to connect to MySQL. ' . mysqli_connect_error();
  }
  // else {
  //   echo 'Connected successfully to the MySQL.';
  // }

<?php

$host = "127.0.0.1";
$username = "root";
$password = "";
$dbname = "dbmenus";
$conn = new mysqli($host, $username, $password, $dbname);

echo "<h1>Idées d'entrées </h1>";

$result = $conn->query("SELECT dishes.name FROM dishes WHERE type ='starter'");

while ($row = $result->fetch_assoc()) {
    echo "<p>".$row['name']."</p>";
}

echo "<h1>Idées de plats chauds</h1>"; 

$result =$conn->query("SELECT dishes.name FROM dishes WHERE type ='maindish'");

while ($row = $result->fetch_assoc()) {
    echo "<p>".$row['name']."</p>";
}

?>

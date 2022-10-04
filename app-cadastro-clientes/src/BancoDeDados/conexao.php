<?php

$host = "localhost";
$user = "root";
$password = "";
$dbname = "cadastro-clientes";
$port = "3306";

//Conexão com a porta
$conexao = new PDO("mysql:host=$host; port=$port; dbname=" . $dbname, $user, $password);

//Conexão sem a porta
//$conexao = new PDO("MariaDB:host=$host; dbname=" . $dbname, $user, $password);
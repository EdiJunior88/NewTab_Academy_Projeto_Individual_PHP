<?php

/* Teste para saber se o servidor está conectado */

$hostname = "localhost";
$bancodedados = "appCadastroClientes";
$usuario = "edijunior";
$senha = "123";
$porta = "8800";

//Conexão com porta
$conexao = new PDO("mysql:host=$hostname; port=$porta; dbname=" . $bancodedados, $usuario, $senha);

//Conexão sem porta
// $conexao = new PDO("mysql:host=$hostname; dbname=" . $bancodedados, $usuario, $senha);
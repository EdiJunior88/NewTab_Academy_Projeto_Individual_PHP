<?php

/* Teste para saber se o servidor está conectado */

$hostname = "localhost";
$bancodedados = "appCadastroClientes";
$usuario = "edijunior";
$senha = "123";

$mysqli = new mysqli($hostname, $usuario, $senha, $bancodedados);

if ($mysqli->connect_errno) {
  echo "Falha ao conectar: (" . $mysqli->connect_errno . ") " . $mysqli->connect_error;
}
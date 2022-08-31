<?php

include("testeDB.php");

  $conexao = new PDO('mysql:host=localhost;dbname=appCadastroClientes', "edijunior", "123");
  $result = $conexao->query("SELECT * FROM Pedido")->fetchAll();

  foreach ($result as $item) {
    echo $item['NomeCliente'] . " - " . $item['CPF'] . " - " . $item['Email'] . "<br>";
  }

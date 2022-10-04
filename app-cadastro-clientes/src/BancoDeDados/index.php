<?php

//Cabeçalhos obrigatórios
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

//Incluir a conexão
include_once 'conexao.php';

$query_produtos = "SELECT id, cliente, produto FROM cadastro ORDER BY id ASC";
$resultado_produtos = $conexao->prepare($query_produtos);
$resultado_produtos->execute();

if (($resultado_produtos) and ($resultado_produtos->rowCount() != 0)) {
  while ($linha_produto = $resultado_produtos->fetch(PDO::FETCH_ASSOC)) {
    extract($linha_produto);

    $lista_produtos["records"][$id] = [
      "id" => $id,
      "cliente" => $cliente,
      "produto" => $produto,
    ];
  }

  //Resposta com status 200
  http_response_code(200);

  //Retornar os produtos em formato JSON
  echo json_encode($lista_produtos);
}
<?php

//Cabeçalhos obrigatórios
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: *");
//header("Access-Control-Allow-Methods: GET, PUT, POST, DELETE");

//Incluir a conexão
include_once 'conexao.php';

//Receber os dados do aplicativo front-end
$resposta_json = file_get_contents("php://input");
$dados_json = json_decode($resposta_json, true);

if ($dados_json) {
  $query_produto = "INSERT INTO cadastro (cliente, produto) VALUES (:cliente, :produto)";
  $cadastrar_produto = $conexao->prepare($query_produto);

  $cadastrar_produto->bindParam(':cliente', $dados_json['produto']['cliente'], PDO::PARAM_STR);
  $cadastrar_produto->bindParam(':produto', $dados_json['produto']['produto'], PDO::PARAM_STR);

  $cadastrar_produto->execute();

  if ($cadastrar_produto->rowCount()) {
    $resposta = [
      "erro" => false,
      "mensagem" => "Produto cadastrado com sucesso!"
    ];
  } else {
    $resposta = [
      "erro" => true,
      "mensagem" => "Produto não cadastrado com sucesso!"
    ];
  }

} else {
  $resposta = [
    "erro" => true,
    "mensagem" => "Produto não cadastrado com sucesso!"
  ];
}

http_response_code(200);
echo json_encode($resposta);
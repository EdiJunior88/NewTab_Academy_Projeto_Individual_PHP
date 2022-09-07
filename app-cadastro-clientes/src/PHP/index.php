<?php

//Cabeçalhos obrigatórios
header("Access-Control-Allow-Origin: *");
header('Content-Type: application/json; charset="UTF-8"');

//Incluir conexão
include_once "conexaoDB.php";

$query_produtos = "SELECT * FROM Pedido ORDER BY NumeroPedido ASC";
$resultado = $conexao->prepare($query_produtos);
$resultado->execute();

//Se a conexão for bem sucedida entra na repetição While para listar a tabela App Cadastro Clientes
if (($resultado) and ($resultado->rowCount() != 0)) {
  while ($row_produto = $resultado->fetch(PDO::FETCH_ASSOC)) {
    extract($row_produto);

    $lista_produtos["registro"][$NumeroPedido] = [
      'id' => $NumeroPedido,
      'nome' => $NomeCliente,
      'nomeProduto' => $NomeProduto,
      'valorUnitario' => $ValorUnitario,
      'quantidade' => $Quantidade,
    ];
  }

  //Resposta com status 200
  http_response_code(200); 

  //Retornar os produtos em formato JSON
  echo json_encode($lista_produtos);
}

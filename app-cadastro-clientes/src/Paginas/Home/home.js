import React, { useEffect, useState } from "react";
import {
  Table,
  Titulo,
  Container,
  ContainerTitulo,
  BotaoMudarPagina,
} from "./styles";
import { Link } from "react-router-dom";

export const Home = () => {
  const [data, setData] = useState([]);

  const getProdutos = async () => {
    fetch(
      "http://localhost/NewTab_Academy_Projeto_Individual_PHP/app-cadastro-clientes/src/BancoDeDados/index.php"
    )
      .then((response) => response.json())
      .then((responseSON) =>
        //console.log(responseSON),
        setData(responseSON.records)
      );
  };

  useEffect(() => {
    getProdutos();
  }, []);

  return (
    <Container>
      <ContainerTitulo>
        <Titulo>Lista de Produtos</Titulo>
        <Link to={"/cadastro"} style={{ textDecoration: "none" }}>
          <BotaoMudarPagina>Cadastrar Produtos</BotaoMudarPagina>
        </Link>
      </ContainerTitulo>

      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Cliente</th>
            <th>Produto</th>
            <th>Ações</th>
          </tr>
        </thead>

        <tbody>
          {Object.values(data).map((produto) => (
            <tr key={produto.id}>
              <td>{produto.id}</td>
              <td>{produto.cliente}</td>
              <td>{produto.produto}</td>
              <td>Visualizar Editar Apagar</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

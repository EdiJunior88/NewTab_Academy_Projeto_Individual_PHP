import React, { useState } from "react";
import {
  Titulo,
  AlertaSucesso,
  AlertaErro,
  Container,
  ContainerTitulo,
  BotaoMudarPagina,
  ContainerFormulario,
  Formulario,
  SubContainerFormularios,
  Label,
  Input,
  Botao,
} from "./styles";
import { Link } from "react-router-dom";

export const Cadastro = () => {
  const [produto, setProduto] = useState({
    cliente: "",
    produto: "",
  });

  const [status, setStatus] = useState({
    tipo: "",
    mensagem: "",
  });

  const valorInput = (evento) =>
    setProduto({ ...produto, [evento.target.name]: evento.target.value });

  const cadastrarProduto = async (evento) => {
    evento.preventDefault();
    console.log(produto.cliente);

    await fetch(
      "http://localhost/NewTab_Academy_Projeto_Individual_PHP/app-cadastro-clientes/src/BancoDeDados/cadastrar.php",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ produto }),
      }
    )
      .then((resposta) => resposta.json())
      .then((respostaJSON) => {
        //console.log(respostaJSON))
        if (respostaJSON.erro) {
          setStatus({
            tipo: "erro",
            mensagem: respostaJSON.mensagem,
          });
        } else {
          setStatus({
            tipo: "sucesso",
            mensagem: respostaJSON.mensagem,
          });
        }
      })
      .catch(() => {
        setStatus({
          tipo: "erro",
          mensagem: "Produto não cadastrado com sucesso!",
        });
      });
  };

  return (
    <Container>
      <ContainerTitulo>
        <Titulo>Cadastro de Produtos</Titulo>
        <Link to={"/"} style={{ textDecoration: "none" }}>
          <BotaoMudarPagina>Home</BotaoMudarPagina>
        </Link>
      </ContainerTitulo>

      {status.tipo === "erro" ? <AlertaErro>{status.mensagem}</AlertaErro> : ""}
      {status.tipo === "sucesso" ? (
        <AlertaSucesso>{status.mensagem}</AlertaSucesso>
      ) : (
        ""
      )}

      <ContainerFormulario onSubmit={cadastrarProduto}>
        <Formulario>
          <SubContainerFormularios>
            <Label>Cliente</Label>
            <Input
              type='text'
              name='cliente'
              placeholder='Digite o seu nome'
              onChange={valorInput}
            />
          </SubContainerFormularios>

          <SubContainerFormularios>
            <Label>Produto</Label>
            <Input
              type='text'
              name='produto'
              placeholder='Digite o produto'
              onChange={valorInput}
            />
          </SubContainerFormularios>

          <Botao type='submit'>Cadastrar</Botao>
        </Formulario>
      </ContainerFormulario>
    </Container>
  );
};

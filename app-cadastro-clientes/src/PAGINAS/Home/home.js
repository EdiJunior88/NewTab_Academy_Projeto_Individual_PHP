import React, { useEffect, useState } from "react";
import styles from "./Home.module.css";

export const Home = () => {
  const [data, setData] = useState([]);

  const getProdutos = async () => {
    fetch("http://localhost:8800/index.php")
      .then((response) => response.json())
      .then((responseJson) => setData(responseJson.registro));
  };

  useEffect(() => {
    getProdutos();
  }, []);

  return (
    <div>
      <h1 className={styles.titulo}>Listar</h1>
      <table className={styles.tabela}>
        <thead>
          <tr className={styles.tabelaTitulo}>
            <th>Número do Pedido</th>
            <th>Cliente</th>
            <th>Nome do Produto</th>
            <th>Valor (R$)</th>
            <th>Quantidade</th>
          </tr>
        </thead>

        <tbody>
          {Object.values(data).map((produto) => (
            <tr key={produto.id} className={styles.tabelaSubtitulo}>
              <td>{produto.id}</td>
              <td>{produto.nome}</td>
              <td>{produto.nomeProduto}</td>
              <td>{produto.valorUnitario}</td>
              <td>{produto.quantidade}</td>
              <td>Visualizar Editar Apagar</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

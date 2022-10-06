import styled from "styled-components";

export const Container = styled.section`
  max-width: 960px;
  padding: 10px 30px 30px;
  margin: 20px auto;
  box-shadow: 0 0 1em #6c757d;
  border-radius: 8px;
`;

export const ContainerTitulo = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const BotaoMudarPagina = styled.section`
  margin: 30px 0;
  cursor: pointer;
  border-radius: 4px;
  background: #fff;
  border: 1px solid #0dcaf0;
  color: #0dcaf0;
  padding: 6px 9px;
  font-size: 1.125em;
  :hover {
    background: #31d2f2;
    color: #fff;
  }
`;

export const Titulo = styled.h1`
  color: #3e3e3e;
  font-size: 23px
`;

export const Table = styled.table`
  width: 100%;
  th {
    background: #ffd219;
    color: #3e3e3e;
    padding: 10px;
  }

  td {
    background: #f6f6f6;
    color: #3e3e3e;
    padding: 8px;
  }
`;

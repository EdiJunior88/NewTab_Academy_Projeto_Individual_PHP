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

export const ContainerFormulario = styled.form`
  width: 100%;
`;

export const Formulario = styled.div`
  margin: 0 auto;
`;

export const SubContainerFormularios = styled.div`
  margin: 20px 0;
`;

export const Label = styled.label`
  width: 100%;
  padding: 12px;
  margin-top: 6px;
  margin-bottom: 16px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
`;

export const Botao = styled.button`
  cursor: pointer;
  border-radius: 4px;
  background: #fff;
  border: 1px solid #198754;
  color: #198754;
  padding: 8px 12px;
  font-size: 1.125em;
  :hover {
    background: #157347;
    color: #fff;
  }
`;

export const Titulo = styled.h1`
  color: #3e3e3e;
  font-size: 23px;
`;

export const AlertaSucesso = styled.p`
  background: #d1e7dd;
  color: #0f5132;
  margin: 20px 0;
  border: 1px solid #badbcc;
  border-radius: 4px;
  padding: 7px;
`;

export const AlertaErro = styled.p`
  background: #f8d7da;
  color: #842029;
  margin: 20px 0;
  border: 1px solid #f5c2c7;
  border-radius: 4px;
  padding: 7px;
`;

import styled from "styled-components";

export const Container = styled.section`
  max-width: 960px;
  margin: 20px auto;
  box-shadow: 0 0 1em #6c757d;
`;

export const ContainerFormulario = styled.form`
  width: 100%;
`;

export const Formulario = styled.form`
  width: 100%;
`;

export const SubContainerFormularios = styled.div`
  margin: 20px 0;
`;

export const Botao = styled.button`
  border-radius: 4px;
  border: 1px solid #000;
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

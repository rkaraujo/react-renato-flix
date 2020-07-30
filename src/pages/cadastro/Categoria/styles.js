import styled from 'styled-components';

export const CadastroWrapper = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
`;

export const CadastroForm = styled.form`
    width: 100%;
`;

export const ButtonSalvar = styled.button`
  color: var(--white);
  background-color: var(--primary);
  border: 1px solid var(--white);
  box-sizing: border-box;
  cursor: pointer;
  padding: 16px 24px;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  outline: none;
  border-radius: 5px;
  text-decoration: none;
  display: inline-block;
`;

export const CategoriaListaTable = styled.table`
    border: 2px solid var(--primary);
    border-collapse: collapse;
    border-spacing: 0;
    margin-bottom: 25px;
    margin-top: 40px;
    width: 100%;

    & th {
        border: 2px solid var(--primary);
        font-size: 20px;
    }

    & tbody td {
        border: 2px solid var(--black);
        color: var(--grayMedium);
        padding-left: 15px;
    }

    & tbody tr:first-child td {
        border-top: 0;
    }
    & tbody tr td:first-child {
        border-left: 0;
    }
    & tbody tr:last-child td {
        border-bottom: 0;
    }
    & tbody tr td:last-child {
        border-right: 0;
    }
`;

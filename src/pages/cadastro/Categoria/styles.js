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
    border-spacing: 0;
    margin-bottom: 25px;
    margin-top: 40px;
    width: 100%;

    & th {
        border-bottom: 2px solid var(--primary);
        border-left: 2px solid var(--primary);
        padding-bottom: 5px;
        padding-top: 5px;
        font-size: 20px;
    }
    & thead tr th:first-child {
        border-left: 0;
    }

    & tbody td {
        border: 2px solid var(--black);
        color: var(--grayMedium);
        padding-bottom: 5px;
        padding-left: 15px;
        padding-top: 5px;
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

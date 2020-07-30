import React, { useState, useEffect } from 'react';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import {
  CadastroWrapper, CadastroForm, ButtonSalvar, CategoriaListaTable,
} from './styles';

const listaCategoriaRows = (categorias) => categorias.map((categoria, indice) => (
  <tr key={`${categoria.nome}-${indice}`}>
    <td>{categoria.nome}</td>
    <td>{categoria.descricao}</td>
    <td><a href="#">Editar</a></td>
    <td><a href="#">Remover</a></td>
  </tr>
));

const CategoriaLista = ({ categorias }) => (
  <CategoriaListaTable>
    <thead>
      <tr>
        <th>Nome</th>
        <th>Descrição</th>
        <th>Editar</th>
        <th>Remover</th>
      </tr>
    </thead>
    <tbody>
      {listaCategoriaRows(categorias)}
    </tbody>
  </CategoriaListaTable>
);

function CadastroCategoria() {
  const [categorias, setCategorias] = useState([]);

  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '#00F',
  };
  const [values, setValues] = useState(valoresIniciais);

  const handleChange = (e) => {
    const chave = e.target.getAttribute('name');
    const valor = e.target.value;
    setValues({
      ...values,
      [chave]: valor,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setCategorias([
      ...categorias,
      values,
    ]);
    setValues(valoresIniciais);
  };

  useEffect(() => {
    const URL = 'https://rka-json-server.herokuapp.com/categorias';
    fetch(URL)
      .then(async (respostaDoServer) => {
        if (respostaDoServer.ok) {
          const resposta = await respostaDoServer.json();
          setCategorias(resposta);
          return;
        }
        throw new Error('Não foi possível pegar os dados');
      });
  }, []);

  let categoriaLista;
  if (categorias && categorias.length > 0) {
    categoriaLista = <CategoriaLista categorias={categorias} />;
  }

  return (
    <PageDefault>
      <CadastroWrapper>
        <h1>Cadastro de Categoria</h1>

        <CadastroForm onSubmit={handleOnSubmit}>

          <FormField
            label="Nome da Categoria"
            type="text"
            name="nome"
            value={values.nome}
            onChange={handleChange}
          />

          <FormField
            label="Descrição"
            type="textarea"
            name="descricao"
            value={values.descricao}
            onChange={handleChange}
          />

          <FormField
            label="Cor"
            type="color"
            name="cor"
            value={values.cor}
            onChange={handleChange}
          />

          <ButtonSalvar>
            Salvar
          </ButtonSalvar>
        </CadastroForm>

        {categoriaLista}
      </CadastroWrapper>
    </PageDefault>
  );
}

export default CadastroCategoria;

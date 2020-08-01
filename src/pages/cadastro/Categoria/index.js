import React, { useState, useEffect } from 'react';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import ButtonPrimary from '../../../components/ButtonPrimary/styles';
import categoriaRepository from '../../../repositories/categoriasRepository';
import {
  CadastroWrapper, CadastroForm, CategoriaListaTable,
} from './styles';
import useForm from '../../../hooks/useForm';

const listaCategoriaRows = (categorias) => categorias.map((categoria, indice) => (
  <tr key={`${categoria.nome}-${indice}`}>
    <td>{categoria.titulo}</td>
    <td>{categoria.descricao}</td>
    <td><div style={{ width: '100%', height: '18px', background: categoria.cor }} /></td>
  </tr>
));

const CategoriaLista = ({ categorias }) => (
  <CategoriaListaTable>
    <thead>
      <tr>
        <th>Nome</th>
        <th>Descrição</th>
        <th>Cor</th>
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
    titulo: '',
    descricao: '',
    cor: '#00F',
  };
  const { values, handleChange, clearForm } = useForm(valoresIniciais);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setCategorias([
      ...categorias,
      values,
    ]);
    clearForm();
  };

  useEffect(() => {
    categoriaRepository.getAll()
      .then((resposta) => setCategorias(resposta))
      .catch((error) => console.error(error.message));
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
            label="Título"
            type="text"
            name="titulo"
            value={values.titulo}
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

          <ButtonPrimary>
            Salvar
          </ButtonPrimary>
        </CadastroForm>

        {categoriaLista}
      </CadastroWrapper>
    </PageDefault>
  );
}

export default CadastroCategoria;

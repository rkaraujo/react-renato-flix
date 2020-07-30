import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import { CadastroWrapper, CadastroForm, ButtonSalvar, CategoriaListaTable } from './styles';

const listaCategoriaRows = (categorias) => {
    return categorias.map((categoria, indice) => (
        <tr key={`${categoria.nome}-${indice}`}>
            <td>{categoria.nome}</td>
            <td>{categoria.descricao}</td>
            <td><a href="#">Editar</a></td>
            <td><a href="#">Remover</a></td>
        </tr>
    ));
}

const CategoriaLista = ({ categorias }) => {
    return (
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
}

function CadastroCategoria() {
    const [categorias, setCategorias] = useState([]);

    const valoresIniciais = {
        nome: '',
        descricao: '',
        cor: '#00F'
    };
    const [values, setValues] = useState(valoresIniciais);

    const handleOnChange = (e) => {
        const chave = e.target.getAttribute('name');
        const valor = e.target.value;
        setValues({
            ...values,
            [chave]: valor
        });
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
        setCategorias([
            ...categorias,
            values
        ]);
        setValues(valoresIniciais);
    }

    let categoriaLista;
    if (categorias && categorias.length > 0) {
        categoriaLista = <CategoriaLista categorias={categorias} />
    }

    return (
        <PageDefault>
            <CadastroWrapper>
                <h1>Cadastro de Categoria</h1>

                <CadastroForm onSubmit={handleOnSubmit}>

                    <FormField
                        placeholder="Nome da Categoria"
                        type="text"
                        name="nome"
                        value={values.nome}
                        onChange={handleOnChange}
                    />

                    <FormField
                        placeholder="Descrição"
                        type="textarea"
                        name="descricao"
                        value={values.descricao}
                        onChange={handleOnChange}
                    />

                    <FormField
                        placeholder="Cor"
                        type="color"
                        name="cor"
                        value={values.cor}
                        onChange={handleOnChange}
                    />

                    <ButtonSalvar>
                        Salvar
                    </ButtonSalvar>
                </CadastroForm>

                {categoriaLista}
            </CadastroWrapper>
        </PageDefault>
    )
}

export default CadastroCategoria;

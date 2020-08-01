import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import useForm from '../../../hooks/useForm';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import ButtonPrimary from '../../../components/ButtonPrimary/styles';
import categoriasRepository from '../../../repositories/categoriasRepository';
import videosRepository from '../../../repositories/videosRepository';

function CadastroVideo() {
  const history = useHistory();
  const [categorias, setCategorias] = useState([]);
  const categoryTitles = categorias.map(({ titulo }) => titulo);

  const { handleChange, values } = useForm({
    titulo: '',
    url: '',
    categoria: 'Software',
  });

  useEffect(() => {
    categoriasRepository
      .getAll()
      .then((categoriasFromServer) => {
        setCategorias(categoriasFromServer);
      });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    const categoriaEscolhida = categorias.find((categoria) => categoria.titulo === values.categoria);

    videosRepository.create({
      titulo: values.titulo,
      url: values.url,
      categoriaId: categoriaEscolhida.id,
    })
      .then(() => {
        console.log('Cadastrou com sucesso!');
        history.push('/');
      });
  };

  return (
    <PageDefault>
      <h1>Cadastro de Video</h1>

      <form onSubmit={handleSubmit}>
        <FormField
          label="Título do Vídeo"
          name="titulo"
          value={values.titulo}
          onChange={handleChange}
        />

        <FormField
          label="URL"
          name="url"
          value={values.url}
          onChange={handleChange}
        />

        <FormField
          label="Categoria"
          name="categoria"
          value={values.categoria}
          onChange={handleChange}
          suggestions={categoryTitles}
        />

        <ButtonPrimary type="submit">
          Cadastrar
        </ButtonPrimary>
      </form>

      <div style={{ padding: '20px 0' }}>
        <Link to="/cadastro/categoria">
          Cadastrar Categoria
        </Link>
      </div>
    </PageDefault>
  );
}

export default CadastroVideo;

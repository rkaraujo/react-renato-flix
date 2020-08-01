import config from '../config';

const URL_CATEGORIAS = `${config.URL_BACKEND}/categorias`;

const getAll = () => fetch(URL_CATEGORIAS)
  .then(async (respostaDoServer) => {
    if (respostaDoServer.ok) {
      const resposta = await respostaDoServer.json();
      return resposta;
    }
    throw new Error('Não foi possível pegar os dados');
  });

const getAllWithVideos = () => fetch(`${URL_CATEGORIAS}?_embed=videos`)
  .then(async (respostaDoServer) => {
    if (respostaDoServer.ok) {
      const resposta = await respostaDoServer.json();
      return resposta;
    }
    throw new Error('Não foi possível pegar os dados');
  });

export default {
  getAll,
  getAllWithVideos,
};

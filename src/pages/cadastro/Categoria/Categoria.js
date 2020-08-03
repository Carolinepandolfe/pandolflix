import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault/PageDefault';
import FormField from '../../../components/FormField/FormField';
import Button from '../../../components/Button/Button';

function CadastroCategoria() {
  const valoresIniciais = {
    titulo: '',
    descricao: '',
    cor: '',
  };

  const [categorias, setCategorias] = useState([]);
  const [valuesForm, setValuesForm] = useState(valoresIniciais);

  function setValue(chave, valor) {
    setValuesForm({
      ...valuesForm,
      [chave]: valor,
    });
  }

  function handleChange(inputValue) {
    // const { getAttribute, value } = inputValue.target;
    setValue(
      inputValue.target.getAttribute('name'),
      inputValue.target.value,
    );
  }

  useEffect(() => {
    const URL = window.location.hostname.includes('localhost')
      ? 'http://localhost:8080/categorias'
      : 'https://pandolflix.herokuapp.com/categorias';
    fetch(URL)
      .then(async (res) => {
        const response = await res.json();
        setCategorias([
          ...response,
        ]);
      });

    // setTimeout(() => {
    //   setCategorias([
    //     ...categorias,
    //     {
    //       id: 1,
    //       nome: 'Front End',
    //       cor: '#6BD1FF',
    //       link_extra: {
    //         text: 'Formação de Front End na Alura',
    //         url: 'https://www.alura.com.br/cursos-online-front-end',
    //       },
    //     },

    //     {
    //       id: 2,
    //       nome: 'Back',
    //       cor: '#6BD1FF',
    //       link_extra: {
    //         text: 'Formação de Front End na Alura',
    //         url: 'https://www.alura.com.br/cursos-online-front-end',
    //       },
    //     },

    //   ]);
    // }, 4000);
  }, []);

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {valuesForm.titulo}
      </h1>

      <form onSubmit={function handleSubmit(inputValue) {
        inputValue.preventDefault();
        setCategorias([
          ...categorias,
          valuesForm,
        ]);
        setValuesForm(valoresIniciais);
      }}
      >

        <FormField
          label="Nome da Categoria: "
          type="text"
          name="nome"
          value={valuesForm.titulo}
          onChange={handleChange}
        />

        <FormField
          label="Descrição: "
          type="textarea"
          name="descricao"
          value={valuesForm.descricao}
          onChange={handleChange}
        />

        <FormField
          label="Cor: "
          type="color"
          name="cor"
          value={valuesForm.cor}
          onChange={handleChange}
        />

        <Button>
          Cadastrar
        </Button>
      </form>

      {categorias.length === 0 && (
        <div>
          Loading...
        </div>
      )}

      <ul>
        {categorias.map((categoria) => (
          <li key={`${categoria.nome}`}>
            {categoria.titulo}
          </li>
        ))}
      </ul>

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;

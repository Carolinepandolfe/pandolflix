import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault/PageDefault';
import FormField from '../../../components/FormField/FormField';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
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

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {valuesForm.nome}
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
          value={valuesForm.nome}
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

        <button>
          Cadastrar
        </button>
      </form>

      <ul>
        {categorias.map((categoria) => (
          <li key={`${categoria.nome}`}>
            {categoria.nome}
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

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault/PageDefault';

function CadastroCategoria() {
    const [categorias, setCategorias] = useState(['Oi']);
    const [nomeDaCategoria,setNomeDaCategoria] = useState('Filmes');
    

  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {nomeDaCategoria}</h1>

      <form onSubmit={function handleSubmit(inputValue){
          inputValue.preventDefault();
          setCategorias([
              ...categorias,
              nomeDaCategoria
          ]);  
      }}>

        <label>
          Nome da Categoria:
          <input
            type="text"
            value={nomeDaCategoria}

            onChange={function inputCategoria(inputValue){
                setNomeDaCategoria(inputValue.target.value)
            }}
          />
        </label>

        <button>
          Cadastrar
        </button>
      </form>

      <ul>
          {categorias.map((categoria, index) => {
              return (
                  <li key={`${categoria} ${index}`}>
                      {categoria}
                  </li>
              )
          })}
      </ul>


      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  )
}

export default CadastroCategoria;

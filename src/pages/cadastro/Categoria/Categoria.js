import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault/PageDefault';

function CadastroCategoria() {
    const valoresIniciais = {
        nome:'',
        descricao:'',
        cor:'',
    }

    const [categorias, setCategorias] = useState([]);
    const [valuesForm,setValuesForm] = useState(valoresIniciais);



    function setValue(chave, valor) {
        setValuesForm({
            ...valuesForm,
            [chave]: valor,
        })     
    }

    function handleChange(inputValue){
        const { getAttribute, value } =  inputValue.target
        setValue(
            getAttribute('name'),
            value,
        );
    }
    
    

  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {valuesForm.nome}</h1>

      <form onSubmit={function handleSubmit(inputValue){
          inputValue.preventDefault();
          setCategorias([
              ...categorias,
              valuesForm
          ]);  
          setValuesForm(valoresIniciais)
      }}>

            <div>
                <label>
                Nome da Categoria:
                <input                
                    type="text"
                    value={valuesForm.nome}
                    name='nome'
                    onChange={handleChange}
                />
                </label>

            </div>


            <div>

                <label>
                Descrição:
                <textarea
                    type="text"
                    value={valuesForm.descricao}
                    name='descricao'
                    onChange={handleChange}
                />
                </label>
            </div>

            <div>

                <label>
                    Cor:          
                    <input
                    type="color"
                    value={valuesForm.cor}
                    name='cor'
                    onChange={handleChange}
                />
                </label>
            </div>


            <button>
                Cadastrar
            </button>
      </form>

      <ul>
          {categorias.map((categoria, indice) => {
              return (
                  <li key={`${categoria} ${indice}`}>
                      {categoria.nome}
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

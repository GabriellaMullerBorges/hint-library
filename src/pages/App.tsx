import React, { useState } from 'react';
import Botao from '../components/botao';
import Livraria from '../components/livros/livros';
import './style.scss';
import LivroForm from '../components/forms/forms';
import Cabecalho from '../components/livros/cabecalho';
import Header from '../components/header/header';


function App() {
  const [livros, setLivros] = useState([

    {
    id: 1,
    title: "Harry Potter",
    author: "J K Rollin",
    category: "Ficção",
    person: "Gabriella Borges",
    recomendation: 0
  }
  ]);

  return (
    <div className='wraper'>
      <Header />
      <div className="AppStyle">
        <LivroForm />
        <div className='lista-livros'>
          <Cabecalho/>
          {livros.map((livro, conteudo)=> (
            <Livraria livro={livro}/>
          ))}
        </div> 
      </div>
    </div>
  );
}

export default App;

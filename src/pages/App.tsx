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
    name: "Gabriella Borges",
    recomendation: 0
  }
  ]);

  const addLivro = (title: string, author: string, category: string, name: string) => {

    const newLivros = [...livros, {
        id:Math.floor(Math.random()*10000),
        title,
        author,
        category,
        name,
        recomendation: 0,
      },
    ]
    setLivros(newLivros);
  }

  return (
    <div className='wraper'>
      <Header />
      <LivroForm addLivro={addLivro}/>
      <div className="AppStyle">
        <div className='lista-livros'>
          <Cabecalho/>
          {livros.map((livro, conteudo)=> (
            <Livraria key={livro.id} livro={livro}/>
          ))}
        </div> 
      </div>
    </div>
  );
}

export default App;
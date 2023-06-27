import React, { useState } from 'react';
import Botao from './components/botao';


function App() {
  const [livros, setLivros] = useState([
    {
    id: 1,
    title: "Harry Potter",
    author: "J K Rollin",
    category: "Ficção",
    recomendation: 0
  }
  ]);

  return (
    <div className="App">
      <h1>Hint Library</h1>
      <div className='lista-livros'>
        {livros.map((livro)=> (
          <div className='livro'>
            <div className='content'>
              <p>{livro.title}</p>
              <p>{livro.author}</p>
              <p>{livro.category}</p>
              <p>{livro.recomendation}</p>
            </div>
          </div>
        ))}
      </div>
      <Botao/>
    </div>
  );
}

export default App;

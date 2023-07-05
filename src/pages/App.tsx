import React, { useState } from 'react';
import Botao from '../components/botao/botao';
import Livraria from '../components/livros/livros';
import './style.scss';
import LivroForm from '../components/forms/forms';
import Cabecalho from '../components/livros/cabecalho';
import Header from '../components/header/header';
import Pesquisa from '../components/forms/pesquisa';
import Filter from '../components/Filters/filter';


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

  const [pesquisa, setPesquisa] = useState('');
  const [filter, setFilter] = useState('All');

  const addLivro = (title: string, author: string, category: string, name: string) => {
    const lowerCaseTitle = title.toLowerCase();
    const livroExistente = livros.find((livro) => livro.title.toLowerCase() === lowerCaseTitle);

    if (livroExistente) {
      setPesquisa(title);
      alert("O livro já foi adicionado")
      return;}

    const newLivros = {
        id:Math.floor(Math.random()*10000),
        title,
        author,
        category,
        name,
        recomendation: 0,
      };
    

    setLivros([...livros, newLivros]);;
  }

  const removeLivro = (id: number) => {
    const newLivros = [...livros]
    const filtroLivros = newLivros.filter((livro) => livro.id !== id ? livro : null);
    setLivros(filtroLivros)
  }

  return (
    <div className='wraper'>
      <Header />
      <div className='filtro-pesquisa-wrap'>
      <Pesquisa pesquisa={pesquisa} setPesquisa={setPesquisa}  />
      <Filter filter={filter} setFilter={setFilter}/>
      </div>
      <LivroForm addLivro={addLivro}/>
      <div className="AppStyle">
        <div className='lista-livros'>
          <Cabecalho/>
          {livros
          .filter((livro) => filter === 'All' ? true : filter === "Ficção" ? (livro.category === "Ficção") : filter === "Não-Ficção" ? (livro.category === "Não-Ficção") : filter === "Profissional" ? (livro.category === "Profissional") : false)
          .filter((livro) => livro.title.toLowerCase().includes(pesquisa.toLowerCase())
          ) 
          .map((livro, conteudo)=> (
            <Livraria key={livro.id} livro={livro} removeLivro={removeLivro}/>
          ))}
        </div> 
      </div>
    </div>
  );
}

export default App;
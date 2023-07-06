import React, { useState, useEffect } from 'react';
import Livraria from '../components/livros/livros';
import './style.scss';
import LivroForm from '../components/forms/forms';
import Cabecalho from '../components/livros/cabecalho';
import Header from '../components/header/header';
import Pesquisa from '../components/forms/pesquisa';
import Filter from '../components/Filters/filter';

interface Livro {
  id: number;
  title: string;
  author: string;
  category: string;
  name: string;
  like: number;
  dislike: number;
}

function App() {
  const [livros, setLivros] = useState (() => {
  const storedLivros = localStorage.getItem('livros');
    return storedLivros ? JSON.parse(storedLivros) : [];
  });

  const [pesquisa, setPesquisa] = useState('');
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    localStorage.setItem('livros', JSON.stringify(livros));
  }, [livros]);

  const addLivro = (title: string, author: string, category: string, name: string) => {
    const lowerCaseTitle = title.toLowerCase();
    const livroExistente = livros.find((livro: { title: string; }) => livro.title.toLowerCase() === lowerCaseTitle);

    if (livroExistente) {
      setPesquisa(title);
      alert('O livro já foi adicionado');
      return;
    }

    const newLivros: Livro = {
      id: Math.floor(Math.random() * 10000),
      title,
      author,
      category,
      name,
      like: 0,
      dislike: 0,
    };

    setLivros([...livros, newLivros]);
  };

  const removeLivro = (id: number) => {
    const newLivros = livros.filter((livro: { id: number; }) => livro.id !== id);
    setLivros(newLivros);
  };

  const updateLivro = (livro: Livro) => {
    const updatedLivros = livros.map((livroItem: { id: number; }) =>
      livroItem.id === livro.id ? { ...livroItem, like: livro.like, dislike: livro.dislike } : livroItem
    );
    setLivros(updatedLivros);
  };
  

  return (
    <div className='wraper'>
      <Header />
       <div className='filtro-pesquisa-wrap'>
      <Pesquisa pesquisa={pesquisa} setPesquisa={setPesquisa} />
      <Filter filter={filter} setFilter={setFilter}/>
      </div>
      <LivroForm addLivro={addLivro}/>
      <div className="AppStyle">
        <div className='lista-livros'>
          <Cabecalho />
          {livros
            .filter((livro: { category: string; }) =>
            filter === 'All'
              ? true
              : filter === 'Ficção'
              ? livro.category === 'Ficção'
              : filter === 'Não-Ficção'
              ? livro.category === 'Não-Ficção'
              : filter === 'Profissional'
              ? livro.category === 'Profissional'
              : false
          )
            .filter((livro: { title: string; }) => livro.title.toLowerCase().includes(pesquisa.toLowerCase()))
            .map((livro: { id: any; title: string; author: string; category: string; name: string; like: number; dislike: number; }) => (
              <Livraria key={livro.id} livro={livro} removeLivro={removeLivro} updateLivro={updateLivro} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;

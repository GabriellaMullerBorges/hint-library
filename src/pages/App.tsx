import React, { useState, useEffect } from 'react';
import Livraria from '../components/livros/livros';
import './style.scss';
import LivroForm from '../components/forms/forms';
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
  const [livros, setLivros] = useState<Livro[]>(() => {
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
    const livroExistente = livros.find((livro: Livro) => livro.title.toLowerCase() === lowerCaseTitle);

    if (livroExistente) {
      setPesquisa(title);
      alert('O livro já foi adicionado');
      return;
    }

    const newLivro: Livro = {
      id: Math.floor(Math.random() * 10000),
      title,
      author,
      category,
      name,
      like: 0,
      dislike: 0,
    };

    setLivros((prevLivros) => [...prevLivros, newLivro]);
  };

  const removeLivro = (id: number) => {
    const newLivros = livros.filter((livro: Livro) => livro.id !== id);
    setLivros(newLivros);
  };

  const updateLivro = (livro: Livro) => {
    const updatedLivros = livros.map((livroItem: Livro) =>
      livroItem.id === livro.id ? { ...livroItem, like: livro.like, dislike: livro.dislike } : livroItem
    );
    setLivros(updatedLivros);
  };

  return (
    <div className='wraper'>
      <div className="header-pesquisa-filtro-wrap">
        <Header />
        <div className='filtro-pesquisa-wrap'>
          <Pesquisa pesquisa={pesquisa} setPesquisa={setPesquisa} />
          <Filter filter={filter} setFilter={setFilter} />
        </div>
      </div>
      <div className="form-app-wrap">
        <LivroForm addLivro={addLivro} />
        <div className="AppStyle">
          <div className='lista-livros'>
            {livros
              .filter((livro: Livro) =>
                filter === 'All'
                  ? true
                  : livro.category === filter
              )
              .filter((livro: Livro) =>
                livro.title.toLowerCase().includes(pesquisa.toLowerCase())
              )
              .map((livro: Livro) => (
                <Livraria
                  key={livro.id}
                  livro={livro}
                  removeLivro={removeLivro}
                  updateLivro={updateLivro}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

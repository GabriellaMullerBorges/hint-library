import React from 'react';
import Livraria, { Livro } from './livros';

const LivrosIniciais: React.FC = () => {
  const livros: Livro[] = [
    {
      id: 1,
      title: 'Harry Potter',
      author: 'J K Rowling',
      category: 'Ficção',
      name: 'Gabriella Borges',
      like: 0,
      dislike: 0,
    },
    {
      id: 2,
      title: 'O Hobbit',
      author: 'J R R Tolkien',
      category: 'Ficção',
      name: 'João Silva',
      like: 0,
      dislike: 0,
    },
    {
        id: 3,
        title: 'Homo Deus',
        author: 'Yuval Harari',
        category: 'Não-Ficção',
        name: 'Marina Pedrosa',
        like: 0,
        dislike: 0,
      },
      {
        id: 4,
        title: 'O Senhor dos Anéis',
        author: 'J R R Tolkien',
        category: 'Ficção',
        name: 'Gabriella Borges',
        like: 0,
        dislike: 0,
      },
      {
        id: 5,
        title: 'O Poder do Hábito',
        author: 'Charles Duhigg',
        category: 'Não-Ficção',
        name: 'Aline Oliveira',
        like: 0,
        dislike: 0,
      },
  ];

  return (
    <div className='lista-livros'>
      {livros.map((livro: Livro) => (
        <Livraria
          key={livro.id}
          livro={livro}
          removeLivro={() => {}}
          updateLivro={() => {}}
        />
      ))}
    </div>
  );
};

export default LivrosIniciais;


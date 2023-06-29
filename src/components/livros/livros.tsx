import React from 'react';
import Botao from '../botao/index';

interface Livro {
  title: string;
  author: string;
  category: string;
  person: string;
  recomendation:number;
}

const Livraria: React.FC<{ livro: Livro }> = ({ livro }) => {
  return (
    <div className='livro'>
      <div className='content'>
        <p>{livro.title}</p>
        <p>{livro.author}</p>
        <p>{livro.category}</p>
        <p>{livro.person}</p>
        <p>{livro.recomendation}</p>
        <Botao />
      </div>
    </div>
  );
};

export default Livraria;

import React from 'react';
import Botao from '../botao/index';
import './livros.scss';

interface Livro {
  title: string;
  author: string;
  category: string;
  name: string;
  recomendation:number;
}

const Livraria: React.FC<{ livro: Livro }> = ({ livro }) => {
  return (
    <div className='livro'>
      <div className='content'>
        <div className='titulo-div'> 
          <p>{livro.title}</p>  
        </div>
        <div className='author-div'>
          <p>{livro.author}</p>
        </div>
        <div className='name-div'>
          <p>{livro.name}</p>
        </div>
        <div className='category-div'>
          <div className='category-color'>
            <p>{livro.category}</p> 
          </div>  
        </div>
      </div>
      <div className='recomendation-div'>
            <Botao />  
            <p>{livro.recomendation}</p>
        </div>
    </div>
  );
};

export default Livraria;

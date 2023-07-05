import React from 'react';
import Botao from '../botao/botao';
import './livros.scss';
import './excluir.scss';

interface Livro {
  id: number;
  title: string;
  author: string;
  category: string;
  name: string;
  recomendation:number;
}

const Livraria: React.FC<{ livro: Livro, removeLivro: (id: number) => void }> = ({ livro, removeLivro }) => {
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
      <button className='excluir' onClick={() => removeLivro(livro.id)}>X</button>
    </div>
  );
};

export default Livraria;
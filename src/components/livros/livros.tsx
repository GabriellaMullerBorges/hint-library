import React from 'react';
import Botao from '../botoes/botaoUp';
import './livros.scss';
import './excluir.scss';
import BotaoDown from '../botoes/botaoDown';

interface LivrariaProps {
  livro: {
    id: number;
    title: string;
    author: string;
    category: string;
    name: string;
    like: number;
    dislike: number;
  };
  removeLivro: (id: number) => void;
  updateLivro: (livro: { id: number; like: number; dislike: number }) => void;
}

const Livraria: React.FC<LivrariaProps> = ({ livro, removeLivro, updateLivro }) => {

  const incrementDislike = () => {
    console.log(livro.dislike)
    updateLivro({ id: livro.id, dislike: (livro.dislike + 1),like: livro.like });
  };
  const incrementRecomendation = () => {
    console.log(livro.like)
    updateLivro({ id: livro.id, like: (livro.like + 1), dislike: livro.dislike });
  };

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
        <Botao incrementRecomendation={incrementRecomendation} />
        <p>{livro.like}</p>
        <BotaoDown incrementDislike={incrementDislike} />
        <p>{livro.dislike}</p>
      </div>
      <button className='excluir' onClick={() => removeLivro(livro.id)}>
        X
      </button>
    </div>
  );
};

export default Livraria;

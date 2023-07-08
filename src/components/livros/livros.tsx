import React from 'react';
import Botao from '../botoes/botaoUp';
import './livros.scss';
import './excluir.scss';
import BotaoDown from '../botoes/botaoDown';

export interface Livro {
  id: number;
  title: string;
  author: string;
  category: string;
  name: string;
  like: number;
  dislike: number;
}

interface LivrariaProps {
  livro: Livro;
  removeLivro: (id: number) => void;
  updateLivro: (livro: Livro) => void;
}

const Livraria: React.FC<LivrariaProps> = ({ livro, removeLivro, updateLivro }) => {

  const incrementDislike = () => {
    console.log(livro.dislike)
    updateLivro({ ...livro, dislike: livro.dislike + 1 });
  };

  const incrementRecomendation = () => {
    console.log(livro.like)
    updateLivro({ ...livro, like: livro.like + 1 });
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
        <div className='like'>
        <Botao incrementRecomendation={incrementRecomendation} />
        <p>{livro.like}</p>
        </div>
        <div className="dislike">
        <BotaoDown incrementDislike={incrementDislike} />
        <p>{livro.dislike}</p>
        </div>
      </div>
      <button className='excluir' onClick={() => removeLivro(livro.id)}>
        X
      </button>
    </div>
  );
};

export default Livraria;


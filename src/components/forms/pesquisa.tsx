import React from 'react';
import lupa from './lupa.png';
import './pesquisa.scss';

interface Props {
  pesquisa: string;
  setPesquisa: (value: string) => void;
}

const Pesquisa: React.FC<Props> = ({ pesquisa, setPesquisa }) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPesquisa(e.target.value);
  };

  return (
    <div className='separacao'>
      <div className='campo-pesquisa'>
        <input
          type='text'
          value={pesquisa}
          onChange={handleInputChange}
          placeholder='Busque o título de um livro'
        />
      </div>
    </div>
  );
};

export default Pesquisa;

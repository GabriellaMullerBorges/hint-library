import React from 'react';
import './botaoUp.scss'

interface BotaoProps {
  incrementRecomendation: () => void;
}

const Botao: React.FC<BotaoProps> = ({ incrementRecomendation }) => {
  return (
    <button className="botao" onClick={incrementRecomendation}>
    </button>
  );
};

export default Botao;

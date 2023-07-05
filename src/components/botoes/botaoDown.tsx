import React from 'react';
import './botaoDown.scss'

interface BotaoDownProps {
    incrementDislike: () => void;
}

const BotaoDown: React.FC<BotaoDownProps> = ({ incrementDislike }) => {
  return (
    <button className="botaoDown" onClick={incrementDislike}>
    </button>
  );
};

export default BotaoDown;

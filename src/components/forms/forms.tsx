import React from 'react'
import './forms.scss';

function LivroForm() {
  return (
    <div className='form'>
        <form className='form-content'>
            <input type='text' placeholder='Título do livro' className='titulo'></input>
            <input type='text' placeholder='Autor' className='autor'></input>
            <select>
                <option value="">Selecione uma categoria</option>
                <option value="profissional">Profissional</option>
                <option value="ficcao">Ficção</option>
                <option value="nao-ficcao">Não-Ficção</option>
            </select>
            <input type='text' placeholder='Seu nome' className='nome'></input>
        <button type="submit">OK</button>
        </form>
        </div>
  )
}

export default LivroForm
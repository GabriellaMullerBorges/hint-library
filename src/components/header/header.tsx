import React from 'react'
import './header.scss';
import './dropdown.scss';

const Header = () => {
  return (
    <div className='header'>
        <h1 className='app-title'>Hint Library</h1>
        <div className='dropdown'>
          <a className="dropdownlink" id='dropdownlink-principal' href="#">
          <span></span>
          </a>
          <div className='dropdown-menu'>
            <a className="dropdownlink" href="#">Todos</a>
            <a className="dropdownlink" href="#">Ficção</a>
            <a className="dropdownlink" href="#">Não-Ficção</a>
            <a className="dropdownlink" href="#">Profissional</a>
          </div>
        </div>
    </div>
  )
}

export default Header
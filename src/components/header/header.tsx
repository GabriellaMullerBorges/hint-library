import React from 'react'
import './header.scss';

const Header = ()=> {
  return (
    <div className='header'>
        <h1 className='app-title'>HINT LIBRARY</h1>
        <div className='description'>
          <p>Dê indicações, e curta seus livros preferidos</p>
        </div>
    </div>
  )
}

export default Header
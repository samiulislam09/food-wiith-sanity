import React from 'react'
import { Link } from 'react-router-dom'
import './Menu.css'

function Menu() {
  return (
    <div>
      <div className='menu'>
        <div className='logo'><h2>MEAL DEAL</h2></div>
        <menu>
            <Link className='menu-item' to='/'>Home</Link>
            <Link className='menu-item' to='/about'>About</Link>
            <Link className='menu-item' to='/order'>Order</Link>
            <Link className='menu-item' to='/contact'>Contact</Link>
        </menu>
    </div>
    <div className='banner'>
      <h1>Need food?</h1>
      <br />
      <button>ORDER</button>
    </div>
    </div>
  )
}

export default Menu
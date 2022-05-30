import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../styles/style.css';
/* import './Navbar.css'; */

export default function Navbar() {
    return (
        <nav>
            <div className='btn'>
                <NavLink className='btn_white logo' to='/'>SP.CANDLE</NavLink>
            </div>

            <div className='nav_container'>
                <div className='btn'>
                    <NavLink className='btn_white' to='/catalog'>Каталог</NavLink>
                </div>

                <div className='btn'>
                    <NavLink className='btn_white' to='/quest'>Вопросы</NavLink>
                </div>

                <div className='btn'>
                    <NavLink className='btn_white' to='/contact'>Контакты</NavLink>
                </div>
            </div>

        </nav>
    );
  }

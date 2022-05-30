import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../styles/style.css';

export default function Footer() {
    return (
        <div className='contacts'>
            <p className='contacts_name_white'>Контакты</p>
            <p className='contacts_item'>Минск, ул Кальварийская 21-3</p>
            <p className='contacts_item'>sp.candle@gmail.com</p>
            <p className='contacts_item'>375 44 789 45 28</p>

            <div className='social'>
                <NavLink className='social_item' to='/'>instagram</NavLink>
                <NavLink className='social_item' to='/'>twitter</NavLink>
                <NavLink className='social_item' to='/'>facebook</NavLink>
            </div>
        </div>
    );
  }

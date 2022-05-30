import React from 'react';
import { MastersListData } from '../../data/Masters';
/* import { NavLink } from 'react-router-dom'; */
import '../../styles/style.css';
import Join from '../Main/Join';
import MastersList from './Masters/Master';

export default function Contact() {
    return (
        <div className='contact'>
            <p className='section_name'>Контакты</p>

            <MastersList items = {MastersListData}/>

            <Join/>
        </div>
    );
}
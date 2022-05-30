import React from 'react';
import { NavLink } from 'react-router-dom';
import BestsellersList from './Bestseller/Bestseller';
import { BestsellerListData } from '../../data/Bestsellers';
import Join from './Join';
import '../../styles/style.css';

export default function Main() {
    return (
        <div className='main'>
            <div className='banner'>
                <p className='section_name_white'>Дизайнерские ароматические свечи</p>
                <p className='slogan_white'>Сделайте праздники немного особенными</p>
                
                <div className='btn btn_banner'>
                    <NavLink className='btn_white' to='/catalog' >Каталог</NavLink>
                </div>
            </div>
            
            <div className='idea'>
                <div className='idea_image'></div>
                <div className='idea_text'>
                    <p className='section_left'>Идея</p>
                    <p className='main_text'>Мы являемся основным источником
                     лучших продуктов для здоровья и красоты на рынке. 
                     Мы являемся сторонниками истинной красоты и предлагаем
                     только те продукты, в которые действительно верим. 
                     Вся наша продукция является натуральной и создается
                     настоящими мастерами.</p>
                </div>
            </div>

            <p className='section_name'>Бестселлеры</p>

            <BestsellersList items={BestsellerListData}/>

            <div className='story'>
                <div className='story_text'>
                    <p className='section_left'>История</p>
                    <p className='main_text'>Наша компания существует с 2018 года. 
                    За несколько лет мы собрали команду из профессионалов. 
                    Наши люди заинтересованы в создании качественной, 
                    интересной и необычной продукции. Вся наша продукция 
                    из натуральных материалов. Высокое качество является залогом успеха 
                    в нашей компании.
                    </p>
                </div>
                <div className='story_image'></div>
            </div>

            <Join/>

        </div>
    );
}

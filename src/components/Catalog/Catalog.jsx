import React, { useState } from 'react';
import { CandlesListData } from '../../data/Candles';
import { filterArr } from '../../helpers/filterHelper';
import { sortArr } from '../../helpers/sortHelper';
import { searchArr } from '../../helpers/searchHelper';
import CandlesList from './Candles/Candle';
import Join from '../Main/Join';
import '../../styles/style.css';


export default function Catalog() {
    const [items, setItems] = useState(CandlesListData);
    var searchValue = '';

    const changeSortValue = (v) => {
        const sortValue = v.target.value;
        setItems(sortArr(sortValue, items));
    }

    const changeFilterValue = (v) => {
        const filterValue = v.target.value;
        setItems(filterArr(filterValue, CandlesListData));
    }

    const changeSearchValue = (v) => {
        searchValue = v.target.value;
        console.log(searchValue);
    }

    const onSubmit = () => {
        setItems(searchArr(searchValue, CandlesListData));
    };

    return (
        <div className='catalog'>
            <p className='section_name'>Каталог товаров</p>
            <p className='slogan'>Дизайнерские ароматические свечи</p>

            <div className='select_container'>
                <div>
                    <select name='sortSelect' className='select' onChange={changeSortValue}>
                        <option value='0'>Сортировка</option>
                        <option value='1'>По возрастанию цены</option>
                        <option value='2'>По убыванию цены</option>
                        <option value='3'>По алфавиту А-Я</option>
                        <option value='4'>По алфавиту Я-А</option>  
                    </select>

                    <select name='filterSelect' className='select' onChange={changeFilterValue}>
                        <option value='0'>Время горения</option>
                        <option value='5'>5 часов</option>
                        <option value='6'>6 часов</option>
                        <option value='7'>7 часов</option>
                        <option value='8'>8 часов</option>  
                    </select>
                </div>

                <input className='input' type='text' placeholder='Поиск' onChange={changeSearchValue}></input>
                <input className="btn_search" type="button" value="Найти" onClick={onSubmit} />
            </div>

            <div id='error_result'></div>
            
            <CandlesList items={items}/>

            <Join/>
        </div>
    );
  }

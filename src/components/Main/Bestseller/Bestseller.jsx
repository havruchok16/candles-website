import React from 'react';
import '../../../styles/style.css';
import BestsellerItem from './BestsellerItem';


export default function BestsellersList(props) {
    return (
        <div className='candless'>
            <div className='candless_list'>
                {props.items.map((el) => (
                    <BestsellerItem key={el.name} item={el} />
                ))}
            </div>
        </div>
    );
}
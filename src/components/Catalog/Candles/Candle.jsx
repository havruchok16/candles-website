import React from 'react';
import '../../../styles/style.css';
import CandlesItem from './CandlesItem';

export default function CandlesList(props) {
    return (
        <div className='candless'>
            <div className='candless_list'>
                {props.items.map((el) => (
                    <CandlesItem key={el.name} item={el} />
                ))}
            </div>
        </div>
    );
}


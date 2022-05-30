import React from 'react';
import '../../../styles/style.css';
import MastersItem from './MastertsItem';

export default function MastersList(props) {
    return (
        <div className='masterss'>
            <div className='masterss_list'>
                {props.items.map((el) => (
                    <MastersItem key={el.name} item={el} />
                ))}
            </div>
        </div>
    );
}
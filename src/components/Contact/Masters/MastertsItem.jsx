import React from 'react';
import '../../../styles/style.css';

export default function MastersItem (props) {
    
    return (
        <div className='masters'>
            <img className='masters_img' src={props.item.imgUrl} alt={props.item.name}></img>
            
            <div>
                <p className='masters_name'>{props.item.name}</p>
                <p className='masters_prof'>{props.item.prof}</p>
                <p className='masters_email'>{props.item.email}</p>
                <p className='masters_phone'>{props.item.phone}</p>
            </div>
        </div>
    );
}

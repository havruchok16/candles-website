import React from 'react';
import '../../../styles/style.css';

const BestsellerItem = (props) => {
    // there we need to create request to get data
    return (
        <div className='candles'>
            <img className='candles_img' src={props.item.imgUrl} alt={props.item.name}></img>
            <div>
                <div>
                    <p className='candles_name'>{props.item.name}</p>
                    <p className='candles_price'>{props.item.price} {props.item.valute || "byn"}</p>
                </div>
                <div>
                    <span></span> 
                </div>
            </div>
        </div>
    );
}

export default BestsellerItem;


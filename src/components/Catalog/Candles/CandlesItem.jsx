import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../../styles/style.css';

export default function CandlesItem (props) {

    const history = useNavigate();

    const onClick = () => {
        history("/candlesinfo", {
            state: {
                item: props.item
            }
        });
    }

    return (
        <div className='candles'>
            <img className='candles_img' src={props.item.imgUrl} alt={props.item.name}></img>
            
            <div>
                <p className='candles_name'>{props.item.name}</p>
                <p className='candles_price'>{props.item.price} {props.item.valute || "byn"}</p>
            </div>

            <input className="btn_cart" type="button" value="Подробнее" onClick={onClick}/>
          
        </div>
    );
}

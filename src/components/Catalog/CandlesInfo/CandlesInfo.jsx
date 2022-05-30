import React, { useState } from "react";
import { useLocation } from "react-router-dom";

export default function CandlesInfo(props) {

    const location = useLocation();
    const [item] = useState(props.item || location.state.item);

    const commetsItem = item.comments.map((comment) =>
        <div className="comment">
            <p className="comm">{comment.comm}</p>
            <div className="comm_cont">
                <p>{comment.author}</p>
                <p>{comment.data}</p>
            </div>
        </div>
    );

    return (
        <div>
            <p className='section_name'>Подробная информация</p>

            <div className="candles_info">
                <img className='candles_info_img' src={item.imgUrl} alt={item.name}></img>

                <div className="candles_info_container">
                    <p className="candles_info_name">{item.name}</p>
                    <p>Стоимость: {item.price} byn</p>
                    <p>Время горения: {item.lifeTime} часов</p>
                    <p>Описание: {item.about}</p>
                    <p>Вес: {item.ves} г</p>
                    <p>Состав: {item.composition}</p>
                </div>
            </div>

            <div className="comments">
            <p className='section_name'>Отзывы</p>
                {commetsItem}
            </div>
        </div>
        
    );
}

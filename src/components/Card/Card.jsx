import React from 'react';
import s from './Card.module.css';
import star from './../../images/Vector.png';
// import './../../images/Image.png';
import {useDispatch, useSelector} from "react-redux";
import {addItemToCart, createTotalPrice} from "../../redux-state/reducers/cart-reducer";

const Card = () => {
    const dispatch = useDispatch();

    const arr = useSelector(state => state.cart.cartItems.items)
    const cards = useSelector(state => state.cart.cardsItems)
    const handleClick = (el) => {
        dispatch(addItemToCart(el));
        dispatch(createTotalPrice())
    };

    return (
        <div className={s.cards}>
            {cards.map((el) => {
            return (
                <div className={s.card}>
                    <div className={s.card_img}>
                        <img src={el.img} alt=""/>
                    </div>
                    <div className={s.card_text}>
                        <div className={s.name_price}>
                            <div className={s.card_name_product}>{el.title}</div>
                            <div className={s.current_price}>{`${el.price} ₽`}</div>
                        </div>
                        {el.oldprice ? <div className={s.old_price}>{`${el.oldprice} ₽`}</div> : null}
                        <div className={s.star_buy}>
                            <div className={s.star}>
                                <img src={star} alt=""/>
                                <span>{el.rate}</span>
                            </div>
                            <button onClick={() => handleClick(el)}
                                    className={s.buy}>Купить
                            </button>
                        </div>
                    </div>
                </div>
            )})}
        </div>
    )
}


export default Card
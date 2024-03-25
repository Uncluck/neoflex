import React from 'react';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import {useSelector, useDispatch} from "react-redux";
import {addItemToCart, createTotalPrice, removeItemFromCart} from "../../redux-state/reducers/cart-reducer";
import s from './Cart.module.css'
import Delete from './../../images/delete.svg'
import Minus from './../../images/Minus.svg'
import Plus from './../../images/Plus.svg'
import headphone from './../../images/Image.png'

const Cart = () => {

    // const cartArr = useSelector(state => state.cart.cartItems.items)
    // useSelector(state => state.cart.cartItems.totalPrice)
    const { items: cartArr, totalPrice: price } = useSelector(state => state.cart.cartItems)
    const dispatch = useDispatch()

    return (
        <React.StrictMode>
            <Header/>
            <div className={s.cart}>
                <div>
                <h2>Корзина</h2>
                {cartArr.map(el => {
                    return (
                        <div className={s.items}>
                            <div className={s.cart_item}>
                                <div className={s.item_info}>
                                    <div className={s.item_img}>
                                        <img src={headphone} alt=""/>
                                    </div>
                                    <div className={s.name_price}>
                                        <div>{el.title}</div>
                                        <div className={s.price_item}>{el.price}</div>
                                    </div>
                                    <div className={s.delete}>
                                        <img src={Delete} alt=""/>
                                    </div>
                                </div>
                                <div className={s.change_price_count}>
                                    <div className={s.choose_amount}>
                                        <div onClick={() => {
                                            dispatch(removeItemFromCart(el),
                                            dispatch(createTotalPrice())
                                            )}}
                                            className={s.circle}>
                                            <img src={Minus} alt=""/>
                                        </div>
                                        <div>{el.amount}</div>
                                        <div onClick={() => {
                                            dispatch(addItemToCart(el),
                                            dispatch(createTotalPrice())
                                            )}
                                        }
                                            className={s.circle}>
                                            <img src={Plus} alt=""/>
                                        </div>
                                    </div>
                                    <div className={s.total_price_item}>
                                        {el.totalItemPrice}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
                </div>
                <div className={s.total_price_container}>
                    <div className={s.total_price}>
                        <div>Итого</div>
                        <div>{`₽ ${price}`}</div>
                    </div>
                    <div className={s.decor}>
                        <button className={s.button_decor}>
                            Перейти к оформлению
                        </button>
                    </div>
                </div>
            </div>
            <Footer/>
        </React.StrictMode>
    )
}

export default Cart;
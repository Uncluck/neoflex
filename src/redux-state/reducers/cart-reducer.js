import {createSlice} from '@reduxjs/toolkit';
import headphones1 from '../../images/headphones/1.png'
import headphones2 from '../../images/headphones/2.png'
import headphones3 from '../../images/headphones/3.png'
import air1 from '../../images/headphones/21.png'
import air2 from '../../images/headphones/22.png'
import air3 from '../../images/headphones/23.png'

const headphonesData = [
    {
        id: 10,
        img: headphones1,
        title: 'Apple BYZ SB52I',
        price: 2927,
        oldprice: 5000,
        rate: 4.7,
    },
    {
        id: 20,
        img: headphones2,
        title: 'Apple EarPods',
        price: 2327,
        rate: 4.5,
    },
    {
        id: 30,
        img: headphones3,
        title: 'Apple EarPods',
        price: 2327,
        rate: 4.5,
    },
    {
        id: 40,
        img: headphones1,
        title: 'Apple BYZ SB52I',
        price: 2927,
        rate: 4.7,
    },
    {
        id: 50,
        img: headphones2,
        title: 'Apple EarPods',
        price: 2327,
        rate: 4.5,
    },
    {
        id: 60,
        img: headphones3,
        title: 'Apple EarPods',
        price: 2327,
        rate: 4.5,
    },
]
const airData = [
    {
        id: 11,
        img: air1,
        title: 'Apple AirPods',
        price: 9527,
        rate: 4.7,
    },
    {
        id: 21,
        img: air2,
        title: 'GERLAX GH-04',
        price: 6527,
        rate: 4.5,
    },
    {
        id: 31,
        img: air3,
        title: 'BOROFONE BO4',
        price: 7527,
        rate: 4.7,
    },
]

const storedCartItems = JSON.parse(sessionStorage.getItem('cart'));
const storedTotalPrice = sessionStorage.getItem('price') ? parseInt(sessionStorage.getItem('price')) : 0;
const storedTotalCount = storedCartItems ? storedCartItems.reduce((acc, item) => acc + item.amount, 0) : 0;

const CartSlice = createSlice({
    name: 'cart',
    initialState: {
        cardsItems: {
            headphones: {
                name: 'Наушники',
                data: headphonesData
            },
            airHeadphones: {
                name: 'Беспроводные Наушники',
                data: airData
            }
        },
        cartItems: {
            items: storedCartItems || [],
            count: storedTotalCount,
            totalPrice: storedTotalPrice,
        },
    },
    reducers: {
        addItemToCart: (state, { payload }) => {
            const isExist = state.cartItems.items.find(item => item.id === payload.id);

            let updatedItems;
            if (isExist) {
                updatedItems = state.cartItems.items.map(item => {
                    if (item.id === payload.id) {
                        return {
                            ...item,
                            amount: item.amount + 1,
                            totalItemPrice: item.totalItemPrice + payload.price
                        }
                    }
                    return item;
                });
            } else {
                updatedItems = [...state.cartItems.items, { ...payload, amount: 1, totalItemPrice: payload.price }];
            }

            const updatedCount = state.cartItems.count + 1;
            const updatedTotalPrice = state.cartItems.totalPrice + payload.price

            sessionStorage.setItem('cart', JSON.stringify(updatedItems));
            sessionStorage.setItem('price', updatedTotalPrice);
            sessionStorage.setItem('count', updatedCount);

            return {
                ...state,
                cartItems: {
                    items: updatedItems,
                    count: updatedCount,
                    totalPrice: updatedTotalPrice,
                }
            }
        },
        removeItemFromCart: (state, { payload }) => {
            const filteredItems = state.cartItems.items.filter(item => item.id !== payload.id);
            const existingItem = state.cartItems.items.find(item => item.id === payload.id);

            sessionStorage.setItem('cart', JSON.stringify(filteredItems));
            sessionStorage.setItem('price', (state.cartItems.totalPrice - existingItem.totalItemPrice).toString());
            sessionStorage.setItem('count', state.cartItems.count - 1);


            return {
                ...state,
                cartItems: {
                    items: existingItem.amount > 1 ? state.cartItems.items.map(item => {
                        if (item.id === payload.id) {
                            return {
                                ...item,
                                amount: item.amount - 1,
                                totalItemPrice: item.totalItemPrice - payload.price
                            };
                        }

                        return item;
                    }) : filteredItems,
                    count: state.cartItems.count - 1,
                    totalPrice: state.cartItems.totalPrice - payload.price,
                }
            }
        },
        deleteItemFromCart: (state, { payload }) => {
            const filteredItems = state.cartItems.items.filter(item => item.id !== payload.id);
            const existingItem = state.cartItems.items.find(item => item.id === payload.id);

            sessionStorage.setItem('cart', JSON.stringify(filteredItems));
            sessionStorage.setItem('price', (state.cartItems.totalPrice - existingItem.totalItemPrice).toString());
            sessionStorage.setItem('count', state.cartItems.count - payload.amount);



            return {
                ...state,
                cartItems: {
                    items: filteredItems,
                    count: state.cartItems.count - existingItem.amount,
                    totalPrice: state.cartItems.totalPrice - existingItem.totalItemPrice,
                }
            }
        },
    },
});

export const {removeItemFromCart, addItemToCart, deleteItemFromCart} = CartSlice.actions;
export const {reducer: cartSlice} = CartSlice
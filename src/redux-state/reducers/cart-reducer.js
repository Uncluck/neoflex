import { createSlice } from '@reduxjs/toolkit';

const CartReducer = createSlice({
    name: 'cart',
    initialState: {
        cardsItems: [
            {
                img: './../../images/Image.png',
                title: 'Apple BYZ SB52I',
                price: 2927,
                oldprice: 5000,
                rate: 4.7,
            },
            {
                img: './../../images/Image.png',
                title: 'Apple EarPods',
                price: 2327,
                rate: 4.5,
            },
            {
                img: './../../images/Image.png',
                title: 'Apple EarPods',
                price: 2327,
                rate: 4.5,
            },
            {
                img: './../../images/Image.png',
                title: 'Apple BYZ SB52I',
                price: 2927,
                rate: 4.7,
            },
            {
                img: './../../images/Image.png',
                title: 'Apple EarPods',
                price: 2327,
                rate: 4.5,
            },
            {
                img: './../../images/Image.png',
                title: 'Apple EarPods',
                price: 2327,
                rate: 4.5,
            },
        ],
        cartItems: {
            items: [
            ],
            count: 0,
            totalPrice: 0,
        },
    },
    reducers: {
        addItemToCart: (state, action) => {
            const existingItem = state.cartItems.items.find(item => item.title === action.payload.title);
            if (existingItem) {
                existingItem.amount += 1;
                existingItem.totalItemPrice += action.payload.price;
            } else {
                state.cartItems.items.push({ ...action.payload, amount: 1, totalItemPrice: action.payload.price });
            }
            state.cartItems.count += 1;
            return state
        },
        removeItemFromCart: (state, action) => {
            const updatedItems = state.cartItems.items.filter(item => item.title !== action.payload.title);
            const existingItem = state.cartItems.items.find(item => item.title === action.payload.title);

            if (existingItem.amount > 1) {
                existingItem.amount -= 1;
                existingItem.totalItemPrice -= action.payload.price;
            } else {
                state.cartItems.items = updatedItems;
            }
            state.cartItems.count -= 1;
            return state
        },
        createTotalPrice: (state) => {
            state.cartItems.totalPrice = state.cartItems.items.reduce((prev, el) => {
                console.log(prev, el);
                prev += el.totalItemPrice
                return prev
            }, 0)
            console.log(state.cartItems.totalPrice);
            return state
        }
    },
});

export const { removeItemFromCart, addItemToCart, createTotalPrice } = CartReducer.actions;
export default CartReducer.reducer;
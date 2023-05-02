import { createSlice } from '@reduxjs/toolkit';

const getLocalStorage = () => {
  const cart = localStorage.getItem('cart');
  if (cart) {
    return JSON.parse(cart);
  } else {
    return [];
  }
};

interface CartItem {
  id: string;
  title: string;
  image: string;
  amount: number;
  price: number;
  max: number;
}

const initialState: {
  total_items: number;
  total_amount: number;
  cart: CartItem[];
} = {
  total_amount: 0,
  total_items: 0,
  cart: getLocalStorage(),
};

export const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { id, amount, product } = action.payload;
      const tempItem = state.cart.find((i) => i.id === id);
      if (tempItem) {
        tempItem.amount += amount;
      } else {
        const newItem = {
          id: id,
          title: product.title,
          amount: amount,
          image: product.image,
          price: product.price,
          max: product.rating.count,
        };
        state.cart.push(newItem);
      }
      state.total_items += amount;
      state.total_amount += amount * product.price;
    },
    toggleCartItemAmount: (state, action) => {
      const { id, value } = action.payload;
      state.cart = state.cart.map((item) => {
        if (item.id === id) {
          if (value === 'inc') {
            let newAmount = item.amount + 1;
            if (newAmount > item.max) {
              newAmount = item.max;
            }
            return { ...item, amount: newAmount };
          } else if (value === 'dec') {
            let newAmount = item.amount - 1;
            if (newAmount < 1) {
              newAmount = 1;
            }
            return { ...item, amount: newAmount };
          }
        }
        return item;
      });
    },
    removeCart: (state, action) => {
      const tempCart = state.cart.filter((item) => item.id !== action.payload);
      state.cart = tempCart;
    },
    clearCart: (state) => {
      state.cart = [];
    },
    countCartTotals: (state) => {
      const { total_items, total_amount } = state.cart.reduce(
        (total, cartItem) => {
          const { amount, price } = cartItem;

          total.total_items += amount;
          total.total_amount += price * amount;
          return total;
        },
        {
          total_items: 0,
          total_amount: 0,
        },
      );
      state.total_items = total_items;
      state.total_amount = total_amount;
    },
  },
});

export const { addToCart, countCartTotals, toggleCartItemAmount, clearCart, removeCart } =
  CartSlice.actions;

export default CartSlice.reducer;

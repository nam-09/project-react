import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartItem {
  price: number;
  id: number;
  quantity: number;
  item: any;
  img: any;
  title: string;
}

interface CartState {
  [x: string]: any;
  isCartOpen: boolean;
  cartItems: CartItem[];
}

const initialState: CartState = {
  isCartOpen: false,
  cartItems: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    toggleCart(state, action: PayloadAction<boolean>) {
      return {
        ...state,
        isCartOpen: action.payload,
      };
    },
    addItem: (state, action: PayloadAction<CartItem>) => {
      // console.log(action.payload);
      const newItemId = action.payload.id;
      const cloneState = { ...state };
      const existingItem = cloneState.cartItems.find(
        (item) => item.id === newItemId,
      );
      if (existingItem) {
        existingItem.quantity = action.payload.quantity + 1;
      } else {
        cloneState.cartItems.push({ ...action.payload, quantity: 1 });
      }
      // return {
      //   ...state,
      //   cartItems: state.cartItems.find((item) =>
      //     item.id === action.payload.id
      //       ? { ...action.payload, quantity: action.payload.quantity + 1 }
      //       : item,
      //   ),
      // };
    },
    removeItem(state, action: PayloadAction<number>) {
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.payload),
      };
    },
    incrementItem(state, action: PayloadAction<number>) {
      return {
        ...state,
        cartItems: state.cartItems.map((item) => {
          if (item.id === action.payload && item.quantity) {
            return { ...item, quantity: item.quantity + 1 };
          }
          return item;
        }),
      };
    },
    decrementItem(state, action: PayloadAction<number>) {
      return {
        ...state,
        cartItems: state.cartItems
          .map((item) => {
            if (item.id === action.payload) {
              return { ...item, quantity: item.quantity - 1 };
            }
            return item;
          })
          .filter((item) => item.quantity !== 0),
      };
    },
  },
});

export const { toggleCart, addItem, removeItem, incrementItem, decrementItem } =
  cartSlice.actions;

export default cartSlice.reducer;

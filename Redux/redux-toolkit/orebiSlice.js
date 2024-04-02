import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  userInfo: [],
  // userToken: localStorage.getItem('userToken') || null,
  products: [],
  checkedBrands: [],
  checkedCategorys: [],
};

export const orebiSlice = createSlice({
  name: "orebi",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      if (action.payload !== null && action.payload !== undefined) {
        if (state.products !== null && state.products !== undefined) {
          const item = state.products.find(
            (item) => item !== null && item !== undefined && item._id === action.payload._id
          );
          if (item) {
            item.quantity += action.payload.quantity;
          } else {
            state.products.push(action.payload);
          }
        } else {
          console.error('state.products không tồn tại hoặc chưa được khởi tạo');
        }
      } else {
        console.error('action.payload không tồn tại hoặc chưa được khởi tạo');
      }
    },
    increaseQuantity: (state, action) => {
      const item = state.products.find(
        (item) => item._id === action.payload._id
      );
      if (item) {
        item.quantity++;
        // Dispatch a success toast
      }
    },
    drecreaseQuantity: (state, action) => {
      const item = state.products.find(
        (item) => item._id === action.payload._id
      );
      if (item.quantity === 1) {
        item.quantity = 1;
      } else {
        item.quantity--;
        // Dispatch a success toast
      }
    },
    deleteItem: (state, action) => {
      state.products = state.products.filter(
        (item) => item._id !== action.payload
      );
      // Dispatch a success toast
      toast.error("Product removed from cart");
    },
    resetCart: (state) => {
      state.products = [];
      // Dispatch a success toast
    },

    toggleBrand: (state, action) => {
      const brand = action.payload;
      const isBrandChecked = state.checkedBrands.some(
        (b) => b._id === brand._id
      );

      if (isBrandChecked) {
        state.checkedBrands = state.checkedBrands.filter(
          (b) => b._id !== brand._id
        );
      } else {
        state.checkedBrands.push(brand);
      }
    },

    toggleCategory: (state, action) => {
      const category = action.payload;
      const isCategoryChecked = state.checkedCategorys.some(
        (b) => b.cat !== category.title
      );
    
      if (isCategoryChecked) {
        state.checkedCategorys = state.checkedCategorys.filter(
          (b) => b.productName !== category.productName
        );
      } else {
        state.checkedCategorys.push(category);
      }
    },
  },
});

export const {
  login,
  logout,
  addToCart,
  increaseQuantity,
  drecreaseQuantity,
  deleteItem,
  resetCart,
  toggleBrand,
  toggleCategory,
} = orebiSlice.actions;
export default orebiSlice.reducer;

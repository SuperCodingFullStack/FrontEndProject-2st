import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    selectedAll: false,
    selectedBrands: [],
    selectedProducts: [],
    cartItems: [],
    totalPrice: 0, // 총 가격 상태 추가
    totalQuantity: 0, // 총 수량 상태 추가
  },
  reducers: {
    toggleSelectAll: (state) => {
      state.selectedAll = !state.selectedAll;
      state.selectedBrands = state.selectedAll
        ? state.cartItems.map((item) => item.username)
        : [];
      state.selectedProducts = state.selectedAll
        ? state.cartItems.map((item) => item.productId)
        : [];

      // 총 가격과 총 수량 계산
      state.totalPrice = state.selectedAll
        ? state.cartItems.reduce(
            (total, item) => total + (item.price * item.amount || 0),
            0
          )
        : 0;

      state.totalQuantity = state.selectedAll
        ? state.cartItems.reduce((total, item) => total + (item.amount || 0), 0)
        : 0;
    },

    toggleBrand: (state, action) => {
      const brand = action.payload;
      const brandProducts = state.cartItems.filter(
        (item) => item.username === brand
      );
      const brandProductIds = brandProducts.map((item) => item.productId);

      if (state.selectedBrands.includes(brand)) {
        state.selectedBrands = state.selectedBrands.filter((b) => b !== brand);
        state.selectedProducts = state.selectedProducts.filter(
          (productId) => !brandProductIds.includes(productId)
        );
      } else {
        state.selectedBrands.push(brand);
        state.selectedProducts.push(...brandProductIds);
      }

      state.selectedAll =
        state.selectedProducts.length === state.cartItems.length;

      state.totalPrice = state.selectedProducts.reduce((total, productId) => {
        const item = state.cartItems.find(
          (item) => item.productId === productId
        );
        return total + (item ? item.price * item.amount : 0);
      }, 0);

      state.totalQuantity = state.selectedProducts.reduce(
        (total, productId) => {
          const item = state.cartItems.find(
            (item) => item.productId === productId
          );
          return total + (item ? item.amount : 0);
        },
        0
      );
    },

    toggleProduct: (state, action) => {
      const productId = action.payload;

      if (state.selectedProducts.includes(productId)) {
        state.selectedProducts = state.selectedProducts.filter(
          (id) => id !== productId
        );
      } else {
        state.selectedProducts.push(productId);
      }

      state.selectedAll =
        state.selectedProducts.length === state.cartItems.length;

      const uniqueBrands = [
        ...new Set(state.cartItems.map((item) => item.username)),
      ];
      uniqueBrands.forEach((brand) => {
        const brandProducts = state.cartItems.filter(
          (item) => item.username === brand
        );
        const brandProductIds = brandProducts.map((item) => item.productId);
        const allSelected = brandProductIds.every((productId) =>
          state.selectedProducts.includes(productId)
        );

        if (allSelected) {
          if (!state.selectedBrands.includes(brand)) {
            state.selectedBrands.push(brand);
          }
        } else {
          state.selectedBrands = state.selectedBrands.filter(
            (b) => b !== brand
          );
        }
      });

      state.totalPrice = state.selectedProducts.reduce((total, productId) => {
        const item = state.cartItems.find(
          (item) => item.productId === productId
        );
        return total + (item ? item.price * item.amount : 0);
      }, 0);

      state.totalQuantity = state.selectedProducts.reduce(
        (total, productId) => {
          const item = state.cartItems.find(
            (item) => item.productId === productId
          );
          return total + (item ? item.amount : 0);
        },
        0
      );
    },

    setCartItems: (state, action) => {
      state.cartItems = action.payload;
    },

    removeSelectedItems: (state, action) => {
      const productId = action.payload; // 삭제할 제품 ID

      if (productId) {
        // 특정 제품 삭제
        state.cartItems = state.cartItems.filter(
          (item) => item.productId !== productId
        );
      } else {
        // 선택된 모든 제품 삭제
        state.cartItems = state.cartItems.filter(
          (item) => !state.selectedProducts.includes(item.productId)
        );
      }

      // 선택된 상태 초기화
      state.selectedProducts = [];
      state.selectedBrands = [];
      state.selectedAll = false;
      state.totalPrice = 0;
      state.totalQuantity = 0;
    },
    setSelectedProducts: (state, action) => {
      state.selectedProducts = action.payload;
    },
  },
});

export const {
  toggleSelectAll,
  toggleBrand,
  toggleProduct,
  setCartItems,
  removeSelectedItems,
  setSelectedProducts,
} = cartSlice.actions;

export default cartSlice.reducer;

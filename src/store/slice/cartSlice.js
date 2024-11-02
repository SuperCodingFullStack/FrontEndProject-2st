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
        ? state.cartItems.map((item) => item.id)
        : [];

      // 총 가격과 총 수량 계산
      state.totalPrice = state.selectedAll
        ? state.cartItems.reduce(
            (total, item) => total + (item.price * item.amount || 0),
            0
          )
        : 0;

      state.totalQuantity = state.selectedAll
        ? state.cartItems.reduce(
            (total, item) => total + (item.amount || 0), // 'amount'로 수정
            0
          )
        : 0; // 총 수량 계산
    },

    toggleBrand: (state, action) => {
      const brand = action.payload;
      const brandProducts = state.cartItems.filter(
        (item) => item.username === brand
      );
      const brandProductIds = brandProducts.map((item) => item.id);

      if (state.selectedBrands.includes(brand)) {
        state.selectedBrands = state.selectedBrands.filter((b) => b !== brand);
        // Remove products of this brand from selectedProducts
        state.selectedProducts = state.selectedProducts.filter(
          (id) => !brandProductIds.includes(id)
        );
      } else {
        state.selectedBrands.push(brand);
        // Add products of this brand to selectedProducts
        state.selectedProducts.push(...brandProductIds);
      }

      // 전체 선택 상태 업데이트
      state.selectedAll =
        state.selectedProducts.length === state.cartItems.length;

      // 총 가격과 총 수량 계산
      state.totalPrice = state.selectedProducts.reduce((total, productId) => {
        const item = state.cartItems.find((item) => item.id === productId);
        return total + (item ? item.price * item.amount : 0);
      }, 0);

      state.totalQuantity = state.selectedProducts.reduce(
        (total, productId) => {
          const item = state.cartItems.find((item) => item.id === productId);
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

      // 전체 선택 상태 업데이트
      state.selectedAll =
        state.selectedProducts.length === state.cartItems.length;

      // 브랜드 선택 상태 업데이트
      const uniqueBrands = [
        ...new Set(state.cartItems.map((item) => item.username)),
      ];
      uniqueBrands.forEach((brand) => {
        const brandProducts = state.cartItems.filter(
          (item) => item.username === brand
        );
        const brandProductIds = brandProducts.map((item) => item.id);
        const allSelected = brandProductIds.every((id) =>
          state.selectedProducts.includes(id)
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

      // 총 가격과 총 수량 계산
      state.totalPrice = state.selectedProducts.reduce((total, productId) => {
        const item = state.cartItems.find((item) => item.id === productId);
        return total + (item ? item.price * item.amount : 0);
      }, 0);

      state.totalQuantity = state.selectedProducts.reduce(
        (total, productId) => {
          const item = state.cartItems.find((item) => item.id === productId);
          return total + (item ? item.amount : 0);
        },
        0
      );
    },

    setCartItems: (state, action) => {
      state.cartItems = action.payload;
    },
  },
});

export const { toggleSelectAll, toggleBrand, toggleProduct, setCartItems } =
  cartSlice.actions;
export default cartSlice.reducer;

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
      const newSelectedAll = !state.selectedAll;
      const newSelectedBrands = newSelectedAll
        ? [...new Set(state.cartItems.map((item) => item.username))]
        : [];
      const newSelectedProducts = newSelectedAll
        ? state.cartItems.map((item) => item.productId)
        : [];

      state.selectedAll = newSelectedAll;
      state.selectedBrands = newSelectedBrands;
      state.selectedProducts = newSelectedProducts;

      // 총 가격과 총 수량 계산
      state.totalPrice = newSelectedAll
        ? state.cartItems.reduce(
            (total, item) => total + (item.price * item.amount || 0),
            0
          )
        : 0;

      state.totalQuantity = newSelectedAll
        ? state.cartItems.reduce((total, item) => total + (item.amount || 0), 0)
        : 0;
    },

    toggleBrand: (state, action) => {
      const brand = action.payload;
      const brandProducts = state.cartItems.filter(
        (item) => item.username === brand
      );
      const brandProductIds = brandProducts.map((item) => item.productId);

      // 브랜드 선택 상태를 반영
      const newSelectedBrands = state.selectedBrands.includes(brand)
        ? state.selectedBrands.filter((b) => b !== brand) // 이미 선택된 브랜드 해제
        : [...state.selectedBrands, brand]; // 선택되지 않은 브랜드 선택

      let newSelectedProducts;
      if (state.selectedBrands.includes(brand)) {
        // 브랜드가 선택된 상태라면 해당 브랜드의 제품들을 모두 해제
        newSelectedProducts = state.selectedProducts.filter(
          (productId) => !brandProductIds.includes(productId)
        );
      } else {
        // 브랜드가 선택되지 않은 상태라면 해당 브랜드의 제품들을 모두 선택
        newSelectedProducts = [
          ...state.selectedProducts,
          ...brandProductIds.filter(
            (id) => !state.selectedProducts.includes(id)
          ),
        ];
      }

      state.selectedBrands = newSelectedBrands;
      state.selectedProducts = newSelectedProducts;

      // 전체 선택 여부 업데이트
      state.selectedAll =
        state.selectedProducts.length === state.cartItems.length;

      // 총 가격과 총 수량 계산
      state.totalPrice = newSelectedProducts.reduce((total, productId) => {
        const item = state.cartItems.find(
          (item) => item.productId === productId
        );
        return total + (item ? item.price * item.amount : 0);
      }, 0);

      state.totalQuantity = newSelectedProducts.reduce((total, productId) => {
        const item = state.cartItems.find(
          (item) => item.productId === productId
        );
        return total + (item ? item.amount : 0);
      }, 0);
    },

    toggleProduct: (state, action) => {
      const productId = action.payload;
      const newSelectedProducts = state.selectedProducts.includes(productId)
        ? state.selectedProducts.filter((id) => id !== productId)
        : [...state.selectedProducts, productId];

      state.selectedProducts = newSelectedProducts;

      // 전체 선택 여부 업데이트
      state.selectedAll = newSelectedProducts.length === state.cartItems.length;

      const uniqueBrands = [
        ...new Set(state.cartItems.map((item) => item.username)),
      ];

      const newSelectedBrands = uniqueBrands.reduce((acc, brand) => {
        const brandProducts = state.cartItems.filter(
          (item) => item.username === brand
        );
        const brandProductIds = brandProducts.map((item) => item.productId);
        const allSelected = brandProductIds.every((productId) =>
          newSelectedProducts.includes(productId)
        );

        if (allSelected) {
          if (!acc.includes(brand)) acc.push(brand);
        } else {
          acc = acc.filter((b) => b !== brand);
        }

        return acc;
      }, []);

      state.selectedBrands = newSelectedBrands;

      // 총 가격과 총 수량 계산
      state.totalPrice = newSelectedProducts.reduce((total, productId) => {
        const item = state.cartItems.find(
          (item) => item.productId === productId
        );
        return total + (item ? item.price * item.amount : 0);
      }, 0);

      state.totalQuantity = newSelectedProducts.reduce((total, productId) => {
        const item = state.cartItems.find(
          (item) => item.productId === productId
        );
        return total + (item ? item.amount : 0);
      }, 0);
    },

    setCartItems: (state, action) => {
      // 새로 받은 cartItems로 상태 업데이트
      state.cartItems = action.payload;
    },

    removeSelectedItems: (state, action) => {
      const productId = action.payload; // 삭제할 제품 ID

      const newCartItems = productId
        ? state.cartItems.filter((item) => item.productId !== productId)
        : state.cartItems.filter(
            (item) => !state.selectedProducts.includes(item.productId)
          );

      state.cartItems = newCartItems;

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

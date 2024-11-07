import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "products",
  initialState: {
    categoryList: [
      {
        id: 1,
        label: "상의",
        control: "top",
      },
      {
        id: 2,
        label: "하의",
        control: "bottom",
      },
    ],
    categorySelected: null,
    categoryClicked: false,
    productName: "",
    price: 0,
    amount: 0,
    endDate: new Date().toISOString().split("T")[0],
    intro: "",
    files: [],
    fileTest: [],
  },
  reducers: {
    changeCategory(state, action) {
      const find = state.categoryList.find(
        (item) => item.id === action.payload
      );
      if (find) {
        state.categorySelected = { ...find };
      }
    },
    categoryClick(state) {
      state.categoryClicked = !state.categoryClicked;
    },
    categoryFalse(state) {
      state.categoryClicked = false;
    },
    getProductName(state, action) {
      state.productName = action.payload;
    },
    getPrice(state, action) {
      state.price = action.payload;
    },
    getAmount(state, action) {
      state.amount = action.payload;
    },
    getFilesNames(state, action) {
      state.files.push(action.payload);
    },
    getEndDate(state, action) {
      state.endDate = action.payload;
    },
    getIntro(state, action) {
      state.intro = action.payload;
    },
    getFileTest(state, action) {
      state.fileTest = action.payload;
    },
    deleteFiles(state, action) {
      const newState = state.files.filter(
        (file) => file.fileName !== action.payload
      );
      state.files = newState;
    },
  },
});

export default productSlice;

export const productActions = productSlice.actions;

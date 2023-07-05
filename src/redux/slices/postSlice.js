import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

const initialState = {
  preOrder: "",
  productName: "",
  manufacturer: "",
  releaseDate: "",
  limit: "",
  material: "",
  accessories: "",
  note: "",
  versionName: "",
  versionNote: "",
  versionLimit: "",
  ratio: "",
  height: "",
  width: "",
  depth: "",
  fprice: "",
  price: "",
  deposit: "",
  bankFull: "",
  link: "",
  versions: [],
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    resetForm: (state) => {
      state.preOrder = "";
      state.link = "";
      state.productName = "";
      state.manufacturer = "";
      state.releaseDate = "";
      state.limit = "";
      state.material = "";
      state.accessories = "";
      state.note = "";
      state.versionName = "";
      state.versionNote = "";
      state.versionLimit = "";
      state.ratio = "";
      state.height = "";
      state.width = "";
      state.depth = "";
      state.price = "";
      state.fprice = "";
      state.deposit = "";
      state.bankFull = "";
      state.versions = [];
    },
    setFormValue: (state, action) => {
      const { name, value } = action.payload;
      state[name] = value;
    },
    addNewVersion: (state) => {
      state.versions.push({
        id: uuid(),
        versionName: "",
        versionNote: "",
        versionLimit: "",
        ratio: "",
        height: "",
        width: "",
        depth: "",
        price: "",
        deposit: "",
        bankFull: "",
        accessories: "",
      });
    },
    setFormVersion: (state, action) => {
      const { name, value, id } = action.payload;
      const versionIndex = state.versions.findIndex((version) => version.id === id);
      if (versionIndex !== -1) {
        state.versions[versionIndex][name] = value;
      }
    },
    deleteVersion: (state, action) => {
      const id  = action.payload;
      state.versions = state.versions.filter((version) => version.id!== id);
    }
    
  },
});

export const { setFormValue, addNewVersion, setFormVersion, resetForm, deleteVersion} =
  postSlice.actions;
export const getPostData = (state) => state.postSlice;

export default postSlice.reducer;

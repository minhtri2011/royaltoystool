import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    productName: { label: "", name: "" },
    manufacturer: { label: "", name: "" },
    releaseDate: { label: "", name: "" },
    limit: { label: "", name: "" },
    material: { label: "", name: "" },
    accessories: { label: "", name: "" },
    note: { label: "", name: "" },
    ratio: { label: "", name: "" },
    height: { label: "", name: "" },
    width: { label: "", name: "" },
    depth: { label: "", name: "" },
    price: { label: "", name: "" },
    deposit: { label: "", name: "" },
    bankFull: { label: "", name: "" },
}

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {}
});

export const {} = postSlice.actions

export default postSlice.reducer
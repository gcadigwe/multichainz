import { createSlice } from "@reduxjs/toolkit";

interface walletInfoType {
  status: string;
  display: boolean;
  msg: string;
  title: string;
  hash: string;
}

const initialState: walletInfoType = {
  status: "",
  display: false,
  msg: "",
  title: "",
  hash: "",
};

const transactionSlice = createSlice({
  name: "transaction",
  initialState,
  reducers: {
    setModalDisplay(state, action) {
      state.display = action.payload.display;
      state.msg = action.payload.msg;
      state.status = action.payload.status;
      state.title = action.payload.title;
      state.hash = action.payload.hash;
    },
  },
});

export const { setModalDisplay } = transactionSlice.actions;

export default transactionSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  formData: {
    name: "",
    email: "",
    message: "",
  },
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    updateForm: (state, action) => {
      state.formData[action.payload.field] = action.payload.value;
    },
  },
});

export const { updateForm } = formSlice.actions;
export default formSlice.reducer;

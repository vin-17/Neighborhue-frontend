import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  user: {
    email: "",
    token: "",
    type:""
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    saveuser: (state, action) => {
      state.user = action.payload;
    },
    logout:(state,action)=>{
        state.user=initialState
    }
  },
});

export const { saveuser,logout } = userSlice.actions;

export default userSlice.reducer;

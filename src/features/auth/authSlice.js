import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//Get User from localStorage
const user = JSON.parse(localStorage.getItem("user"));

const initialState = {
  user: user ? user : null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

//Create new User



const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      state.isError = false;
      state.isSuccess = false;
      state.isLoading = false;
      state.message = "";
    },
    // setCredentials: (state, action) => {
    //   console.log(action.payload);
    //   const { user, access_token } = action.payload;
    //   state.user = user;
    //   state.token = access_token;
    // },
    // logOut: (state, action) => {
    //   state.user = null;
    //   state.token = null;
    // },
  },
  extraReducers: () => {},
});

export const { reset, setCredentials, logOut } = authSlice.actions;

export default authSlice.reducer;

// export const selectCurrentUser = (state) => state.auth.user;
// export const selectCurrentToken = (state) => state.auth.token;

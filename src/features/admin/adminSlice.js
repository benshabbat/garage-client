import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import userService from "./adminService";

const fetchState = {
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

const initialState = {
  users: [],
  cars: [],
  services: [],
  messages: [],
  fetchState,
};

export const getUsers = createAsyncThunk("user/getUsers", async (thunkAPI) => {
  try {
    return await userService.getUsers();
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

export const getServices = createAsyncThunk(
  "user/getServices",
  async (thunkAPI) => {
    try {
      return await userService.getServices();
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);
export const getCars = createAsyncThunk("user/getCars", async (thunkAPI) => {
  try {
    return await userService.getCars();
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

export const getMessages = createAsyncThunk(
  "user/getMessages",
  async (thunkAPI) => {
    try {
      return await userService.getMessages();
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const createCar = createAsyncThunk(
  "user/createCar",
  async (data, thunkAPI) => {
    try {
      return await userService.createCar(data);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, (state) => {
        state.fetchState.isLoading = true;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.fetchState.isLoading = false;
        state.fetchState.isSuccess = true;
        state.users = action.payload;
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.fetchState.isLoading = false;
        state.fetchState.isError = true;
        state.fetchState.message = action.payload;
        state.users = null;
      })
      .addCase(getServices.pending, (state) => {
        state.fetchState.isLoading = true;
      })
      .addCase(getServices.fulfilled, (state, action) => {
        state.fetchState.isLoading = false;
        state.fetchState.isSuccess = true;
        state.services = action.payload;
      })
      .addCase(getServices.rejected, (state, action) => {
        state.fetchState.isLoading = false;
        state.fetchState.isError = true;
        state.fetchState.message = action.payload;
        state.services = null;
      })
      .addCase(getCars.pending, (state) => {
        state.fetchState.isLoading = true;
      })
      .addCase(getCars.fulfilled, (state, action) => {
        state.fetchState.isLoading = false;
        state.fetchState.isSuccess = true;
        state.cars = action.payload;
      })
      .addCase(getCars.rejected, (state, action) => {
        state.fetchState.isLoading = false;
        state.fetchState.isError = true;
        state.fetchState.message = action.payload;
        state.services = null;
      })
      .addCase(getMessages.pending, (state) => {
        state.fetchState.isLoading = true;
      })
      .addCase(getMessages.fulfilled, (state, action) => {
        state.fetchState.isLoading = false;
        state.fetchState.isSuccess = true;
        state.messages = action.payload;
      })
      .addCase(getMessages.rejected, (state, action) => {
        state.fetchState.isLoading = false;
        state.fetchState.isError = true;
        state.fetchState.message = action.payload;
        state.messages = null;
      });
  },
});

export const { reset } = adminSlice.actions;

export default adminSlice.reducer;

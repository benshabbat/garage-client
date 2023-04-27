import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import adminService from "./adminService";

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
  fetchState,
};

export const getUsers = createAsyncThunk("admin/getUsers", async (thunkAPI) => {
  try {
    return await adminService.getUsers();
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

export const getServices = createAsyncThunk(
  "admin/getServices",
  async (thunkAPI) => {
    try {
      return await adminService.getServices();
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
export const getCars = createAsyncThunk("admin/getCars", async (thunkAPI) => {
  try {
    return await adminService.getCars();
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

// export const getMessages = createAsyncThunk(
//   "user/getMessages",
//   async (thunkAPI) => {
//     try {
//       return await userService.getMessages();
//     } catch (error) {
//       const message =
//         (error.response &&
//           error.response.data &&
//           error.response.data.message) ||
//         error.message ||
//         error.toString();
//       return thunkAPI.rejectWithValue(message);
//     }
//   }
// );

export const createCar = createAsyncThunk(
  "admin/createCar",
  async (data, thunkAPI) => {
    try {
      return await adminService.createCar(data);
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
      });
  },
});

export const { reset } = adminSlice.actions;

export default adminSlice.reducer;
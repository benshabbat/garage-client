import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import userService from "./userService";

const fetchState = {
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

const initialState = {
  user: { _id: "", cars: [] },
  //{...cars, ...services}
  services: [],
  messages: [],
  fetchState,
};

// get user by _id

export const getUser = createAsyncThunk(
  "user/getUser",
  async (id, thunkAPI) => {
    try {
      return await userService.getUser(id);
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

export const getServicesByIdCar = createAsyncThunk(
  "user/getServicesByIdCar",
  async (carId, thunkAPI) => {
    try {
      return await userService.getServicesByIdCar(carId);
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
export const getServicesByIdUser = createAsyncThunk(
  "user/getServicesByIdUser",
  async (userId, thunkAPI) => {
    try {
      return await userService.getServicesByIdUser(userId);
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
export const getMessagesByIdUser = createAsyncThunk(
  "user/getMessagesByIdUser",
  async (userId, thunkAPI) => {
    try {
      return await userService.getMessagesByIdUser(userId);
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


export const createReqService = createAsyncThunk(
  "user/createReqService",
  async (data, thunkAPI) => {
    try {
      return await userService.createReqService(data); 
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

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUser.pending, (state) => {
        state.fetchState.isLoading = true;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.fetchState.isLoading = false;
        state.fetchState.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(getUser.rejected, (state, action) => {
        state.fetchState.isLoading = false;
        state.fetchState.isError = true;
        state.fetchState.message = action.payload;
        state.user = null;
      })
      .addCase(getServicesByIdCar.pending, (state) => {
        state.fetchState.isLoading = true;
      })
      .addCase(getServicesByIdCar.fulfilled, (state, action) => {
        state.fetchState.isLoading = false;
        state.fetchState.isSuccess = true;
        state.services = action.payload;
      })
      .addCase(getServicesByIdCar.rejected, (state, action) => {
        state.fetchState.isLoading = false;
        state.fetchState.isError = true;
        state.fetchState.message = action.payload;
        state.services = null;
      })
      .addCase(getServicesByIdUser.pending, (state) => {
        state.fetchState.isLoading = true;
      })
      .addCase(getServicesByIdUser.fulfilled, (state, action) => {
        state.fetchState.isLoading = false;
        state.fetchState.isSuccess = true;
        state.services = action.payload;
      })
      .addCase(getServicesByIdUser.rejected, (state, action) => {
        state.fetchState.isLoading = false;
        state.fetchState.isError = true;
        state.fetchState.message = action.payload;
        state.services = null;
      })
      .addCase(createReqService.pending, (state) => {
        state.fetchState.isLoading = true;
      })
      .addCase(createReqService.fulfilled, (state, action) => {
        state.fetchState.isLoading = false;
        state.fetchState.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(createReqService.rejected, (state, action) => {
        state.fetchState.isLoading = false;
        state.fetchState.isError = true;
        state.fetchState.message = action.payload;
        state.user = null;
      })
      .addCase(getMessagesByIdUser.pending, (state) => {
        state.fetchState.isLoading = true;
      })
      .addCase(getMessagesByIdUser.fulfilled, (state, action) => {
        state.fetchState.isLoading = false;
        state.fetchState.isSuccess = true;
        state.messages = action.payload;
      })
      .addCase(getMessagesByIdUser.rejected, (state, action) => {
        state.fetchState.isLoading = false;
        state.fetchState.isError = true;
        state.fetchState.message = action.payload;
        state.messages = null;
      })
  },
});

export const { reset } = userSlice.actions;

export default userSlice.reducer;

import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const BASE_URL = "https://6506c4f63a38daf4803eae61.mockapi.io/adverts";

export const getAdverts = createAsyncThunk(
  'adverts/getAdverts',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get(BASE_URL);
      return res.data;
    } catch (error) {
      toast(error.response.data.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

import {createSlice} from '@reduxjs/toolkit';

const exampleSlice = createSlice({
  name: 'example',
  initialState: {
    message: 'example',
  },
  reducers: {},
});

export default exampleSlice.reducer;

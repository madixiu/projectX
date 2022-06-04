import {createSlice} from '@reduxjs/toolkit';

export const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    value: 'light',
  },
  reducers: {
    switchTheme: (state, action) => {
      state.value = action.payload
    }
  },
});

// ACTIONS export
export const {switchTheme} = themeSlice.actions;
export default themeSlice.reducer;
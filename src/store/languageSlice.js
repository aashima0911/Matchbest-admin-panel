// store/languageSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  code: "en",
  country: "United States",
  name: "English",
  flag: "🇺🇸"
};

const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    setLanguage: (state, action) => {
      console.log("Redux: Setting language with payload:", action.payload);
      const { code, country, name, flag } = action.payload;

      // Clear any existing properties to prevent state corruption
      Object.keys(state).forEach(key => {
        delete state[key];
      });

      // Set new language properties
      state.code = code ?? "en";
      state.country = country ?? "United States";
      state.name = name ?? "English";
      state.flag = flag ?? "🇺🇸";

      console.log("Redux: New clean language state:", state);
    }
  }
});

export const { setLanguage } = languageSlice.actions;
export default languageSlice.reducer;

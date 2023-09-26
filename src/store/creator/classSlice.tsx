import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface IClass {
    class: string
  }



const initialState: IClass = {
    class: ''
  }

  export const classSlice = createSlice({
    name: 'class',
    initialState,
    reducers: {
      setClass: (state, action: PayloadAction<string>) => {
        state.class = action.payload;
      },
    },
  });
  
  export const { setClass } = classSlice.actions;
  
  export default classSlice.reducer;
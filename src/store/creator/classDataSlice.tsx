import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface IClassData {
    id: number;
    name: string;
    hitPoints: number;
    classSkills: string[],
    classAbility: string[],
  }

const initialState: {
    Data: IClassData|null
} = {Data: null} 

  export const classSlice = createSlice({
    name: 'classData',
    initialState,
    reducers: {
      setClassData: (state, action: PayloadAction<IClassData>) => {
        state.Data = action.payload;
      },
    },
  });
  
  export const { setClassData } = classSlice.actions;
  
  export default classSlice.reducer;
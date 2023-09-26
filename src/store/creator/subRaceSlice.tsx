import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface ISubRace {
    subRace: string
  }



const initialState: ISubRace = {
    subRace: ''
  }

  export const subRaceSlice = createSlice({
    name: 'subRace',
    initialState,
    reducers: {
      setSubRace: (state, action: PayloadAction<string>) => {
        state.subRace = action.payload;
      },
    },
  });
  
  export const { setSubRace } = subRaceSlice.actions;
  
  export default subRaceSlice.reducer;
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface IRace {
    race: string
  }



const initialState: IRace = {
    race: ''
  }

  export const raceSlice = createSlice({
    name: 'race',
    initialState,
    reducers: {
      setRace: (state, action: PayloadAction<string>) => {
        state.race = action.payload;
      },
    },
  });
  
  export const { setRace } = raceSlice.actions;
  
  export default raceSlice.reducer;
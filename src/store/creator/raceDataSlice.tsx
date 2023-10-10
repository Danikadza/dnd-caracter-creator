import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface ISubRace {
    name: string
    raceSkills: {
        strength: number;
        dexterity: number;
        constitution: number;
        intelligence: number;
        wisdom: number;
        charisma: number;
    }
}

export interface IRaceData {
    id: number;
    name: string;
    description: string;
    raceSkills: {
        strength: number;
        dexterity: number;
        constitution: number;
        intelligence: number;
        wisdom: number;
        charisma: number;
    }
    subRace: Record<string, ISubRace>
  }

const initialState: {
    Data: IRaceData[]|null
} = {Data: null} 

  export const raceDataSlice = createSlice({
    name: 'raceData',
    initialState,
    reducers: {
      setRaceData: (state, action: PayloadAction<IRaceData[]>) => {
        state.Data = action.payload;
      },
    },
  });
  
  export const { setRaceData } = raceDataSlice.actions;
  
  export default raceDataSlice.reducer;
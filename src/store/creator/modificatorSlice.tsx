import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface IModificator {
    strength: number;
    dexterity: number;
    constitution: number;
    intelligence: number;
    wisdom: number;
    charisma: number;
  }

  export interface IModificatorItem {
    skill: keyof IModificator;
    modificator: number
  }

const initialState: IModificator = {
    strength: -1,
    dexterity: -1,
    constitution: -1,
    intelligence: -1,
    wisdom: -1,
    charisma: -1,
  }



export const modificatorSlice = createSlice({
name: 'modificator',
initialState,
reducers: {
    setModificator: (state, action: PayloadAction<IModificatorItem>) =>{
        const skillKey = action.payload.skill;
        state[skillKey]= action.payload.modificator
    },
}

})



export const {setModificator} = modificatorSlice.actions

export default modificatorSlice.reducer
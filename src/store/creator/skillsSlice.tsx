import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface ISkills {
    strength: number;
    dexterity: number;
    constitution: number;
    intelligence: number;
    wisdom: number;
    charisma: number;
}

const initialState: ISkills = {
    strength: 8,
    dexterity: 8,
    constitution: 8,
    intelligence: 8,
    wisdom: 8,
    charisma: 8,
}

export const skillSlice = createSlice({
    name: 'skills',
    initialState,
    reducers: {
        incrementSkill: (state, action: PayloadAction<keyof ISkills>) => {
            const skillKey = action.payload;
            if (state[skillKey] < 15) {
                state[skillKey] += 1;
            }

        },
        decrementSkill: (state, action: PayloadAction<keyof ISkills>) => {
            const skillKey = action.payload;
            if (state[skillKey] > 8) {
                state[skillKey] -= 1;
            }
        },

    }

})

export const { incrementSkill, decrementSkill } = skillSlice.actions

export default skillSlice.reducer
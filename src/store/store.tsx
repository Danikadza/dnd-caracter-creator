import { configureStore } from '@reduxjs/toolkit'
import skillReducer from './creator/skillsSlice'
import classReducer from './creator/classSlice'
import raceReducer from './creator/raceSlice'
import subRaceReducer from './creator/subRaceSlice'
import modifacatorReduser from './creator/modificatorSlice'
import raceDataReduser from './creator/raceDataSlice'
import classDataReduser from './creator/classDataSlice'

export const store = configureStore({
  reducer: {
    skills: skillReducer,
    class: classReducer,
    race: raceReducer,
    subRace: subRaceReducer,
    modificator: modifacatorReduser,
    raceData: raceDataReduser,
    classData: classDataReduser,
  },
  devTools: true,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
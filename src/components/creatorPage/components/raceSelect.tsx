import { useState } from "react";
import type { RootState } from '../../../store//store'
import { useSelector, useDispatch } from 'react-redux'
import { setRace } from '../../../store/creator/raceSlice'
import { setSubRace } from '../../../store/creator/subRaceSlice'

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

interface Data {
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

interface props {
    data: Data[] | null,
    selectRace: (name: string) => void;
    selectSubRace: (name: string) => void;
}

export default function RaceSelect({ data, selectRace, selectSubRace }: props) {

    const raceName = useSelector((state: RootState) => state.race)
    const subRaceName = useSelector((state: RootState) => state.subRace)
    const dispatch = useDispatch()
    
    function handleSelectRace(event: any) {
        dispatch(setRace(event.target.value))
        selectRace(event.target.value)
    }
    function handleSelectSubRace(event: any) {
        dispatch(setSubRace(event.target.value))
        selectSubRace(event.target.value)
    }

    const subRaces = () => {
        if (data === null) {
            return null
        }
        const raceData = data.find(item => item.name === raceName.race)
        if (!raceData || !raceData.subRace) {
            return null
        }
        return Object.values(raceData.subRace)
    }

    if (data === null) {
        return (
            <div>Загрузка...</div>
        )
    }
    return (
        <div className='raceSelect'>
            Выберите расу
            <div>
                <select onChange={handleSelectRace}>
                    <option></option>
                    {data.map((race) =>
                        <option>{race.name}</option>
                    )}
                </select>
            </div>
            {subRaces() ? (
            <div>
                <select onChange={handleSelectSubRace}>
                    <option></option>
                    {subRaces()?.map((raceItem) =>
                        <option>{raceItem.name}</option>
                    )}
                </select>
            </div>) : (
                <div/>
            )
            }
        </div>
    )
}
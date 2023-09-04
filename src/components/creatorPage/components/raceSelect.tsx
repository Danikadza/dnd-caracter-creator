import { useState } from "react";

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

    const [race, setRace] = useState('')
    const [subRace, setSubRace] = useState('')


    function handleSelectRace(event: any) {
        setRace(event.target.value)
        selectRace(event.target.value)
    }
    function handleSelectSubRace(event: any) {
        setSubRace(event.target.value)
        selectSubRace(event.target.value)
    }

    const subRaces = () => {
        if (data === null) {
            return null
        }
        const raceData = data.find(item => item.name === race)
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
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

    const [id, setId] = useState(1)
    const [race, setRace] = useState('dwarf')
    const [subRace, setSubRace] = useState('')


    function handleSelectRace(event: any) {
        setRace(event.target.race)
        selectRace(event.target.race)
        setId(event.target.id)
    }
    function handleSelectSubRace(event: any) {
        setSubRace(event.target.raceItem)
        selectSubRace(event.target.raceItem)
    }

    const subRaces = () => {
        if (data === null) {
            return null
        }
        const raceData = data.find(item => item.name === race)
        if (raceData === undefined) {
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
                    {data.map((race) =>
                        <option>{race.name}</option>
                    )}
                </select>
                <div>{race}</div>
            </div>
            Выберите подрасу
            {subRaces() ? (<div>
                <select onChange={handleSelectSubRace}>
                    {subRaces()?.map((raceItem) =>
                        <option>{raceItem.name}</option>
                    )}
                </select>
                <div>{subRace}</div>
            </div>) : (

                <p>Подрас нет</p>

            )
            }
        </div>
    )
}
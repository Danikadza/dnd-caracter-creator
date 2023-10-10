import type { RootState } from '../../../store//store'
import { useSelector, useDispatch } from 'react-redux'
import { setRace } from '../../../store/creator/raceSlice'
import { setSubRace } from '../../../store/creator/subRaceSlice'
import '../style/raceSelect.css'

export default function RaceSelect() {

    const raseData = useSelector((state: RootState) => state.raceData).Data
    const raceName = useSelector((state: RootState) => state.race)
    const dispatch = useDispatch()

    function handleSelectRace(event: any) {
        dispatch(setRace(event.target.value))
    }
    function handleSelectSubRace(event: any) {
        dispatch(setSubRace(event.target.value))
    }

    const subRaces = () => {
        if (raseData === null) {
            return null
        }
        const selectedRaceData = raseData.find(item => item.name === raceName.race)
        if (!selectedRaceData || !selectedRaceData.subRace) {
            return null
        }
        return Object.values(selectedRaceData.subRace)
    }

    if (raseData === null) {
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
                    {raseData.map((race) =>
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
                <div />
            )
            }
        </div>
    )
}
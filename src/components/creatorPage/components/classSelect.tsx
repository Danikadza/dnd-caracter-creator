import type { RootState } from '../../../store//store'
import { useSelector, useDispatch } from 'react-redux'
import { setClass } from '../../../store/creator/classSlice'

export default function ClassSelect() {
    
    const classData = useSelector((state: RootState) => state.classData).Data
    const dispatch = useDispatch()


    function handleSelectClass(event: any) {
        dispatch(setClass(event.target.value))
    }

    if (classData === null) {
        return (
            <div>Загрузка...</div>
        )
    }
    return (
        <div className='classSelect'>
             Выберите класс
            <div>
            <select onChange={handleSelectClass}>
                    <option></option>
                    {classData.map((className) =>
                        <option>{className.name}</option>
                    )}
                </select>
            </div>
        </div>
    )
}
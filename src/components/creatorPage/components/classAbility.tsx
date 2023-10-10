import type { RootState } from '../../../store//store'
import { useSelector } from 'react-redux'
import '../style/classAbility.css'

export default function ClassAbility() {

    const className = useSelector((state: RootState) => state.class).class
    const classData = useSelector((state: RootState) => state.classData).Data

    

    const  classAbility = () => {
        if (classData === null) {
            return null
        }
        const usedClass = classData.find(item => item.name === className)
        if (!usedClass || !usedClass.classAbility) {
            return null
        }
        return Object.values(usedClass.classAbility)
    }

    if (classData === null) {
        return (
            <div>Загрузка...</div>
        )
    }

    return (
        <div>
           <div>Классовые умения:</div>
           <div className='classAbility'>
           {
                classAbility()?.map((classAbilityItem) =>
                    <>
                        <label className='classAbility__item'>{classAbilityItem}</label>
                    </>
                )
            }
            </div>
        </div>
    )
}
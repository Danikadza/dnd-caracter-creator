import { useState } from "react";

interface IClassData {
    id: number;
    name: string;
    hitPoints: number;
    classSkills: string[],
    classAbility: string[],
  }

  interface props {
    classData: IClassData[] | null,
    selectClass: (name: string) => void;
}

export default function ClassSelect({ classData, selectClass }: props) {

    const [className, setClass] = useState('')

    function handleSelectClass(event: any) {
        setClass(event.target.value)
        selectClass(event.target.value)
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
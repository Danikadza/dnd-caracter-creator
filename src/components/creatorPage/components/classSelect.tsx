import { useState } from "react";
import type { RootState } from '../../../store//store'
import { useSelector, useDispatch } from 'react-redux'
import { setClass } from '../../../store/creator/classSlice'

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
    
    const className = useSelector((state: RootState) => state.class)
    const dispatch = useDispatch()


    function handleSelectClass(event: any) {
        selectClass(event.target.value)
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
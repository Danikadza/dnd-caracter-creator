import '../style/statsButton.css'
import {useEffect } from 'react';
import type { RootState } from '../../../store//store'
import { useSelector, useDispatch } from 'react-redux'
import { decrementSkill, incrementSkill } from '../../../store/creator/skillsSlice'
import { setModificator } from '../../../store/creator/modificatorSlice'



interface Skills {
    strength: number;
    dexterity: number;
    constitution: number;
    intelligence: number;
    wisdom: number;
    charisma: number;
  }

interface props {
    name: keyof Skills;

    raceStat: number,
    subRaceStat: number,
    onChange: (name: keyof Skills, updatedValue: number) => void;
    modificator: (name: keyof Skills, value: number) => void
}

export default function StatsButton({name ,raceStat,subRaceStat, onChange, modificator}:props) {
    const count = useSelector((state: RootState) => state.skills)
    const mod = useSelector((state: RootState) => state.modificator)
    const dispatch = useDispatch()

    var m = Math.ceil(((count[name] + raceStat + subRaceStat)- 10 )/ 2)

    let modificatorItem = {
        skill: name,
        modificator: m
    }

    useEffect(() => {
        dispatch(setModificator(modificatorItem))
        modificator(name, m)
      }, [m]);

    return (
        <div className='statsButton'>
            <div className='statsButton__name'>{name}</div>
            <div className='statsButton__images'>
                <img className='statsButton__img' src='../images/minus.svg' alt='minus' onClick={() => dispatch(decrementSkill(name)) }/>
                <img className='statsButton__img' src='../images/plus.svg' alt='plus' onClick={() => dispatch(incrementSkill(name)) }/>
            </div>
            <div className='statsButton__counter'>{count[name] + raceStat + subRaceStat}</div>
            Модификатор 
            <div className='statsButton__mod'>{m}</div>
        </div>  
    )
}
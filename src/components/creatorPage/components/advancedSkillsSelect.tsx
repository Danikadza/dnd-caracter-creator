import { useState, useEffect } from 'react'
import type { RootState } from '../../../store//store'
import { useSelector, useDispatch } from 'react-redux'
import { toggleChecked } from '../../../store/creator/advancedSkillsSlice'
import '../style/advancedSkillsSelect.css'

export default function AdvancedSkillsSelect() {

    const classData = useSelector((state: RootState) => state.classData).Data
    const className = useSelector((state: RootState) => state.class).class

    const dispatch = useDispatch()
    
    const [selectedSkills, setSelectedSkills] = useState<string[]>([]);

    const advansedClassSkills = () => {
        if (classData === null) {
            return null
        }
        const usedClass = classData.find(item => item.name === className)
        if (!usedClass || !usedClass.classSkills) {
            return null
        }
        return Object.values(usedClass.classSkills)
    }

    const advansedSkillsCount = () => {
        if (classData === null || classData === undefined) {
          return null;
        }
        const usedClass = classData.find((item) => item.name === className);
        if (!usedClass || !usedClass.classSkillsCount) {
          return null;
        }
        return usedClass.classSkillsCount;
      };

    const handleSelectedSkill = (event: React.ChangeEvent<HTMLInputElement>) => {
        const name = event.target.name;
        const isChecked = event.target.checked;
        dispatch(toggleChecked(name));
        if (isChecked) {
            setSelectedSkills((prevState) => [...prevState, name]);
          } else {
            setSelectedSkills((prevState) =>
              prevState.filter((checkbox) => checkbox !== name)
            );
          }
    }

      useEffect(() => {
        
      }, [className]);


    if (classData === null) {
        return (
            <div>Загрузка...</div>
        )
    }

    const skillsCount = advansedSkillsCount()

    if (skillsCount === null) {
        return (
            <div>Загрузка...</div>
        )
    }

    return (
        <div className='skillsSelect'>
            {
                advansedClassSkills()?.map((classSkills) =>
                    <>
                        <input type="checkbox" name={classSkills} id={classSkills} onChange={handleSelectedSkill} disabled={ selectedSkills.length >= skillsCount && !selectedSkills.includes(classSkills)}></input>
                        <label htmlFor={classSkills}>{classSkills}</label>
                    </>
                )
            }
        </div>
    )
}
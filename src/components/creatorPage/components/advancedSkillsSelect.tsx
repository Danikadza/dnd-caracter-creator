import { useState, useEffect } from 'react'

interface IClassData {
    id: number;
    name: string;
    hitPoints: number;
    classSkillsCount: number,
    classSkills: string[],
    classAbility: string[],
}

interface props {
    className: string,
    classData: IClassData[] | null,
    selectedAdvansedSkills: (name:string[]) => void
}



export default function AdvancedSkillsSelect({ className, classData, selectedAdvansedSkills }: props) {
    
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
        if (isChecked) {
            setSelectedSkills((prevState) => [...prevState, name]);
          } else {
            setSelectedSkills((prevState) =>
              prevState.filter((checkbox) => checkbox !== name)
            );
          }
    }
    useEffect(() => {
        selectedAdvansedSkills(selectedSkills)
      }, [selectedSkills]);


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
        <div>
            {
                advansedClassSkills()?.map((classSkills) =>
                    <>
                        <input type="checkbox" name={classSkills} id={classSkills} onChange={handleSelectedSkill} disabled={ selectedSkills.length >= skillsCount && !selectedSkills.includes(classSkills)}></input>
                        <label htmlFor={classSkills}>{classSkills}</label>
                    </>
                )
            }
            <p>Selected skills: {selectedSkills.join(', ')}</p>
        </div>
    )
}
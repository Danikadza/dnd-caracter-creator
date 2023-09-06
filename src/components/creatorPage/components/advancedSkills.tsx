
interface IClassData {
    id: number;
    name: string;
    hitPoints: number;
    classSkills: string[],
    classAbility: string[],
}

interface props {
    className: string,
    classData: IClassData[] | null,
}



export default function AdvancedSkills({ className, classData }: props) {

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

    if (classData === null) {
        return (
            <div>Загрузка...</div>
        )
    }

    return (
        <div>
            {
                advansedClassSkills()?.map((classSkills) =>
                    <>
                        <input type="checkbox" name={classSkills} id={classSkills}></input>
                        <label htmlFor={classSkills}>{classSkills}</label>
                    </>
                )
            }
        </div>
    )
}
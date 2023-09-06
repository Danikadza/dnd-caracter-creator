
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



export default function ClassAbility({ className, classData }: props) {

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
           <div>
           {
                classAbility()?.map((classAbilityItem) =>
                    <>
                        <label >{classAbilityItem}</label>
                    </>
                )
            }
            </div>
        </div>
    )
}
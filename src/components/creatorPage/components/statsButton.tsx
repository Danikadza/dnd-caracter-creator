import '../style/statsButton.css'

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
    counter: number;
    raceStat: number,
    subRaceStat: number,
    onChange: (name: keyof Skills, updatedValue: number) => void;
}

export default function StatsButton({name, counter,raceStat,subRaceStat, onChange}:props) {
    const handleInc = () => {
        if(counter<15){
        onChange(name, counter + 1) 
        }
    }

    const handleDec = () => {
        if(counter>8){
            onChange(name, counter - 1)
        }
    }

    var mod = Math.ceil(((counter + raceStat + subRaceStat)- 10 )/ 2)

    return (
        <div className='statsButton'>
            <div className='statsButton__name'>{name}</div>
            <div className='statsButton__images'>
                <img className='statsButton__img' src='../images/minus.svg' alt='minus' onClick={handleDec}/>
                <img className='statsButton__img' src='../images/plus.svg' alt='plus' onClick={handleInc}/>
            </div>
            <div className='statsButton__counter'>{counter + raceStat + subRaceStat}</div>
            Модификатор {subRaceStat}
            <div className='statsButton__mod'>{mod}</div>
        </div>
    )
}
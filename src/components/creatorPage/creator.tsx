import Navigation from '../navigation/navigation'
import StatsCalculator from './components/statsCalculator'
import RaceSelect from './components/raceSelect'
import ClassSelect from './components/classSelect'
import NameInput from './components/nameInput'
import { useState, useEffect } from 'react'
import AdvancedSkillsSelect from './components/advancedSkillsSelect'
import ClassAbility from './components/classAbility'
import AdvancedSkills from './components/advansedSkills'
import type { RootState } from '../../store//store'
import { useSelector, useDispatch } from 'react-redux'
import { setRaceData } from '../../store/creator/raceDataSlice'
import { setClassData } from '../../store/creator/classDataSlice'

interface ISubRace {
  name: string
  raceSkills: {
    strength: number;
    dexterity: number;
    constitution: number;
    intelligence: number;
    wisdom: number;
    charisma: number;
  }
}

interface IModificators {
  strength: number;
  dexterity: number;
  constitution: number;
  intelligence: number;
  wisdom: number;
  charisma: number;
}

interface Data {
  id: number;
  name: string;
  description: string;
  raceSkills: {
    strength: number;
    dexterity: number;
    constitution: number;
    intelligence: number;
    wisdom: number;
    charisma: number;
  }
  subRace: Record<string, ISubRace>
}

interface IClassData {
  id: number;
  name: string;
  hitPoints: number;
  classSkillsCount: number,
  classSkills: string[],
  classAbility: string[],
}

interface Skills {
  strength: number;
  dexterity: number;
  constitution: number;
  intelligence: number;
  wisdom: number;
  charisma: number;
}


export default function Creator() {

  const raceData = useSelector((state: RootState) => state.raceData)
  const classData = useSelector((state: RootState) => state.classData)
  const dispatch = useDispatch()


  const [data, setData] = useState<Data[] | null>(null);
  const [classData1, setClassData1] = useState<IClassData[] | null>(null);
  const [race, setRace] = useState('');
  const [subRace, setSubRace] = useState('');
  const [className, setClass] = useState('');
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [modificators, setModificator] = useState<IModificators>({
    strength: 0,
    dexterity: 0,
    constitution: 0,
    intelligence: 0,
    wisdom: 0,
    charisma: 0,
  });



  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:2000/info/race');
        const jsonData = await response.json();
        dispatch(setRaceData(jsonData))
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:2000/info/class');
        const jsonData = await response.json();
        dispatch(setClassData(jsonData))
        setClassData1(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const selectedRace = (name: string) => {
    setRace(name)
  }
  const selectedSubRace = (name: string) => {
    setSubRace(name)
  }

  const selectedClass = (name: string) => {
    setClass(name)
  }

  const selectedAdvansedSkills = (name: string[]) => {
    setSelectedSkills(name)
  }

  const modificatorHandler = (modificators: IModificators) => {
    setModificator(modificators)
  }

  return (
    <>
      <Navigation />
      <div className='creator'>
        <NameInput />
        <RaceSelect selectSubRace={selectedSubRace} selectRace={selectedRace} data={data} />
        <StatsCalculator data={data} race={race} subRace={subRace} modificator={modificatorHandler} />
        <ClassSelect classData={classData1} selectClass={selectedClass} />
        <AdvancedSkillsSelect classData={classData1} className={className} selectedAdvansedSkills={selectedAdvansedSkills} />
        <ClassAbility classData={classData1} className={className} />
        <AdvancedSkills selectedAdvancedSkills={selectedSkills} modificators={modificators} />
      </div>

    </>
  )
}
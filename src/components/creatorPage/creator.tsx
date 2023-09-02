import Navigation from '../navigation/navigation'
import StatsCalculator from './components/statsCalculator'
import RaceSelect from './components/raceSelect'
import ClassSelect from './components/classSelect'
import NameInput from './components/nameInput'
import { useState, useEffect } from 'react'

interface ISubRace {
  name:string
  raceSkills: {
    strength: number;
    dexterity: number;
    constitution: number;
    intelligence: number;
    wisdom: number;
    charisma: number;
  }
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


export default function Creator() {

  const [data, setData] = useState<Data[] | null>(null);
  const [race, setRace] = useState('');
  const [subRace, setSubRace] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:2000/info/race');
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const selectedRace = (name: string) => {
    setRace(name)
  }
  const selectedSubRace = (name: string) =>{
    setSubRace(name)
  }


  return (
    <>
      <Navigation />
      <div className='creator'>
        <NameInput />
        <RaceSelect selectSubRace={selectedSubRace} selectRace={selectedRace} data={data}/>
        <StatsCalculator data={data} race={race}/>
        <ClassSelect />
      </div>
    </>
  )
}
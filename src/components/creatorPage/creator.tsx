import Navigation from '../navigation/navigation'
import StatsCalculator from './components/statsCalculator'
import RaceSelect from './components/raceSelect'
import ClassSelect from './components/classSelect'
import NameInput from './components/nameInput'
import { useEffect } from 'react'
import AdvancedSkillsSelect from './components/advancedSkillsSelect'
import ClassAbility from './components/classAbility'
import AdvancedSkills from './components/advansedSkills'
import { useDispatch } from 'react-redux'
import { setRaceData } from '../../store/creator/raceDataSlice'
import { setClassData } from '../../store/creator/classDataSlice'

export default function Creator() {

  const dispatch = useDispatch()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:2000/info/race');
        const jsonData = await response.json();
        dispatch(setRaceData(jsonData))
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
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);


  return (
    <>
      <Navigation />
      <div className='creator'>
        <NameInput />
        <RaceSelect />
        <StatsCalculator />
        <ClassSelect />
        <AdvancedSkillsSelect />
        <ClassAbility />
        <AdvancedSkills />
      </div>

    </>
  )
}
import { useState, useEffect } from "react"
import StatsButton from "./statsButton"
import { useMemo } from 'react';

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

interface Skills {
  strength: number;
  dexterity: number;
  constitution: number;
  intelligence: number;
  wisdom: number;
  charisma: number;
}

interface IModificators {
  strength: number;
  dexterity: number;
  constitution: number;
  intelligence: number;
  wisdom: number;
  charisma: number;
}

interface props {
  race:string,
  data: Data[] | null,
  subRace:string,
  modificator: (modificatorsName: IModificators) => void,
}

export default function StatsCalculator({race, subRace, data, modificator}:props) {
 

  const [skillPoints, setSkillPoints] = useState(27)

  const [skills, setSkills] = useState<Skills>({
    strength: 8,
    dexterity: 8,
    constitution: 8,
    intelligence: 8,
    wisdom: 8,
    charisma: 8,
  });

  const [modificators, setModificator] = useState<IModificators>({
    strength: 0,
    dexterity: 0,
    constitution: 0,
    intelligence: 0,
    wisdom: 0,
    charisma: 0,
  });

  
  const handleSkillChange = (skill: keyof Skills, updatedValue: number) => {
    var difference = (updatedValue - skills[skill]);
    if ((updatedValue >= 14 && (updatedValue - skills[skill]) > 0)){
      difference = 2
    }
    else if (updatedValue >=13  && (updatedValue - skills[skill]) < 0){
      difference = -2
    }
    const newSkillPoints = skillPoints - difference 

    if (newSkillPoints >= 0){
      setSkillPoints(newSkillPoints)
      setSkills({...skills, [skill]: updatedValue})
    }
  }

  const modificatorHandler = (skill: keyof Skills, modificator: number) => {
    setModificator({...modificators, [skill]:modificator})
  }

  useEffect(() => {
    
    modificator(modificators)
  }, [modificators]);

  var raceId = 0
  if (data != null){
  var raceObj = data.find(item => item.name === race)
  if (raceObj !== undefined){
   raceId = raceObj.id - 1
  } 
  }


const subRaces = useMemo(
  () => {
    if (data === null) {
        return null
    }
    const subRaceData = data.find(item => item.name === race)
    if (!subRaceData || !subRaceData.subRace) {
        return null
    }
    const subRaceData1 = Object.values(subRaceData.subRace).find(item => item.name === subRace)
    if (subRaceData1=== undefined) {
      return null
  }
    return subRaceData1.raceSkills
},
  [subRace,data,race]
);



  return (
      <div>
        <div>Очки навыков: {skillPoints}</div>
        <StatsButton raceStat={data ? data[raceId].raceSkills.strength : 0} subRaceStat={subRaces ? subRaces.strength : 0}  name="strength" onChange={handleSkillChange} modificator={modificatorHandler}/>
        <StatsButton raceStat={data ? data[raceId].raceSkills.dexterity: 0} subRaceStat={subRaces ? subRaces.dexterity : 0} name="dexterity" onChange={handleSkillChange} modificator={modificatorHandler}/>
        <StatsButton raceStat={data ? data[raceId].raceSkills.constitution: 0} subRaceStat={subRaces ? subRaces.constitution : 0}  name="constitution" onChange={handleSkillChange} modificator={modificatorHandler}/>
        <StatsButton raceStat={data ? data[raceId].raceSkills.intelligence: 0} subRaceStat={subRaces ? subRaces.intelligence : 0}  name="intelligence" onChange={handleSkillChange} modificator={modificatorHandler}/>
        <StatsButton raceStat={data ? data[raceId].raceSkills.wisdom: 0} subRaceStat={subRaces ? subRaces.wisdom : 0}  name="wisdom" onChange={handleSkillChange} modificator={modificatorHandler}/>
        <StatsButton raceStat={data ? data[raceId].raceSkills.charisma: 0} subRaceStat={subRaces ? subRaces.charisma : 0}  name="charisma" onChange={handleSkillChange} modificator={modificatorHandler}/>
      </div>
  )
}
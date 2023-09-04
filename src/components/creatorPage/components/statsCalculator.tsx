import { useState } from "react"
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

interface props {
  race:string,
  data: Data[] | null,
  subRace:string
}

export default function StatsCalculator({race, subRace, data}:props) {
 

  const [skillPoints, setSkillPoints] = useState(27)

  const [skills, setSkills] = useState<Skills>({
    strength: 8,
    dexterity: 8,
    constitution: 8,
    intelligence: 8,
    wisdom: 8,
    charisma: 8,
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
    if (subRaceData === undefined) {
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
        <StatsButton raceStat={data ? data[raceId].raceSkills.strength : 0} subRaceStat={subRaces ? subRaces.strength : 0} counter={skills.strength} name="strength" onChange={handleSkillChange}/>
        <StatsButton raceStat={data ? data[raceId].raceSkills.dexterity: 0} subRaceStat={subRaces ? subRaces.dexterity : 0} counter={skills.dexterity} name="dexterity" onChange={handleSkillChange}/>
        <StatsButton raceStat={data ? data[raceId].raceSkills.constitution: 0} subRaceStat={subRaces ? subRaces.constitution : 0} counter={skills.constitution} name="constitution" onChange={handleSkillChange}/>
        <StatsButton raceStat={data ? data[raceId].raceSkills.intelligence: 0} subRaceStat={subRaces ? subRaces.intelligence : 0} counter={skills.intelligence} name="intelligence" onChange={handleSkillChange}/>
        <StatsButton raceStat={data ? data[raceId].raceSkills.wisdom: 0} subRaceStat={subRaces ? subRaces.wisdom : 0} counter={skills.wisdom} name="wisdom" onChange={handleSkillChange}/>
        <StatsButton raceStat={data ? data[raceId].raceSkills.charisma: 0} subRaceStat={subRaces ? subRaces.charisma : 0} counter={skills.charisma} name="charisma" onChange={handleSkillChange}/>
        <div>
        {data ? 
            <li>{data[raceId].raceSkills.dexterity}</li>
          : (
            <p>Loading data...</p>
          )}
        </div>
       <div>{subRaces?.strength}</div>
      </div>
  )
}
import { useState } from "react"
import StatsButton from "./statsButton"

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
  race:string
  data: Data[] | null,
}

export default function StatsCalculator({race, data}:props) {
 

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

  return (
      <div>
        <div>{race}</div>
        <div>Очки навыков: {skillPoints}</div>
        <StatsButton raceStat={data ? data[raceId].raceSkills.strength : 0} counter={skills.strength} name="strength" onChange={handleSkillChange}/>
        <StatsButton raceStat={data ? data[raceId].raceSkills.dexterity: 0} counter={skills.dexterity} name="dexterity" onChange={handleSkillChange}/>
        <StatsButton raceStat={data ? data[raceId].raceSkills.constitution: 0} counter={skills.constitution} name="constitution" onChange={handleSkillChange}/>
        <StatsButton raceStat={data ? data[raceId].raceSkills.intelligence: 0} counter={skills.intelligence} name="intelligence" onChange={handleSkillChange}/>
        <StatsButton raceStat={data ? data[raceId].raceSkills.wisdom: 0} counter={skills.wisdom} name="wisdom" onChange={handleSkillChange}/>
        <StatsButton raceStat={data ? data[raceId].raceSkills.charisma: 0} counter={skills.charisma} name="charisma" onChange={handleSkillChange}/>
        <div>
        {data ? 
            <li>{data[raceId].raceSkills.dexterity}</li>
          : (
            <p>Loading data...</p>
          )}
        </div>
       
      </div>
  )
}
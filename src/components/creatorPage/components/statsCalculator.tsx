import { useState } from "react"
import StatsButton from "./statsButton"
import { useMemo } from 'react';
import type { RootState } from '../../../store//store'
import { useSelector } from 'react-redux'

interface Skills {
  strength: number;
  dexterity: number;
  constitution: number;
  intelligence: number;
  wisdom: number;
  charisma: number;
}

export default function StatsCalculator() {

  const raceName = useSelector((state: RootState) => state.race).race
  const subRaceName = useSelector((state: RootState) => state.subRace).subRace
  const raceData = useSelector((state: RootState) => state.raceData).Data


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
    if ((updatedValue >= 14 && (updatedValue - skills[skill]) > 0)) {
      difference = 2
    }
    else if (updatedValue >= 13 && (updatedValue - skills[skill]) < 0) {
      difference = -2
    }
    const newSkillPoints = skillPoints - difference

    if (newSkillPoints >= 0) {
      setSkillPoints(newSkillPoints)
      setSkills({ ...skills, [skill]: updatedValue })
    }
  }

  var raceId = 0
  if (raceData != null) {
    var raceObj = raceData.find(item => item.name === raceName)
    if (raceObj !== undefined) {
      raceId = raceObj.id - 1
    }
  }



  const subRaces = useMemo(
    () => {
      if (raceData === null) {
        return null
      }
      const subRaceData = raceData.find(item => item.name === raceName)
      if (!subRaceData || !subRaceData.subRace) {
        return null
      }
      const subRaceData1 = Object.values(subRaceData.subRace).find(item => item.name === subRaceName)
      if (subRaceData1 === undefined) {
        return null
      }
      return subRaceData1.raceSkills
    },
    [subRaceName, raceData, raceName]
  );



  return (
    <div>
      <div>Очки навыков: {skillPoints}</div>
      <StatsButton raceStat={raceData ? raceData[raceId].raceSkills.strength : 0} subRaceStat={subRaces ? subRaces.strength : 0} name="strength" onChange={handleSkillChange} />
      <StatsButton raceStat={raceData ? raceData[raceId].raceSkills.dexterity : 0} subRaceStat={subRaces ? subRaces.dexterity : 0} name="dexterity" onChange={handleSkillChange} />
      <StatsButton raceStat={raceData ? raceData[raceId].raceSkills.constitution : 0} subRaceStat={subRaces ? subRaces.constitution : 0} name="constitution" onChange={handleSkillChange} />
      <StatsButton raceStat={raceData ? raceData[raceId].raceSkills.intelligence : 0} subRaceStat={subRaces ? subRaces.intelligence : 0} name="intelligence" onChange={handleSkillChange} />
      <StatsButton raceStat={raceData ? raceData[raceId].raceSkills.wisdom : 0} subRaceStat={subRaces ? subRaces.wisdom : 0} name="wisdom" onChange={handleSkillChange} />
      <StatsButton raceStat={raceData ? raceData[raceId].raceSkills.charisma : 0} subRaceStat={subRaces ? subRaces.charisma : 0} name="charisma" onChange={handleSkillChange} />
    </div>
  )
}
import { useState, useEffect } from 'react';

interface AdvancedSkill {
    name: string;
    advancedSkillCount: number;
    mainSkill: string
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
    selectedAdvancedSkills: string[],
    modificators: IModificators
}

export default function AdvancedSkills({selectedAdvancedSkills, modificators}:props) {
    const [advancedSkills, setAdvancedSkills] = useState<AdvancedSkill[]>(
        [
            {
                name: 'Атлетика',
                advancedSkillCount: -1,
                mainSkill: 'strength'
            },
            {
                name: 'Акробатика',
                advancedSkillCount: -1,
                mainSkill: 'dexterity'
            },
            {
                name: 'Анализ',
                advancedSkillCount: -1,
                mainSkill: 'intelligence'
            },
            {
                name: 'Внимательность',
                advancedSkillCount: -1,
                mainSkill: 'wisdom'
            },
            {
                name: 'Выживание',
                advancedSkillCount: -1,
                mainSkill: 'wisdom'
            },
            {
                name: 'Выступление',
                advancedSkillCount: -1,
                mainSkill: 'charisma'
            },
            {
                name: 'Запугивание',
                advancedSkillCount: -1,
                mainSkill: 'charisma'
            },
            {
                name: 'История',
                advancedSkillCount: -1,
                mainSkill: 'intelligence'
            },
            {
                name: 'Магия',
                advancedSkillCount: -1,
                mainSkill: 'intelligence'
            },
            {
                name: 'Медицина',
                advancedSkillCount: -1,
                mainSkill: 'wisdom'
            },
            {
                name: 'Ловкость рук',
                advancedSkillCount: -1,
                mainSkill: 'dexterity'
            },
            {
                name: 'Природа',
                advancedSkillCount: -1,
                mainSkill: 'intelligence'
            },
            {
                name: 'Проницательность',
                advancedSkillCount: -1,
                mainSkill: 'wisdom'
            },
            {
                name: 'Религия',
                advancedSkillCount: -1,
                mainSkill: 'intelligence'
            },
            {
                name: 'Скрытность',
                advancedSkillCount: -1,
                mainSkill: 'dexterity'
            },
            {
                name: 'Убеждение',
                advancedSkillCount: -1,
                mainSkill: 'charisma'
            },
            {
                name: 'Уход за животными',
                advancedSkillCount: -1,
                mainSkill: 'wisdom'
            },
        ]);

        useEffect(() => {
            const updatedSkills = advancedSkills.map((skill) => {
                const usedMod = Object.entries(modificators).find(([modificatorKey]) => modificatorKey == skill.mainSkill)
                if (usedMod) {
                  return { ...skill, advancedSkillCount: usedMod[1]};
                } else {
                  return skill
                }
                
              });
              setAdvancedSkills(updatedSkills);
          }, [modificators]);

        useEffect(() => {
            const updatedSkills = advancedSkills.map((skill) => {
              if (selectedAdvancedSkills.includes(skill.name)) {
                return { ...skill, advancedSkillCount: skill.advancedSkillCount + 2 };
              } else {
                return { ...skill, advancedSkillCount: skill.advancedSkillCount - 2 };
              }
            });
            setAdvancedSkills(updatedSkills);
          }, [selectedAdvancedSkills]);
        
        

          return (
            <div>
              {advancedSkills.map((advancedSkill) => (
                <div>
                  <label>{advancedSkill.name}</label>
                  <label>{advancedSkill.advancedSkillCount}</label>
                </div>
              ))}
            </div>
          );
        
}
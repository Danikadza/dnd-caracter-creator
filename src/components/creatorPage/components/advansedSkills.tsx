import { useState, useEffect } from 'react';

interface props {
    selectedAdvancedSkills: string[]
}

interface AdvancedSkill {
    name: string;
    advancedSkillCount: number;
  }

export default function AdvancedSkills({selectedAdvancedSkills}:props) {
    const [advancedSkills, setAdvancedSkills] = useState<AdvancedSkill[]>(
        [
            {
                name: 'Атлетика',
                advancedSkillCount: 0
            },
            {
                name: 'Акробатика',
                advancedSkillCount: 0
            },
            {
                name: 'Анализ',
                advancedSkillCount: 0
            },
            {
                name: 'Внимательность',
                advancedSkillCount: 0
            },
            {
                name: 'Выживание',
                advancedSkillCount: 0
            },
            {
                name: 'Выступление',
                advancedSkillCount: 0
            },
            {
                name: 'Запугивание',
                advancedSkillCount: 0
            },
            {
                name: 'История',
                advancedSkillCount: 0
            },
            {
                name: 'Магия',
                advancedSkillCount: 0
            },
            {
                name: 'Медицина',
                advancedSkillCount: 0
            },
            {
                name: 'Ловкость рук',
                advancedSkillCount: 0
            },
            {
                name: 'Природа',
                advancedSkillCount: 0
            },
            {
                name: 'Проницательность',
                advancedSkillCount: 0
            },
            {
                name: 'Религия',
                advancedSkillCount: 0
            },
            {
                name: 'Скрытность',
                advancedSkillCount: 0
            },
            {
                name: 'Убеждение',
                advancedSkillCount: 0
            },
            {
                name: 'Уход за животными',
                advancedSkillCount: 0
            },
        ]);

        useEffect(() => {
            const updatedSkills = advancedSkills.map((skill) => {
              if (selectedAdvancedSkills.includes(skill.name)) {
                return { ...skill, advancedSkillCount: 2 };
              } else {
                return { ...skill, advancedSkillCount: 0 };
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
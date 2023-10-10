import { useEffect } from 'react';
import '../style/advancedSkills.css'
import type { RootState } from '../../../store//store'
import { useSelector, useDispatch } from 'react-redux'
import { setSkillCount } from '../../../store/creator/advancedSkillsSlice'

export default function AdvancedSkills() {

    const mod = useSelector((state: RootState) => state.modificator)
    const advancedSkills = useSelector((state: RootState) => state.advancedSkills)

    const dispatch = useDispatch()

        useEffect(() => {
          const skillItem = {
            name: '',
            skillCount: -1
          }
            advancedSkills.map((skill) => {
                const usedMod = Object.entries(mod).find(([modificatorKey]) => modificatorKey === skill.mainSkill)
                if (usedMod !== undefined){
                  skillItem.name = usedMod[0]
                  skillItem.skillCount = usedMod[1]
                }
                
                if (usedMod) {
                  dispatch(setSkillCount(skillItem))
                } else {
                  return skill
                }
                
              });
          }, [mod, advancedSkills]);

          return (
            <div className='advancedSkills'>
              {advancedSkills.map((advancedSkill) => (
                <div className='advancedSkills__item'>
                  <label>{advancedSkill.name}</label>
                  <label>{advancedSkill.skillCount}</label>
                </div>
              ))}
            </div>
          );
        
}
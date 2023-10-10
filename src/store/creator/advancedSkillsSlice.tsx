import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface IAdvansedSkill {
    name: string;
    checked: boolean,
    skillCount: number,
    mainSkill: string
}


const initialState: IAdvansedSkill[] = [
    {
        name: 'Атлетика',
        checked: false,
        skillCount: -1,
        mainSkill: 'strength'
    },
    {
        name: 'Акробатика',
        checked: false,
        skillCount: -1,
        mainSkill: 'dexterity'
    },
    {
        name: 'Анализ',
        checked: false,
        skillCount: -1,
        mainSkill: 'intelligence'

    },
    {
        name: 'Внимательность',
        checked: false,
        skillCount: -1,
        mainSkill: 'wisdom'
    },
    {
        name: 'Выживание',
        checked: false,
        skillCount: -1,
        mainSkill: 'wisdom'

    },
    {
        name: 'Выступление',
        checked: false,
        skillCount: -1,
        mainSkill: 'charisma'

    },
    {
        name: 'Запугивание',
        checked: false,
        skillCount: -1,
        mainSkill: 'charisma'


    },
    {
        name: 'История',
        checked: false,
        skillCount: -1,
        mainSkill: 'intelligence'

    },
    {
        name: 'Магия',
        checked: false,
        skillCount: -1,
        mainSkill: 'intelligence'

    },
    {
        name: 'Медицина',
        checked: false,
        skillCount: -1,
        mainSkill: 'wisdom'

    },
    {
        name: 'Обман',
        checked: false,
        skillCount: -1,
        mainSkill: 'charisma'


    },
    {
        name: 'Ловкость рук',
        checked: false,
        skillCount: -1,
        mainSkill: 'dexterity'
    },
    {
        name: 'Природа',
        checked: false,
        skillCount: -1,
        mainSkill: 'intelligence'

    },
    {
        name: 'Проницательность',
        checked: false,
        skillCount: -1,
        mainSkill: 'wisdom'
    },
    {
        name: 'Религия',
        checked: false,
        skillCount: -1,
        mainSkill: 'intelligence'

    },
    {
        name: 'Скрытность',
        checked: false,
        skillCount: -1,
        mainSkill: 'dexterity'

    },
    {
        name: 'Убеждение',
        checked: false,
        skillCount: -1,
        mainSkill: 'charisma'

    },
    {
        name: 'Уход за животными',
        checked: false,
        skillCount: -1,
        mainSkill: 'wisdom'
    },
]

export interface ISkillCount {
    name: string;
    skillCount: number,

}

export const advansedSkillsSlice = createSlice({
    name: 'advansedSkills',
    initialState,
    reducers: {
        toggleChecked: (state, action: PayloadAction<string>) => {
            const skillName = action.payload;
            const skill = state.find((s) => s.name === skillName);
            if (skill) {
                skill.checked = !skill.checked;
            }
            
        },
        setSkillCount: (state, action: PayloadAction<ISkillCount>) => {
            const { name, skillCount } = action.payload;
            const skillToUpdate = state.filter((s) => s.mainSkill === name);
            skillToUpdate.forEach((el)=> {
                if(!el.checked){
                    el.skillCount = skillCount 
                }
                else if (el.checked){
                    el.skillCount = skillCount +2
                }
            })
        },
    }
});

export const { toggleChecked, setSkillCount } = advansedSkillsSlice.actions;

export default advansedSkillsSlice.reducer;
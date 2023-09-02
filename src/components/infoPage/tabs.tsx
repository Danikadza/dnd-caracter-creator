import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import RaceTab from './race/raceTab';
import './styles/tabs.css'

export default function TabsInfo() {
    return (
        <>
            <Tabs className='tabs'>
                <TabList className='tabs_tablist'>
                    <Tab className='tabs_tabItem'>Расы</Tab>
                    <Tab className='tabs_tabItem'>Классы</Tab>
                    <Tab className='tabs_tabItem'>Снаряжение</Tab>
                    <Tab className='tabs_tabItem'>Заклинания</Tab>
                </TabList>
                <TabPanel className='tabs_tabContent'>
                    <h2>Any content 1</h2>
                    <div>Описание страницы</div>
                    <RaceTab/>
                </TabPanel>
                <TabPanel className='tabs_tabContent'>
                    <h2>Any content 2</h2>
                    <div>Описание страницы</div>
                </TabPanel>
                <TabPanel className='tabs_tabContent'>
                    <h2>Any content 3</h2>
                    <div>Описание страницы</div>
                </TabPanel>
                <TabPanel className='tabs_tabContent'>
                    <h2>Any content 4</h2>
                    <div>Описание страницы</div>
                </TabPanel>
            </Tabs>
        </>
    )
}
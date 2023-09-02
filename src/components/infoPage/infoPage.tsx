import Navigation from '../navigation/navigation'
import TabsInfo from './tabs'
import './styles/infoPage.css'

export default function Info() {
  return (
    <>
      <Navigation />
      <div className='info'>
        <TabsInfo />
      </div>
    </>
  )
}
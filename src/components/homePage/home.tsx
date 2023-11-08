import Navigation from '../navigation/navigation'
import './styles/homePage.css'
import logo from '../../images/logo1.png'

export default function Home() {
    return (
        <>
            <Navigation />
            <div className='home'>
                <img className='home_img' src={logo} alt='Dungeons and Dragons' />
                <div className='home_description'> Описание сайта</div>
                <div className='home_example'>Примеры созданных пресонажей с изображениями</div>
            </div>
        </>
    )
}

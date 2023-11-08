import { Link } from 'react-router-dom'
import './navigation.css';
import logo from '../../images/logo2.png'

export default function Navigation() {
    return (
        <nav className='navigation'>
            <img className='navigation_img' src={logo} alt='logo' />
            <ul className='navigation_items'>
                <Link className='navigation_item' to={`/dnd-caracter-creator`}>Home</Link>
                <Link className='navigation_item' to={`/dnd-caracter-creator/creator`}>Creator</Link>
                <Link className='navigation_item' to={`/dnd-caracter-creator/info`}>Info</Link>
            </ul>
        </nav>
    )
}
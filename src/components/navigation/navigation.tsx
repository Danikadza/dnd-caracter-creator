import { Link } from 'react-router-dom'
import './navigation.css';

export default function Navigation() {
    return (
        <nav className='navigation'>
            <img className='navigation_img' src='../images/logo2.png' alt='logo' />
            <ul className='navigation_items'>
                <Link className='navigation_item' to={`/`}>Home</Link>
                <Link className='navigation_item' to={`/creator`}>Creator</Link>
                <Link className='navigation_item' to={`/info`}>Info</Link>
            </ul>
        </nav>
    )
}
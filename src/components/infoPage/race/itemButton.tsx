import '../styles/itemButton.css'

interface props {
    imgURL: string,
    name: string
    onClick?: () => void
}

export default function ItemButton({imgURL, name, onClick}:props) {
    return (
        <div className='itemButton'>
            <img className='itemButton_img' src={imgURL} alt={name} onClick={onClick}/>
            <div className='itemButton_name' onClick={onClick}>{name}</div>
        </div>
    )
}
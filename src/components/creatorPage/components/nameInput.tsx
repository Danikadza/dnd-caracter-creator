import '../style/nameInput.css'

export default function NameInput() {
    return (
        <div className='nameInput'>
            Введите имя персонажа
                <div className='nameInput__item'>
                    <label htmlFor="">Имя</label>
                    <input/>
                </div>
        </div>
    )
}
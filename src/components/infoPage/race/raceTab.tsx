import { useState } from "react"
import ItemButton from "./itemButton"
import Modal from "./modal"
import '../styles/raceTab.css'

export default function RaceTab() {
  const [activeModal, setActiveModal] = useState<null | string>(null)
  return (
    <div className='raceTab'>
      {activeModal && <Modal race={activeModal} onClose={() => setActiveModal(null)} />}
      <div className='raceTab_items'>
        <ItemButton name="Дварф" imgURL='../images/logo2.png' onClick={() => setActiveModal("dwarf")} />
        <ItemButton name="Эльф" imgURL='../images/logo2.png' onClick={() => setActiveModal("elf")} />
        <ItemButton name="Полурослик" imgURL='../images/logo2.png' onClick={() => setActiveModal("halfling")} />
        <ItemButton name="Человек" imgURL='../images/logo2.png' onClick={() => setActiveModal("human")}/>
        <ItemButton name="Драконорожденный" imgURL='../images/logo2.png' onClick={() => setActiveModal("dragonborn")}/>
        <ItemButton name="Гном" imgURL='../images/logo2.png' onClick={() => setActiveModal("gnome")}/>
        <ItemButton name="Полуэльф" imgURL='../images/logo2.png' onClick={() => setActiveModal("halfelf")}/>
        <ItemButton name="Полуорк" imgURL='../images/logo2.png' onClick={() => setActiveModal("halforc")}/>
        <ItemButton name="Тифлинг" imgURL='../images/logo2.png' onClick={() => setActiveModal("tiefling")}/>
      </div>
    </div>
  )
}
import '../styles/modal.css'

interface IRaceData {
  imgURL: string
  description: string
}

const raceData : Record<string,IRaceData> = {
  dwarf : {
    imgURL: "../images/logo2.png",
    description : "Dwarf"
  },
  elf : {
    imgURL: "../images/logo2.png",
    description : "Elf"
  },
  halfling : {
    imgURL: "../images/logo2.png",
    description : "Halfling"
  },
  human : {
    imgURL: "../images/logo2.png",
    description : "Human"
  },
  dragonborn : {
    imgURL: "../images/logo2.png",
    description : "Dragonborn"
  },
  gnome : {
    imgURL: "../images/logo2.png",
    description : "Gnome"
  },
  halfelf : {
    imgURL: "../images/logo2.png",
    description : "Halfelf"
  },
  halforc : {
    imgURL: "../images/logo2.png",
    description : "Halforc"
  },
  tiefling : {
    imgURL: "../images/logo2.png",
    description : "Tiefling"
  },
 }

interface Props {
    race : string,
    onClose: ()=> void
}

export default function Modal({race, onClose}:Props) {
  return (
      <div className={"modal active"} onClick={onClose}>
        <div className="modal_content" onClick={e => e.stopPropagation()}>
          <img src={raceData[race].imgURL} alt={race}/>
          <div>{raceData[race].description}</div>
        </div>
      </div>
  )
}
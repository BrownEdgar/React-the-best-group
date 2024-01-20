import { useState } from "react"
import "./Room.scss"
export default function Room() {
    const [rooms] = useState([
        'https://getwallpapers.com/wallpaper/full/9/b/2/589272.jpg',
        'https://images.pexels.com/photos/5427445/pexels-photo-5427445.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      ])
      const [currentRoom, setCurrentRoom] = useState(0)
    
    
      const change = () => {
        setCurrentRoom(currentRoom === 0 ? 1 : 0);
      }
    
      return (
        <div className="Room">
          <img src={rooms[currentRoom]} />
          <i onClick={change} className="bi bi-lightbulb-fill"></i>
        </div>
      )
}


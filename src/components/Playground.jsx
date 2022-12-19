import { useState } from 'react'
import { Ball } from './Ball'
import './playground.css'

export const Playground = () => {
let [moveTop, setMoveTop] = useState(0)
// const [moveBottom, setMoveBottom] = useState(0)
let [moveLeft, setMoveLeft] = useState(0)
// const [moveRight, setMoveRight] = useState(0)

const ballPosition = {
    top: `${moveTop}px`,  
    left: `${moveLeft}px`,
}


   const handleKeyPress = (event) => {
        event.stopPropagation()
         if(event.code === 'KeyW'){
            const w = setInterval(()=>{setMoveTop(moveTop-=10)}, 20) 
            if(moveTop === 1000) clearInterval(w)
         }
             else if(event.code === 'KeyD'){
                
               const d = setInterval(()=>{
                setMoveLeft(moveLeft+=10)
                if(moveLeft===1200) clearInterval(d)
            }, 20)
            
            }
         else if(event.code === 'KeyS') s = setInterval(()=>{setMoveTop(moveTop=+10)}, 20)
         else if(event.code === 'KeyA') a = setInterval(()=>{
            setMoveLeft(moveLeft=-10)
            if(moveLeft===-10) clearInterval(a)
         }, 20)
      }
     
      


    return(
        <div className="playground" onKeyPress={handleKeyPress} tabIndex={0}>
             <Ball ballPosition={ballPosition}/>
        </div>
    )
}
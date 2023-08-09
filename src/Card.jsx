import './Card.css'
import {useState} from 'react';


export default function Card(){
     const puntuation = [1,2,3,4,5];
     const [selected, setSelected] = useState(0);


     const clicked = (e) => {
          console.log(e.target.value)
          setSelected(e.target.value)
     }

     const PuntuationButtons = () => {
     return (
          puntuation.map((puntuation) => {
               const className = selected == puntuation ? "puntuationButton selected" : "puntuationButton";
               return (
                    <button key={puntuation} value={puntuation} className={className} onClick={clicked}>{puntuation}</button>
               )
          })
     )
}

     return (
     <div className="cardContainer">
          <form className="form">
               <div className="imgContainer"><img src="../images/icon-star.svg" alt='star'></img></div>
               <div className='text'>
               <h1>How did we do?</h1>
               <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
               </div>
               <div className="buttonsContainer"><PuntuationButtons/></div>
               <button type='submit' className='submitButton'>SUBMIT</button>
          </form>
     </div>
     )
}
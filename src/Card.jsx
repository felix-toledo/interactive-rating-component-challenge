import './Card.css'
import {useState} from 'react';

export default function Card({changeComponent, punctuationValue}){
     const punctuation = [1,2,3,4,5];
     const [selected, setSelected] = useState(0);

     const punctSubmitted = () => {
          changeComponent(selected);
     }

     const clicked = (e) => {
          console.log(e.target.value)
          e.target.value == selected ? setSelected(0) : setSelected(e.target.value)
     }

     const PunctuationButtons = () => {
     return (
          punctuation.map((punctuation) => {
               const className = selected == punctuation ? "punctuationButton selected" : "punctuationButton";
               return (
                    <button key={punctuation} value={punctuation} className={className} onClick={clicked}>{punctuation}</button>
               )
          })
     )

     
}

     return (
     <div className="cardContainer">
          <form className="form">
               <div className="imgContainer"><img src="../public/images/icon-star.svg" alt='star'></img></div>
               <div className='text'>
               <h1>How did we do?</h1>
               <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
               </div>
               <div className="buttonsContainer"><PunctuationButtons/></div>
               <button onClick={punctSubmitted} className='submitButton'>SUBMIT</button>
          </form>
     </div>
     )
}
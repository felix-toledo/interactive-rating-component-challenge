import './ThankYou.css'
import imgUrl from './assets/images/illustration-thank-you.svg'

export default function ThankYou({punctuation}){
     return(
          <div className="cardContainer byeContainer">
               <div className="tyImgContainer"><img src={imgUrl}></img></div>
               <span className="puntuation">You selected {punctuation} out of 5</span>
               <h1>Thank you!</h1>
               <p>We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>
          </div>
     )
}
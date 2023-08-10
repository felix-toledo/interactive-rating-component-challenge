import './ThankYou.css'

export default function ThankYou({puntuation}){
     return(
          <div className="cardContainer byeContainer">
               <div className="tyImgContainer"><img src="../public/images/illustration-thank-you.svg"></img></div>
               <span className="puntuation">You selected {puntuation} out of 5</span>
               <h1>Thank you!</h1>
               <p>We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>
          </div>
     )
}
import './App.css'
import Card from './Card.jsx'
import ThankYou from './ThankYou'
import {useState} from 'react';

function App() {
  const [actualComponent, setActualComponent] = useState(0)
  const [selected, setSelected] = useState(0)

  const changeComponent = (valor) => {
    setActualComponent(1);
    setSelected(valor)
  }

  return (
    <>
    {
      actualComponent == 0 ? (<Card changeComponent={changeComponent} punctuationValue={selected}/>) : (<ThankYou punctuation={selected}/>)
    }
      
    </>
  )
}

export default App

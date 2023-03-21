import { useState, useContext } from 'react';
import '../styles/register-freelancer.scss';
import BoxIdiom from '../components/boxAddIdiom';
import {idioms} from '../data/db';
import{ DataContext} from '../App';
import Footer from '../components/footer';


export default function Idioms () {
  const [data] = useContext(DataContext)
  const [disabled, setDisabled] = useState(false)
  const [idiomsLength, setIdiomsLength] = useState(1)


  const handleAdd = (idioms) => {
    data.idioms.splice(idiomsLength-1, 0, idioms)
    setIdiomsLength(data.idioms.length)
  }

  const handleDelete = () =>{
    data.idioms.splice(idiomsLength-1,1)
    setDisabled(true)
    setIdiomsLength(data.idioms.length)
  }

  return(
    
    <div className='container-idioms'>
      <h1 className='areas-title'>Último paso! ¿Qué idiomas hablas?</h1>
        {data && data.idioms.map((idiom, index)=>(
          <BoxIdiom  
            idiom={idiom}
            handleDelete={handleDelete}
            key={index}
            idiomsFetch={idioms} 
            handleAdd={handleAdd}
            lengthIdiom={idiomsLength}
            index={index}
            disabled={disabled}
          />
        ))
        }
        <Footer pathNext='/completed' onClick={()=>data.idioms.pop()}/>
    </div>
  )
}
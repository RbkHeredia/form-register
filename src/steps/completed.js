import { useContext } from 'react';
import '../styles/register-freelancer.scss';
import HappyImage from '../assets/4365502.jpg';
import { DataContext } from '../App';

export default function Completed () {
  const [data] = useContext(DataContext)



  return(
    <div className='flex-complete'>
      <div className='container-image-completed'>
        <h1 className='areas-title'>¡Perfecto {data.name}! Completaste el registro!</h1>
        <p>Bienvenido/a a nuestra página!</p>
        <div className='cont-imagen-freelas'>
          <img src={HappyImage} alt=""></img>
          <p><a href="https://www.freepik.es/vector-gratis/ilustracion-concepto-entusiasta_10117945.htm#query=happy&position=15&from_view=search&track=sph">Imagen de storyset</a> en Freepik</p>
        </div>
      </div>
      <div className='cont-info'>
        <p>Nombre: {data.name}</p>
        <p>Especializaciones:</p>
        <ul>
          {data.areas.map((area)=>(
            <li>{area}</li>
          ))}
        </ul>
        <p>Habilidades:</p>
        <ul>
          {data.skills.map((skill)=>(
            <li>{skill}</li>
          ))}
        </ul>
        <p>Idiomas:</p>
        <ul>
          {data.idioms.map((idiom, index)=>(
            <li key={index}>{idiom.idiom}: {idiom.level}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}
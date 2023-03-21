import '../styles/register-freelancer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faFileLines } from '@fortawesome/free-solid-svg-icons';

export default function Heather () {
  return(
    <header className="header-register-bordeaux" >
      <div className="register-header_container">
        <FontAwesomeIcon icon={faFileLines}/>
      </div>
    </header>
  )
}
import ButtonSecondary from "./secondary-button";
import '../styles/footer.css';
import { Link } from 'react-router-dom'; 

export default function Footer ({pathNext, onClick}){
  return(
    <footer>
      <div className="cont-buttons">
        <Link to={pathNext} style={{ textDecoration: 'none' }}>
          <ButtonSecondary 
            onClick={onClick}
            buttonText='Siguiente' 
          />
        </Link>
      </div>
    </footer>
  )
}
import '../styles/button.scss'

export default function ButtonSecondary ({ buttonText, onClick }) {
  return(
    <button 
      className="secondary-button" onClick={onClick}>{buttonText}</button>
  )
}
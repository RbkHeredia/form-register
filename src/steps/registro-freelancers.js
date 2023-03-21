import { useContext } from 'react'
import Input from '../components/input';
import Footer from '../components/footer';
import{ DataContext} from '../App';

export default function RegistroFreelancers () {

  const [data, setData] = useContext(DataContext)

  const handleName = (event) =>{
    setData({...data, name: event.target.value})
  }
  
  return(
    <div className='container-register'>
      <h1 >Hi developer! Please enter your name</h1>
      <Input 
        placeholder='Your name'
        maxLength='12'
        onChange={handleName}
      />
      <Footer pathNext='/areas'/>
    </div>
  )
}
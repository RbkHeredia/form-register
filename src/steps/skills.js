import { useState, useContext } from 'react';
import '../styles/register-freelancer.scss';
import {
  Chip,
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import{ DataContext} from '../App';
import {skills} from '../data/db';
import Footer from '../components/footer';


// verde 66CC99
export default function Skills () {
  const [data, setData] = useContext(DataContext);
  const [errorDisable, setErrorDisable] = useState(false);

  const theme = createTheme({
    components: {
      MuiChip: {
        variants: [
          {
            props: { color: 'success' },
            style: {
              textTransform: 'none',
              border: 'none',
              backgroundColor: '#66CC99',
              color: '#FFF'
            },
          },
          {
            props: { variant: 'outlined' },
            style: {
              color: '#3E3E3C'
            },
          },
        ]
      },
      MuiTextField: {
        variants: [
          {
            props: { variant: 'standard'},
            style: {
              borderBottom:'none',
              color:'#F5F5F5',
              minWidth: '100%',
            }
          }
        ]
      }
    },
  });

  const handleChip = (event)=>{
    const limitTags = 3;
    if (data.skills.length < limitTags){
      data.skills.push(event.target.value)
    } else {
      setErrorDisable(true)
    }
  }

  

  const deleteTag = (index) => {
    const prevState = data.skills.filter((tag, i) => i !== index)
    setData({...data, skills:prevState})
    document.getElementById('tags').disabled = false;
    
      setErrorDisable(false)
    
  }
  

  return(
    
    <div className='container-areas'>
      <div>
        <h1 className='areas-title'>¡Excelente! ¿Qué habilidades dominas?</h1>
        <p className='habilidades-text'>Elige hasta 3 habilidades</p>
        {errorDisable && <p className='error-skills'>Solo puedes elegir 3 habilidades</p>}
        <div className='container-input-search'>
          <ThemeProvider theme={theme}>
            <div className='container-skills'>
              {data.skills.map((tag, index)=>(
                <Chip 
                key={index}
                sx={{
                  padding: '2px',
                  margin: '3px',
                  marginBottom: '5px'
                }}
                id='tags'
                variant="filled" 
                label={tag} 
                onDelete={() => deleteTag(index)} 
                color="success"/>
              ))
              }
              
            </div>
          </ThemeProvider>
        </div>
        <div className='container-pills-skills'>
          {skills.map((option, index) => (
            <button
              className='pill-skills'
              key={index}
              value={option.name}
              onClick={handleChip}
            ><FontAwesomeIcon icon={faPlus}/>&nbsp;{option.name}</button>
          ))}
        </div>
      </div>
      <Footer pathNext='/idioms'/>
    </div>
  )
}
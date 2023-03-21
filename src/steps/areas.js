import { useState, useEffect, useContext } from 'react';
import '../styles/register-freelancer.scss';
import { 
  Accordion,
  AccordionSummary,
  AccordionDetails,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText ,
  Checkbox
  } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import {budgets} from '../data/db';
import{ DataContext} from '../App';
import Footer from '../components/footer';




export default function Areas () {
  
  const [checked, setChecked] = useState([]);
  const [alert, setAlert] = useState(false);
  const [data, setData] = useContext(DataContext);
  

  const handleValue = (item) => {
    data.areas.push(item)
  }

  const deleteValue = (currentIndex) =>{
    data.areas.splice(currentIndex,1)
  }

const handleToggle = (valueId, item) => () => {
  console.log(valueId)
  const currentIndex = checked.indexOf(valueId);
  const newChecked = [...checked];
  if (currentIndex === -1) {
    handleValue(item)
    newChecked.push(valueId);
  } else {
    newChecked.splice(currentIndex, 1);
    deleteValue(currentIndex)
  }
  setChecked(newChecked);
};
  useEffect(()=>{
    if (checked) {
      if (checked.length >5){
        /* handleActive() */
        setAlert(true)
      }else {
        /* handleButton() */
        setAlert(false)
      }
    } 
  },[checked])

  return(
    <div className='container-areas'>
      
        <h1 className='areas-title'>¡Bienvenido {data.name}! ¿En qué áreas te especializas?</h1>
        <p>Selecciona hasta 5 opciones</p>
        {alert
        ? <div className='cont-error'>
          <FontAwesomeIcon icon={faTriangleExclamation} />
          <p className='error-areas'>Solo puedes elegir 5 áreas de interés</p>
        </div>
        : null
        }
        <div className='container-accordion'>
          {budgets && budgets.map((area)=>(
            
            <Accordion key={area.id}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              key={area.id}
            >
              <p >{area.title}</p>
            </AccordionSummary>
            <AccordionDetails>
            
            <List sx={{ 
              columns: 3,
              width: '100%', 
              maxWidth: '100%', 
              maxHeight: '100%',  
              bgcolor: 'background.paper', 
              }}>
              {area.subArea.map((item, value) => {
                
                const labelId = `checkbox-list-label-${area.id}${value}`;
                const valueId = `${area.id}${value}`;
                return (
                  <ListItem
                    sx={{padding: '6px' }}
                    key={value}
                    disablePadding
                  >
                    <ListItemButton role={undefined} onClick={handleToggle(valueId, item)} dense>
                      <ListItemIcon>
                        <Checkbox
                          value={item}
                          key={value}
                          edge="start"
                          checked={checked.indexOf(valueId) !== -1}
                          tabIndex={-1}
                          disableRipple
                          inputProps={{ 'aria-labelledby': labelId }}
                        />
                      </ListItemIcon>
                      <ListItemText key={labelId} id={item} primary={item} />
                    </ListItemButton>
                  </ListItem>
                );
              })}
            </List>
            
            </AccordionDetails>
          </Accordion>
          ))}
          
        </div>
        
        <Footer pathPrev='/' pathNext='/skills'/>
    </div>
  )
}
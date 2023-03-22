import { createContext, useState  } from 'react';
import './App.css';
import { Route, Routes } from "react-router-dom";

import Heather from './steps/heather';
import Areas from './steps/areas';
import Completed from './steps/completed';
import Idioms from './steps/idioms';
import Skills from './steps/skills';
import RegistroFreelancers from './steps/registro-freelancers';


export const DataContext = createContext()


function App() {

  const [data, setData] = useState({name:'', areas:[], skills:[], idioms:[{idiom:'Español', level:'Nativo'}]})
  return (
      <DataContext.Provider value={[data, setData]} >
          <Heather/>
            <Routes>
              <Route exact path='/' Component={RegistroFreelancers}/>
                <Route path='areas' Component={Areas}/>
                <Route path='skills' Component={Skills}/>
                <Route path='idioms' Component={Idioms}/>
                <Route path='completed' Component={Completed}/>
            </Routes>
       
      </DataContext.Provider>
  );
}

export default App;

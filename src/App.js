import { createContext, useState  } from 'react';
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Heather from './steps/heather';
import Areas from './steps/areas';
import Completed from './steps/completed';
import Idioms from './steps/idioms';
import Skills from './steps/skills';
import RegistroFreelancers from './steps/registro-freelancers';


export const DataContext = createContext()

const router = createBrowserRouter([
  {
    path: "/",
    element: <RegistroFreelancers/>,
  },
      {
        path: "/areas",
        element: <Areas />,
      },
      {
        path: "/skills",
        element: <Skills />,
      },
      {
        path: "/idioms",
        element: <Idioms />,
      },
      {
        path: "/completed",
        element: <Completed />,
      },
    
]);


function App() {

  const [data, setData] = useState({name:'', areas:[], skills:[], idioms:[{idiom:'Español', level:'Nativo'}]})
  return (
    <DataContext.Provider value={[data, setData]} >
      <div className="App">
        <Heather/>
        <RouterProvider router={router}/>
      </div>
    </DataContext.Provider>
  );
}

export default App;

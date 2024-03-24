import './App.css';
import Navbar from './components/Navbar';
import { ApplicationCtx } from './context/ApplicationCtx';
import { routes } from './Routes';
import {Route, Routes} from 'react-router-dom';
import {useState } from "react";

function App() {

  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  return (
    <ApplicationCtx.Provider value={{isUserLoggedIn, setIsUserLoggedIn}}>
    <div className="App">
      <Navbar />
      <Routes>
        {routes.map(({path, component}, index) => (
          <Route path={path} element={component} key={index}/>
        ))}
      </Routes>
    </div>
    </ApplicationCtx.Provider>
  );
}

export default App;

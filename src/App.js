import { Routes , Route } from "react-router-dom";

import CssBaseline from '@material-ui/core/CssBaseline';
import Home from "./Components/Index";
import Resume from "./Components/Resume";
import Portfolio from "./Components/Portfolio";
import Contacts from "./Components/Contacts";


import './App.css'; 



function App() {
  return (
    <>
    <CssBaseline/>
    <Routes>
      <Route exact path="/" element={<Home   />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/contacts" element={<Contacts />} />
    </Routes>
    </>
  );
}

export default App;

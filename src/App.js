import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Routing from './Materi/Routing';
import TugasStyling from "./Materi/TugasStyling";
import TaskHook from "./Materi/TaskHook";
import FormValidation from "./Materi/FormValidation";



function App() {
  return (
    <div className="App" >
      
      
      <Router>
      <Routing/>
        <Routes >
          <Route exact path="/" element={<TugasStyling />}/>
          <Route exact path="/News" element={<TaskHook />}/>
          <Route path="/Register" element={<FormValidation />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

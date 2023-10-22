
import './App.css';
import Quiz from "./Quiz"
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import FreeResponse from './FreeResponse';


function App() {
  return (
    <BrowserRouter>

    <div className="App">
      <header className="App-header">
        
        <Routes>

          <Route path="/" element={<FreeResponse/>} />
          <Route path="/Quiz" element={<Quiz/> }/>
        </Routes>


      </header>
    </div>
    </BrowserRouter>
  );
}

export default App;

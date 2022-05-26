
import './App.css';
import ShowTareas from './components/ShowTareas'
import CreateTareas from './components/CreateTareas'
import EditTareas from './components/EditTareas'
import {BrowserRouter, Routes,Route} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <header className="">
      </header>
      <BrowserRouter>
          <Routes>
              
              <Route path='/' element={<div className="table table-bordered mx-auto d-block"><ShowTareas/></div>}/>
              <Route path='/create' element={<div className="m-0  row justify-content-center align-items-center "><CreateTareas/></div>}/>
              <Route path='/edit/:id' element={<div className="m-0  row justify-content-center align-items-center "><EditTareas/></div>}/>

          </Routes>
      </BrowserRouter>
      
        
    </div>
  );
}

export default App;

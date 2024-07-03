import './App.css';
import SideBar from './components/SideBar';
import BloodStockTable from './components/BloodStockTable';
// import EnhancedTable from './components/SortingTable';
import { Routes,Route} from "react-router-dom";
import {
  BrowserRouter as Router 
} from "react-router-dom";
import AllDoners from './components/AllDoners';
import Register from "./components/Register";
import Serology from "./components/Serology";
import TTitesting from './components/TTitesting';

function App(){
  return (
    <Router>
      <div className='main-container'>
        <SideBar/>
        <Routes>
                      <Route exact path='/' element={< BloodStockTable/>}></Route>
                      <Route exact path='/AllDoners' element={<AllDoners/>}></Route>
                      <Route exact path='/Master-Register' element={ <Register/> }></Route>
                      <Route exact path='/Serology-Testing' element={ <Serology/> }>
                          <Route exact  path='TTI-Testing' element={ <TTitesting/> }/>
                      </Route>
              </Routes>
        </div>
        </Router> 
  );
};
export default App;

import SideBar from "./SideBar";
import BloodStockTable from "./BloodStockTable";
import {router} from "react-router-dom";
const main = ()=>{
    return(
        <div className='main-container'>
        <Router>
          <SideBar/>
        </Router>   
            <BloodStockTable/>
        </div>
    )
}
export default main;
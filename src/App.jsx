import { Dashboard } from "@/pages/dashBoard";
import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  Navigate,
  Outlet,
} from "react-router-dom";
import { Leads } from "@/components/leads";
import CollabratorTable from "@/components/collabratorTable";
import UploadLeads from "@/components/uploadLeads";
import { LoginPage } from "@/pages/loginPage";
import NewLeadsTable from "./components/newLeads";
import { createContext, useEffect, useState } from "react";





export const LoginContext = createContext();

function App() {
  
// const [isauth, setauth] = useState(localStorage.getItem("user") !== null);
const [isauth, setauth] = useState(true);

useEffect(()=>{
let loggedinuser=localStorage.getItem('user');
if(loggedinuser !== null || undefined){
setauth(true)
}
},[isauth])


console.log(isauth);
  const Protected = () => {
    
    return isauth ? <Dashboard /> : <Navigate to={"/"} />;
  };

  return (
    <LoginContext.Provider value={setauth}>
      <BrowserRouter>
        <Routes>
          <Route path="/dash" Component={Protected}>
            <Route path="" Component={Leads} />
            <Route path="collabrators" Component={CollabratorTable} />
            <Route path="uploadleads" Component={UploadLeads} />
            <Route path="newleads" Component={NewLeadsTable} />
          </Route>
          <Route path="/" Component={LoginPage} />
          {/* <Route path="/" Component={NotionComponent} /> */}
        </Routes>
      </BrowserRouter>
    </LoginContext.Provider>
  );
}

export default App;

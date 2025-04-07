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
import { createContext, useEffect, useRef, useState } from "react";
import UnauthorizedUser from "./pages/unauthrised";
import PageNotFound from "./pages/pagenotfound";
import { AdminLoginPage } from "./pages/adminLoginPage";
import { AdminRoutes } from "./pages/adminProtected";
import { Protected } from "./pages/ProtectedRoute";
import RemainderPage from "./pages/RemainderPage";


export const LoginContext = createContext();

function App() {
  const [isauth, setauth] = useState(localStorage.getItem("user") !== null);
  const [user, setUser] = useState({});

  useEffect(() => {
    let loggedinuser = sessionStorage.getItem("user");

    if (loggedinuser !== null || undefined) {
      setUser(JSON.parse(loggedinuser));

      if (user?.level === "admin") {
        localStorage.setItem("isadmin", true);

      }
    }
  }, []);





  return (
    <LoginContext.Provider value={(setauth)}>
      <BrowserRouter>
        <Routes>
          <Route path="/remainders" element={<RemainderPage />} />
          <Route path="/dash" element={<Protected isauth={isauth} />}>
             <Route path="newleads" element={<NewLeadsTable />} />
{/*  <Route path="uploadleads" element={<UploadLeads />} /> */}
            <Route path="" element={<Leads />} />
            <Route path="" element={<AdminRoutes />}>
              <Route path="collabrators" element={<CollabratorTable />} />{" "}
              <Route path="uploadleads" element={<UploadLeads />} />
{/*               <Route path="newleads" element={<NewLeadsTable />} /> */}

            </Route>
          </Route>
          <Route path="/" element={<LoginPage />} />
          <Route path="/livin/admin" element={<AdminLoginPage />} />
          <Route path="/unauthorised-user" element={<UnauthorizedUser />} />
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </LoginContext.Provider>
  );
}

export default App;

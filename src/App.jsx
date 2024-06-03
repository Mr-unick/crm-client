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
import { useState } from "react";

const Tests = () => {
  const data = {
    // console.log(data.projects[0].subjects[0].email)
    projects: [
      {
        name: "Project Alpha",
        description:
          "This project involves developing a new software application for managing inventory.",

        subjects: ["maths", "english", "hindi"],
      },
    ],
  };

  // console.log(data.projects[0]);
  // console.log(data.projects[1].subjects[1]);
  console.log(data.projects[0].subjects);

  return (
    <div>
      <h1 className="text-red-300">Test Comp</h1>

      {data.projects[0].subjects.map((sub, index) => {
        return <h1 key={index}>{sub}</h1>;
      })}
    </div>
  );
};

function App() {
  const [isauth, setauth] = useState(true);

  const Protected = () => {
    return isauth ? <Dashboard /> : <Navigate to={"/"} />;
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dash" Component={Protected}>
          <Route path="" Component={Leads} />
          <Route path="collabrators" Component={CollabratorTable} />
          <Route path="uploadleads" Component={UploadLeads} />
          <Route path="newleads" Component={NewLeadsTable} />
        </Route>

        <Route path="/" Component={Tests} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

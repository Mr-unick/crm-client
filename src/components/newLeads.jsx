import { addLead, getLeads, updateLead } from "@/services/leadsApi";
import React, { Suspense, useContext, useEffect, useState } from "react";
import Select from 'react-select';
import { useToast } from "@/components/ui/use-toast";
import { getCollaborators } from "@/services/collabratorApi";
import { Button } from "./ui/button";
import { LoginContext } from "@/App";
import { toast } from "react-toastify";
import { CircularProgress } from "@mui/material";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const data = [
  {
    id: 1,
    name: "Alice Johnson",
    email: "alice.johnson@example.com",
  
  },
  {
    id: 2,
    name: "Bob Smith",
    email: "bob.smith@example.com",
  
  },
  {
    id: 3,
    name: "Charlie Brown",
    email: "charlie.brown@example.com",

  },
  {
    id: 4,
    name: "Daisy Lee",
    email: "daisy.lee@example.com",
  
  },
  {
    id: 5,
    name: "Ethan Hawke",
    email: "ethan.hawke@example.com",
  
  },
  {
    id: 6,
    name: "Fiona Apple",
    email: "fiona.apple@example.com",
 
  },
  {
    id: 7,
    name: "George Martin",
    email: "george.martin@example.com",
   
  },
  {
    id: 8,
    name: "Hannah Baker",
    email: "hannah.baker@example.com",
  
  },
  {
    id: 9,
    name: "Ivy Carter",
    email: "ivy.carter@example.com",
 
  },
  {
    id: 10,
    name: "Jack Daniels",
    email: "jack.daniels@example.com",
 
  },
  {
    id: 11,
    name: "Karen White",
    email: "karen.white@example.com",
 
  },
  {
    id: 12,
    name: "Leo King",
    email: "leo.king@example.com",

  },
  {
    id: 13,
    name: "Mia Wong",
    email: "mia.wong@example.com",

  },
  {
    id: 14,
    name: "Nathan Drake",
    email: "nathan.drake@example.com",

  },
  {
    id: 15,
    name: "Olivia Wilde",
    email: "olivia.wilde@example.com",
  
  },
];




const NewLeadsTable = () => {


  const [selectedRows, setSelectedRows] = useState([]);
  const [selectedCollabrators, setSelectedCollabrators] = useState([]);
  const [selectPriority, setSelectPriority] = useState(null);
  const [selectBranch, setselectBranch] = useState(null);
  const [leads, setLeads] = useState([]);
  const [onelead, setOneLead] = useState({});
  const [collabrators,setCollabrators] = useState([])
  const[loader,setloader]=useState(false)
  const[apply,setapply]=useState(false)
  const [ headCollab,setHeadCollab]=useState(selectedCollabrators?.filter(collabrator=> collabrator?.value?.level == 'Sales Professional'))
  const user = JSON.parse(sessionStorage.getItem("user"));

  const getLeadsData = async (token) => {
    const res = await getLeads(token);
  
  };



 const getcollabrators = async (token) => {
   const res2 = await getCollaborators(token);
   const updatedCollaborators = res2.map((collabrator) => ({
     value: collabrator,
     label: collabrator.name,
   }));
   setCollabrators(updatedCollaborators);
 };

  useEffect(()=>{
  getLeadsData(user.token)
  getcollabrators(user.token);

  let newleads=JSON.parse(sessionStorage.getItem('newleads'))
if(newleads){
  setLeads(newleads);
}
  
  },[])



  useEffect(()=>{
    let headData= selectedCollabrators?.filter(collabrator=> collabrator?.value?.level == 'Sales Professional')
    setHeadCollab(headData[0]?.value)

    },[selectedCollabrators])
  

  const priorityOptions = [
    { value: 'high', label: 'High' },
    { value: 'medium', label: 'Medium' },
    { value: 'low', label: 'Low' },
  ];
  const BranchOptions = [
    { value: 'LC32', label: 'LC32' },
    { value: 'LC78', label: 'LC78' },
    { value: 'LC71', label: 'LC71' },
  ];


  const handlechange=(e)=>{
    setOneLead((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
   }


  const handleSelectRow = (employeeEmail) => {
    setSelectedRows((prevSelectedRows) =>
      prevSelectedRows.includes(employeeEmail)
        ? prevSelectedRows.filter((email) => email !== employeeEmail)
        : [...prevSelectedRows, employeeEmail]
    );
  };

  const handleSelectAllRows = () => {
    setSelectedRows(selectedRows.length === leads.length ? [] : leads.map(employee => employee.email));
  };

  const handleApplyCollabrators = () => {

    
   
    if (selectedCollabrators.length || selectPriority) {
      const updatedEmployees = leads.map((employee) =>
        selectedRows.includes(employee.email)
          ? {
              ...employee,
              collaborators: selectedCollabrators.map(
                (collabrator) => collabrator.value
              ),
              priority: selectPriority.value,
              branchCode:selectBranch.value,
              Headcollaborator:headCollab
            }
          : employee
      );

      setLeads(updatedEmployees);
      
 setapply(true);
    }
    

  };

  const handleOneSubmit=async()=>{
    setloader(true)
    let res = await addLead(user.token, onelead);
    if(res.status == 200){
  
     toast.success("Lead added Successfully !")
   }else{
      setloader(false);
     toast.error("something went erong !")
   }

    setloader(false)
  }

  const UploadChangedLeads=async()=>{

    const upadated = leads.filter(
      (element) => !selectedRows.includes(element.email)
    );

    const upadated2 = leads.filter((element) =>
      selectedRows.includes(element.email)
    );
 
    setloader(true)

    let res = await addLead(user.token, upadated2);

    
    if(res.status == 200){
       setloader(false);
       setLeads(upadated);
       setSelectedRows([]);
       setSelectedCollabrators([]);
       setSelectPriority(null);
       sessionStorage.removeItem('newleads');
      toast.success("Leads Assigned Successfully !")
    }else{
       setloader(false);
      toast.error("something went erong !")
    }

     setapply(false);
  }

  useEffect(()=>{

  },[selectedRows])

  const handleDelete = ( index) =>{ 
    let newleads=leads.filter((_, i) => i !== index);

    setLeads(newleads);
  }


  return (
    <div className="overflow-x-auto ml-8 flex justify-center items-center flex-col">



      {
        leads.length >0 ? <> <Suspense>
        <div className=" hidden mb-4 lg:flex mt-3 w-full">
          <Select
            isMulti
            value={selectedCollabrators}
            onChange={setSelectedCollabrators}
            options={collabrators}
            className="w-1/3"
            placeholder="Select Collaborators"
          />
          <Select
            value={selectPriority}
            onChange={setSelectPriority}
            options={priorityOptions}
            className="w-1/3 ml-4"
            placeholder="Select Priority"
          />
          <Select
            value={selectBranch}
            onChange={setselectBranch}
            options={BranchOptions}
            className="w-1/3 ml-4"
            placeholder="Select Branch"
          />
          {selectedCollabrators.length > 0 &&
            selectPriority &&
            selectedRows.length > 0 && (
              <>
                {apply ? (
                  <Button
                    onClick={UploadChangedLeads}
                    className="ml-4 px-4 py-1 bg-black w-[20%] text-white rounded-md"
                  >
                    {loader ? <CircularProgress /> : "Apply"}
                  </Button>
                ) : (
                  <Button
                    onClick={handleApplyCollabrators}
                    className="ml-4 px-4 py-1 bg-black w-[20%] text-white rounded-md"
                  >
                    Preview
                  </Button>
                )}
              </>
            )}
        </div>
      </Suspense>

      <div className="flex lg:hidden  justify-center items-center  w-64  h-screen">
        Cant Acces From Mobile
      </div>
      <div className="lg:flex justify-center items-center hidden ">
       
          <table className="min-w-full divide-y divide-gray-200 border-[1px] rounded-md w-[70rem] mb-5">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                <input
                  type="checkbox"
                  checked={selectedRows.length === leads.length}
                  onChange={handleSelectAllRows}
                />
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Email
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Collaborators
              </th>
             
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Branch
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Priority
              </th>

              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {leads.map((employee,index) => (
              <tr key={employee.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 text-start">
                  <input
                    type="checkbox"
                    checked={selectedRows.includes(employee.email)}
                    onChange={() => handleSelectRow(employee.email)}
                  />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 text-start">
                  {employee.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 text-start">
                  {employee.email}
                </td>

                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-start">
                  {employee?.collaborators?.map((collabrator) => {
                    return collabrator.name;
                  }) || "None"}
                </td>
              
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-start">
                  {employee.branch || "None"}
                </td>

                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-start">
                  {employee.priority || "None"}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-start">
                  <Button onClick={()=>{handleDelete(index)}} variant="outline" size="sm">
                    Remove
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table> 
        
       
      </div>
      </> : 
      <div className=" w-screen h-1/2  flex justify-center items-center  flex-col">
        No New Leads 

        <button>Upload Leads</button>
      </div>
      }
     <Dialog>
        <DialogTrigger>
          <Button varient="outline" className="mb-4">
            Add Lead
          </Button>
        </DialogTrigger>
        <DialogContent className="bg-white flex justify-center items-center flex-col w-[300px] lg:w-[40%]">
         <div className=" p-8 flex flex-col justify-center items-center w-full">
          <input onChange={handlechange} className="px-2 py-1 outline-none rounded-md border-[1px] border-gray-200 my-2 w-[80%]" type="text" placeholder="name" name="name" />
          <input onChange={handlechange} className="px-2 py-1 outline-none rounded-md border-[1px] border-gray-200 my-2 w-[80%]" type="text" placeholder="email" name="email" />
          <input onChange={handlechange} className="px-2 py-1 outline-none rounded-md border-[1px] border-gray-200 my-2 w-[80%]" type="text" placeholder="phone" name="phone"/>
        <input onChange={handlechange} className="px-2 py-1 outline-none rounded-md border-[1px] border-gray-200 my-2 w-[80%]" type="text" placeholder="source" name="source"/>
           <p className="text-xs text-gray-400 ">tip: source should be only "Client Referral" or "Walk In"</p>
          <button onClick={handleOneSubmit} className="rounded-md bg-gray-900 text-white font-sans px-3 py-1 text-center font-semibold my-4">Submit</button>

         </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};







export default NewLeadsTable;

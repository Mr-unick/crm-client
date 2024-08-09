import React, { Suspense, useContext, useEffect, useState } from "react";
import { Delete, Edit, Trash2 } from "lucide-react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { addCollaborator, deleteCollaborator, getCollaborators } from "@/services/collabratorApi";
import { LoginContext } from "@/App";

import { toast } from "react-toastify";







const CollabratorTable = () => {

  const[CollabratorData,setCollabratorData]=useState({})
  const[collabratorList,setCollabratorList]=useState(null)
  const {user}=useContext(LoginContext);
  const[userdetails,setuserdetails]=useState(null)
  const[loader,setloader]=useState(false);

  const getCollabratorList = async () => {
       let res = await getCollaborators(userdetails?.token);
 
       setCollabratorList(res);
     };

  const handleEdit = (employeeId) => {
    // Implement edit logic here
    console.log(`Editing employee with ID: ${employeeId}`);
  };

  const handleRemove =async (employeeId) => {

  setloader(true)
   let res = await deleteCollaborator(userdetails.token,employeeId);
   if(res.status == 200){
    setloader(false)
    setCollabratorList((prevCollaborators) =>
      prevCollaborators.filter((collaborator) => collaborator._id !== employeeId)
    );
    toast.success("Collabrator Deleted Succesfully")
   }else{
setloader(false);
toast.error("Something Went Wrong");
   }
  };

  const handlechange=(e)=>{
   setCollabratorData((prevState) => ({
     ...prevState,
     [e.target.name]: e.target.value,
   }));
  }

  const handlSubmit=async()=>{
    setloader(true)
    if(CollabratorData.password===CollabratorData.confirmpassword){
      let res = await addCollaborator(userdetails.token,CollabratorData);
      if(res.status == 200){
       collabratorList.push(CollabratorData);
        setloader(false)
        toast.success("Collabrator Added Succesfully")
      }
    }
   
  }
console.log(CollabratorData);
  useEffect(() => {
    let user = JSON.parse(sessionStorage.getItem("user"));
    setuserdetails(user);
  }, []);

  useEffect(() => {
    if (userdetails !== null) {
      getCollabratorList();
    }
  }, [userdetails]);
  return (
    <div className="flex flex-col  px-1 py-3 justify-start items-start ml-3 mt-8  ">
      <Dialog>
        <DialogTrigger>
          <Button varient="outline" className="mb-4">
            Add New Collabrator
          </Button>
        </DialogTrigger>
        <DialogContent className="bg-white flex justify-center items-center flex-col w-[300px] lg:w-[40%]">
          <form className="lg:w-[80%] w-[90%] ">
            <div>
              <div className="flex items-center justify-between"></div>
              <div className="mt-2">
                <input
                  onChange={handlechange}
                  name="name"
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="text"
                  placeholder="Enter Name"
                ></input>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between"></div>
              <div className="mt-2">
                <input
                  onChange={handlechange}
                  name="email"
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="email"
                  placeholder="Enter Email"
                ></input>
              </div>
            </div>
            <div className="mt-2 w-full">
              <Select
                onValueChange={(value) =>
                  setCollabratorData((prevState) => ({
                    ...prevState,
                    level: value,
                  }))
                }
                className="mt-2"
              >
                <SelectTrigger className="border border-gray-300">
                  <SelectValue placeholder="Select Level" />
                </SelectTrigger>
                <SelectContent className="bg-white placeholder:text-gray-400 ">
                  <SelectItem
                    value="Sales Professional"
                    className="hover:bg-slate-400"
                  >
                    Sales Professional
                  </SelectItem>
                  <SelectItem
                    value="Interior Designer"
                    className="hover:bg-slate-400"
                  >
                    Interior Designer
                  </SelectItem>
                  <SelectItem
                    value="Operation Manager"
                    className="hover:bg-slate-400"
                  >
                    Operation Manager
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="mt-2 w-full">
              <Select
                onValueChange={(value) =>
                  setCollabratorData((prevState) => ({
                    ...prevState,
                    branch: value,
                  }))
                }
                className="mt-2"
              >
                <SelectTrigger className="border border-gray-300">
                  <SelectValue placeholder="Select Branch" />
                </SelectTrigger>
                <SelectContent className="bg-white placeholder:text-gray-400 ">
                  <SelectItem
                    value="branch1"
                    className="hover:bg-slate-400"
                  >
                  B1
                  </SelectItem>
                  <SelectItem
                    value="branch2"
                    className="hover:bg-slate-400"
                  >
                    B2
                  </SelectItem>
                  <SelectItem
                   value="branch3"
                    className="hover:bg-slate-400"
                  >
                   B3
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <div className="flex items-center justify-between"></div>
              <div className="mt-2">
                <input
                  onChange={handlechange}
                  name="password"
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="password"
                  placeholder="Enter Password"
                ></input>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between"></div>
              <div className="mt-2">
                <input
                  onChange={handlechange}
                  name="confirmpassword"
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="password"
                  placeholder="Confirm Password"
                ></input>
              </div>
            </div>

            <DialogClose>
              <button
                onClick={handlSubmit}
                type="button"
                className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black my-4 w-full"
              >
                {loader ? "Loading" : "ADD"}
              </button>
            </DialogClose>
          </form>
        </DialogContent>
      </Dialog>

      <Suspense
        fallback={
          <div className="w-screen h-screen flex justify-center items-center">
            <h1>Loading</h1>
          </div>
        }
      >
        <div className="overflow-auto  w-full rounded-md">
          <table className="min-w-full divide-y divide-gray-200 border-[1px]  lg:w-[70rem] rounded-md">
            <thead className="bg-gray-50"></thead>
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Name
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Email
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Level
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                Branch
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {collabratorList?.map((employee) => (
                <tr key={employee._id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 text-start">
                    {employee.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 text-start">
                    {employee.email}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-start">
                    {employee.level}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-start">
                    {employee.branch}
                  </td>
                  <td className="px-6 lg:py-4 py-2 whitespace-nowrap  text-sm font-medium text-start gap-4">
                    {/* <Button
                      size={"sm"}
                      className="w-1/2 mr-2"
                      onClick={() => handleEdit(employee._id)}
                    >
                      Edit
                    </Button> */}
                    <Button
                      variant="outline"
                      size={"sm"}
                      className="w-1/2 mr-2"
                      onClick={() => handleRemove(employee._id)}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Suspense>
    </div>
  );
};

export default CollabratorTable;

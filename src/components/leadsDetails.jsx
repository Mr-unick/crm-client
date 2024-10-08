import React, { useContext, useEffect, useState } from "react";
import {
  Phone,
  MapPin,
  Calendar as Calendericon,
  Check,
  Link,
  TrendingUp,
  Folder,
  PhoneCall,
  User,
  CircleUser,
  Mail,
  MapPinned,
  Pause,
  Users,
  Pin,
  BellRing,
  CalendarClock,
  Route,
  ShieldCheck,
  CircleHelp,
  Pencil,
  CircleArrowLeft,
  CircleArrowRight,
} from "lucide-react";
import {
  Stepper,
  Step,
  StepLabel,
  StepContent,
  Typography,
} from "@mui/material";
import CommentSection from "./commentsection";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { LeadContext } from "@/comtextapi/leadcontext";


import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar"

import { formatTimestamp } from "@/utils/datemethods";
import { updateLead } from "@/services/leadsApi";
import { toast } from "react-toastify";
import { Button } from "./ui/button";
import { DatePickerDemo } from "./datepicker";
import { getCollaborators } from "@/services/collabratorApi";



const LeadDeatilsTable = ({ lead, edit }) => {

const[date ,setDate]=useState(new Date())
const[remainder,Setremainder]=useState(null)
const[updateleadData,setupdatelead]=useState({});
const[loder,setLoder]=useState(false);

const [collabrators,setCollabrators] = useState([])

let loggedinuser = sessionStorage.getItem("user");
let user = JSON.parse(loggedinuser);

let level =user?.level;

const getcollabrators = async (token) => {
  const res2 = await getCollaborators(token);
  const updatedCollaborators = res2.map((collabrator) => ({
    value: collabrator,
    label: collabrator.name,
  }));
  setCollabrators(updatedCollaborators);
};

useEffect(()=>{
getcollabrators(user?.token)


},[edit])

const stageColors = {
     prospect: "text-gray-500",
     opportunity: "text-blue-500",
     qualified: "text-green-500",
     nurture: "text-orange-500",
     reprospect: "text-purple-500",
   };

   const Prioritycolor = (lead) => {
    return (
      (lead.priority === "high" && "bg-red-300") ||
      (lead.priority === "low" && "bg-green-300") ||
      (lead.priority === "medium" && "bg-yellow-300")
    );
  };

  const Activecolor = (lead) => {
    return lead.status === "active" ? "text-blue-600" : "text-red-600";
  };

  const Stagecolor = (lead) => {
    {
      return (
        (lead.stage === "prospect" && "bg-green-400") ||
        (lead.stage === "opportunity" && "bg-blue-400") ||
        (lead.stage === "qualified" && "bg-orange-400") ||
        (lead.stage === "nurture" && "bg-purple-400") ||
        (lead.stage === "reprospect" && "bg-yellow-400")
      );
    }
  };

  const priorityColors =(lead)=>{
    return(
     ( lead ==="high" && "text-red-500")||
     ( lead ==="medium" && "text-yellow-500")||
     ( lead ==="low" && "text-green-500")
    )
   };

   const handleupdate = async (e) => {
    const { name, value } = e.target;
    setupdatelead((prevData) => ({
      ...prevData,
      [name]: value,
    
    }));
    };
  
   const removecollborator =async (id) => {
   console.log(id)
    };

  

  const saveChanges=async()=>{

    setLoder(true)
    const res=await updateLead(user?.token,lead._id,updateleadData)
    if(res.status==200){
      toast.success("Changes Saved")
    }

    setLoder(false)

  }

  
  // (edit && (lead?.Headcollaborator?.email === user.email))



  return (
    <div className="w-full mb-10">
      <div className="grid grid-cols-2 gap-4 text-sm lg:w-full text-[12px] lg:text-[15px]">
        <div className="font-semibold flex justify-start gap-2 items-center">
          <Mail size={18} /> Email
        </div>
        <div className="w-full">
          {(edit && level==="admin") ? (
            <input
              type="text"
              readOnly={false}
              defaultValue={lead.email}
              onChange={handleupdate}
              name="email"
              className="border-[1px] outline-none px-1 py-1 w-full"
            />
          ) : (
            lead.email
          )}
        </div>
        <div className="font-semibold flex justify-start gap-2 items-center">
          <Phone size={18} /> Phone
        </div>
        <div>
          {(edit && level==="admin") ? (
            <input
              type="text"
              readOnly={false}
              onChange={handleupdate}
              name="phone"
              defaultValue={lead.phone}
              className="border-[1px] outline-none px-1 py-1 w-full"
            />
          ) : (
             <a href={`https://wa.me/${lead.phone}`} target="_blank" rel="noopener noreferrer">{lead.phone}</a>
          )}
        </div>
        <div className="font-semibold flex justify-start gap-2 items-center">
          <Phone size={18} /> Second Phone
        </div>
        <div>
          {(edit && level==="admin") ? (
            <input
              type="text"
              readOnly={false}
              defaultValue={lead.secondaryNumber}
               onChange={handleupdate}
              name="secondaryNumber"
              className="border-[1px] outline-none px-1 py-1 w-full"
            />
          ) : (
            lead.secondaryNumber || "none"
          )}
        </div>
        <div className="font-semibold flex justify-start gap-2 items-center">
          <MapPinned size={18} /> Address
        </div>
        <div>
          {(edit &&( (lead?.Headcollaborator?.email === user.email) || level==="admin" )) ? (
            <input
              type="text"
              readOnly={false}
               onChange={handleupdate}
              name="address"
              defaultValue={lead.address}
              className="border-[1px] outline-none px-1 py-1 w-full"
            />
          ) : (
            lead.address || "none"
          )}
        </div>
        <div className="font-semibold flex justify-start gap-2 items-center">
          <Pause size={18} /> Status
        </div>
        <div className={Activecolor( lead.status)}>
          {(edit &&( (lead?.Headcollaborator?.email === user.email) || level==="admin" )) ? (
            <select
            className="border-[1px] outline-none px-1 py-1 w-full"
            defaultValue={lead?.Headcollaborator?.name}
             onChange={handleupdate}
            name="HeadCollaborator"
          >
            <option value={'active'}>Active</option>
            <option value={'inactive'}>Inactive</option>
          </select>
            
          ) : (
            lead.status || "none"
          )}
        </div>
        <div className="font-semibold flex justify-start gap-2 items-center">
          <ShieldCheck size={18} /> Priority
        </div>
        <div className={priorityColors( lead.priority)}>
          {(edit &&( (lead?.Headcollaborator?.email === user.email) || level==="admin" )) ? (
            <select
              className="border-[1px] outline-none px-1 py-1 w-full"
              defaultValue={lead.priority}
               onChange={handleupdate}
              name="priority"
            >
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
            </select>
          ) : (
            lead.priority
          )}
        </div>
        <div className={`font-semibold flex justify-start gap-2 items-center`+ Stagecolor(lead.stage )}>
          <Route size={18} /> Stage
        </div>
        <div>
          {(edit &&( (lead?.Headcollaborator?.email === user.email) || level==="admin" )) ? (
            <select
              className="border-[1px] outline-none px-1 py-1 w-full"
              defaultValue={lead.stage}
               onChange={handleupdate}
              name="stage"
            >
              <option value="prospect">Prospect</option>
              <option value="qualified">Qualified</option>
              <option value="opportunity">Opportunity</option>
              
              <option value="nurture">Nurture</option>
              <option value="re-prospect">Re-prospect</option>
              <option value="customer">Customer</option>
              <option value="lost">Lost</option>
            </select>
          ) : (
            lead.stage || "none"
          )}
        </div>
        <div className="font-semibold flex justify-start gap-2 items-center">
          <Users size={18} /> Collaborators
        </div>
        <div className="flex gap-5">
          {lead.collaborators?.map((collabrator) => {
            return <span className="rounded-md bg-blue-500 px-3 py-1 text-white text-xs font-semibold">@{collabrator?.name}
            <button onClick={() => {
            removecollborator(collabrator?._id);
          }} className="font-bold text-white">X</button>
            </span>;
          })} 
        </div>
        {
          (edit &&( (lead?.Headcollaborator?.email === user?.email) || level==="admin" ))  && 
          <div className="font-semibold flex justify-start gap-2 items-center">
          <Users size={18} /> Add New Collaborator
        </div>
        }
        {
          (edit &&( (lead?.Headcollaborator?.email === user?.email) || level==="admin" ))  && 
          <div className="flex gap-5">

          <select
              className="border-[1px] outline-none px-1 py-1 w-full"
              
               onChange={handleupdate}
              name="collaborators"
            >
              <option value="">Select Collaborator</option>
             {
              collabrators.map((data)=>{
                const { value} =data;
                
                
                return ( <option value={value._id}>{data?.label}</option>)
              })
             }
              
            </select>
          </div>
        }
        
       
        <div className="font-semibold flex justify-start gap-2 items-center">
          <Users size={18} /> Head Collaborator
        </div>
        <div className="flex gap-5">
          {
            (edit &&( (lead?.Headcollaborator?.email === user.email) || level==="admin" )) ? 
            <select
            className="border-[1px] outline-none px-1 py-1 w-full"
           
             onChange={handleupdate}
            name="Headcollaborator"
          >
              <option value="">Select Headcollaborator</option>
           {
            collabrators.map((data)=>{

              const {value}=data;
              
              return ( <option value={value?._id}>{data?.label}</option>)
            })
           }
            
          </select> :
           <p className="rounded-md bg-green-500 px-3 py-1 text-white text-xs font-semibold">
           @{lead?.Headcollaborator?.name}</p>
       
          }
        </div>
        
       
        <div className="font-semibold flex justify-start gap-2 items-center">
          <Pin size={18} /> Branch Code
        </div>
        <div>{lead.branchCode}</div>
        <div className="font-semibold flex justify-start gap-2 items-center">
          <BellRing size={18} /> Reminder
        </div>
        <div>
          {edit ? (
            // <DatePickerDemo Setremainder={Setremainder} onChange={handleupdate}/>
            <input type="date" name="leadReminder" onChange={handleupdate} />
          ) : (
            (lead.leadReminder)?.slice(0,10) || "none"
          )}
        </div>
        <div className="font-semibold flex justify-start gap-2 items-center">
          <CircleHelp size={18} /> Source
        </div>
        <div>{lead.source}</div>
        <div className="font-semibold flex justify-start gap-2 items-center">
          <CalendarClock size={18} /> Date Time Added
        </div>
        <div>{formatTimestamp(lead.dateTimeAdded)}</div>
      </div>
      {
        edit && <button onClick={saveChanges} className="px-3 py-1 mt-8 rounded-md bg-black text-white">
          {
            loder ? "Loading..." : "Save Changes"
        }
        </button>
  
      }
        </div>
  );
};





const LeadDetails = () => {

  const { handleNext, handlePrev ,lead} =useContext(LeadContext);
  
  const[edit,setedit]=useState(false);



  const getRandomColor = () => `#${Math.floor(Math.random()*16777215).toString(16)}`;


  const Usercon =()=>{
  return <div className="rounded-full bg-gray-300 p-1">
    <User color="white"/>
  </div>
}

  return (
    <div className=" p-4 px-8 rounded-lg lg:px-10  xl:w-[60rem] lg:w-[50rem]  md:w-[40rem] sm:w-[24rem] w-[21rem]">
      <div className="flex gap-2 w-full">
        <button
          onClick={() => {
            setedit(edit?false:true);
          }}
        >
          <Pencil size={18} color="gray" />
        </button>
        <button onClick={handlePrev}>
          <CircleArrowLeft size={18} color="gray" />
        </button>
        <button onClick={handleNext}>
          <CircleArrowRight size={18} color="gray" />
        </button>
      </div>
      <h2 className="text-2xl font-bold my-6">{lead?.name}</h2>

      <LeadDeatilsTable lead={lead} edit={edit} />

      {edit && <CommentSection lead={lead} />}

      {lead?.comments?.map((comment, index) => (
        <div className="my-7 text-sm">
          <div className="flex items-center mb-2">
            <span  className="w-10 h-10 rounded-full text-center bg-blue-700 text-white flex justify-center items-center text-xl">{
              JSON.parse(comment?.collaborator)?.name?.charAt(0).toUpperCase()}</span>
            <div className="ml-2">
              <p className="text-gray-800 font-semibold">
                {

                JSON.parse(comment?.collaborator)?.name
                }
              </p>
              <p className="text-gray-600 text-sm">
                {formatTimestamp(comment.dateTimeAdded)}
              </p>
            </div>
          </div>
          <p className="text-gray-700 mb-4">{comment.comment}</p>

          {/* {file && (
            <div className="bg-white p-4 rounded-lg shadow-md">
              {file.type === "image" && (
                <img
                  src={file.url}
                  alt="Uploaded Image"
                  className="max-w-full"
                />
              )}
              {file.type === "pdf" && (
                <div>
                  <embed
                    src={file.url}
                    type="application/pdf"
                    width="100%"
                    height="500"
                  />
                  <a
                    href={file.url}
                    download
                    className="inline-block mt-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                  >
                    Download PDF
                  </a>
                </div>
              )}
            </div>
          )} */}
        </div>
      ))}
    </div>
  );
};

export default LeadDetails;

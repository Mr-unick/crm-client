import React, { useContext, useState } from "react";
import {
  Phone,
  MapPin,
  Calendar,
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



const steps = [
  {
    label: "Select campaign settings",
    description: `For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.`,
  },
  {
    label: "Create an ad group",
    description:
      "An ad group contains one or more ads which target a shared set of keywords.",
  },
  {
    label: "Create an ad",
    description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,
  },
  {
    label: "Select campaign settings",
    description: `For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.`,
  },
  {
    label: "Create an ad group",
    description:
      "An ad group contains one or more ads which target a shared set of keywords.",
  },
  {
    label: "Create an ad",
    description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,
  },
  {
    label: "Select campaign settings",
    description: `For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.`,
  },
  {
    label: "Create an ad group",
    description:
      "An ad group contains one or more ads which target a shared set of keywords.",
  },
  {
    label: "Create an ad",
    description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,
  },
  {
    label: "Select campaign settings",
    description: `For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.`,
  },
  {
    label: "Create an ad group",
    description: `An ad group contains one or more ads which target a shared set of keywords.`,
  },
  {
    label: "Create an ad",
    description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,
  },
];






const LeadDeatilsTable = ({ lead, edit }) => {
   const stageColors = {
     prospect: "text-gray-500",
     opportunity: "text-blue-500",
     qualified: "text-green-500",
     nurture: "text-orange-500",
     reprospect: "text-purple-500",
   };

   const priorityColors = {
     high: "text-red-500",
     medium: "text-yellow-500",
     low: "text-green-500",
   };
  return (
    <div className="w-[60%] mb-10">
      <div className="grid grid-cols-2 gap-4 text-sm w-64 lg:w-full">
        <div className="font-semibold flex justify-start gap-2 items-center">
          <Mail size={18} /> Email
        </div>
        <div>
          {edit ? (
            <input
              type="text"
              readOnly={false}
              defaultValue={lead.email}
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
          {edit ? (
            <input
              type="text"
              readOnly={false}
              defaultValue={lead.phone}
              className="border-[1px] outline-none px-1 py-1 w-full"
            />
          ) : (
            lead.phone
          )}
        </div>
        <div className="font-semibold flex justify-start gap-2 items-center">
          <Phone size={18} /> Second Phone
        </div>
        <div>
          {edit ? (
            <input
              type="text"
              readOnly={false}
              defaultValue={lead.secondphone}
              className="border-[1px] outline-none px-1 py-1 w-full"
            />
          ) : (
            lead.secondphone
          )}
        </div>
        <div className="font-semibold flex justify-start gap-2 items-center">
          <MapPinned size={18} /> Address
        </div>
        <div>
          {edit ? (
            <input
              type="text"
              readOnly={false}
              defaultValue={lead.address}
              className="border-[1px] outline-none px-1 py-1 w-full"
            />
          ) : (
            lead.address
          )}
        </div>
        <div className="font-semibold flex justify-start gap-2 items-center">
          <Pause size={18} /> Status
        </div>
        <div>
          {edit ? (
            <input
              type="text"
              readOnly={false}
              defaultValue={lead.status}
              className="border-[1px] outline-none px-1 py-1 w-full"
            />
          ) : (
            lead.status
          )}
        </div>
        <div className="font-semibold flex justify-start gap-2 items-center">
          <ShieldCheck size={18} /> Priority
        </div>
        <div>
          {edit ? (
            <select
              className="border-[1px] outline-none px-1 py-1 w-full"
              defaultValue={lead.priority}
            >
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
            </select>
          ) : (
            lead.priority
          )}
        </div>
        <div className="font-semibold flex justify-start gap-2 items-center">
          <Route size={18} /> Stage
        </div>
        <div>
          {edit ? (
            <select
              className="border-[1px] outline-none px-1 py-1 w-full"
              defaultValue={lead.stage}
            >
              <option value="prospect">Prospect</option>
              <option value="opportunity">Opportunity</option>
              <option value="qualified">Qualified</option>
              <option value="nurture">Nurture</option>
              <option value="reprospect">Reprospect</option>
            </select>
          ) : (
            lead.stage
          )}
        </div>
        <div className="font-semibold flex justify-start gap-2 items-center">
          <Users size={18} /> Collaborators
        </div>
        <div>{lead.collaborators.join(", ")}</div>
        <div className="font-semibold flex justify-start gap-2 items-center">
          <Pin size={18} /> Branch Code
        </div>
        <div>{lead.branchcode}</div>
        <div className="font-semibold flex justify-start gap-2 items-center">
          <BellRing size={18} /> Remainder
        </div>
        <div>{lead.remainder}</div>
        <div className="font-semibold flex justify-start gap-2 items-center">
          <CircleHelp size={18} /> Source
        </div>
        <div>{lead.source}</div>
        <div className="font-semibold flex justify-start gap-2 items-center">
          <CalendarClock size={18} /> Date Time Added
        </div>
        <div>{lead.datetimeadded}</div>
      </div>
    </div>
  );
};





const LeadDetails = () => {

  const { handleNext, handlePrev ,lead} =useContext(LeadContext);

  console.log(lead, "from comp");
  
  const[edit,setedit]=useState(false)

  const Usercon =()=>{
  return <div className="rounded-full bg-gray-300 p-1">
    <User color="white"/>
  </div>
}

  return (
    <div className="bg-white p-4 rounded-lg shadow-md lg:px-10 ">
      <div className="flex gap-2">
        <button
          onClick={() => {
            setedit(true);
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

      {edit && <CommentSection />}

      {lead?.comments?.map((step, index) => (
        <div className="my-7 text-sm">
          <div className="flex items-center mb-2">
            <img
              src="https://via.placeholder.com/40"
              alt="User Avatar"
              className="w-10 h-10 rounded-full"
            />
            <div className="ml-2">
              <p className="text-gray-800 font-semibold">Username</p>
              <p className="text-gray-600 text-sm">June 1, 2024 at 10:30 AM</p>
            </div>
          </div>
          <p className="text-gray-700 mb-4">
            This is a comment. It can be a multi-line comment with as much text
            as needed. The comment section should be designed in a simple and
            modern way, using Tailwind CSS for styling.
          </p>

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

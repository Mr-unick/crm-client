import React, { useState } from "react";
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


const leaddata = {
  Name: "Ivy Brown",
  Email: "ivyb@example.com",
  Phone: "012-345-6789",
  SecondPhone: "901-234-5678",
  Address: "123 Willow St, Anystate, USA",
  Status: "Inactive",
  Priority: "Low",
  Stage: "Qualified",
  Collaborators: ["Henry White", "Jack Gray"],
  BranchCode: "BR010",
  Remainder: "Verify qualification criteria",
  Source: "SEO",
  DateTimeAdded: "2024-06-02T11:30:00Z",
  Comments: [
    {
      Comment: "Passed initial qualification.",
      User: "Henry White",
      "Date Time": "2024-06-02T11:35:00Z",
    },
  ],
};


const LeadDeatilsTable = ({ lead, edit }) => {

  return (
    <div className="  w-[60%] mb-10">
      <div className="grid grid-cols-2 gap-4 text-sm w-64 lg:w-full ">
        <div className="font-semibold flex justify-start gap-2 items-center">
          <Mail size={18} /> Email
        </div>
        <div>
          {edit ? (
            <input
              type="text"
              readOnly={false}
              defaultValue={lead.Email}
              className="border-[1px] outline-none px-1 py-1 w-full"
            />
          ) : (
            lead.Email
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
              defaultValue={lead.Phone}
              className="border-[1px] outline-none px-1 py-1 w-full"
            />
          ) : (
            lead.Phone
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
              defaultValue={lead.SecondPhone}
              className="border-[1px] outline-none px-1 py-1 w-full"
            />
          ) : (
            lead.SecondPhone
          )}
        </div>
        <div className="font-semibold flex justify-start gap-2 items-center">
          <MapPinned size={18} />
          Address
        </div>
        <div>
          {edit ? (
            <input
              type="text"
              readOnly={false}
              defaultValue={lead.Address}
              className="border-[1px] outline-none px-1 py-1 w-full"
            />
          ) : (
            lead.Address
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
              defaultValue={lead.Status}
              className="border-[1px] outline-none px-1 py-1 w-full"
            />
          ) : (
            lead.Status
          )}
        </div>
        <div className="font-semibold flex justify-start gap-2 items-center">
          <ShieldCheck size={18} />
          Priority
        </div>
        <div>
          {edit ? (
            <select
              className="border-[1px] outline-none px-1 py-1 w-full"
              defaultValue={lead.Priority}
            >
              <option value="high">high</option>
              <option value="high">low</option>
              <option value="high">Medium</option>
            </select>
          ) : (
            lead.Priority
          )}
        </div>
        <div className="font-semibold flex justify-start gap-2 items-center">
          <Route size={18} /> Stage
        </div>
        <div>
          {edit ? (
            <select
              className="border-[1px] outline-none px-1 py-1 w-full"
              defaultValue={lead.Stage}
            >
              <option value="high">Prospect</option>
              <option value="high">Opportunity</option>
              <option value="high">Qualified</option>
              <option value="high">Nurture</option>
              <option value="high">Reprospect</option>
            </select>
          ) : (
            lead.Stage
          )}
        </div>
        <div className="font-semibold flex justify-start gap-2 items-center">
          <Users size={18} /> Collaborators
        </div>
        <div>{lead.Collaborators.join(", ")}</div>
        <div className="font-semibold flex justify-start gap-2 items-center">
          <Pin size={18} /> Branch Code
        </div>
        <div>{lead.BranchCode}</div>
        <div className="font-semibold flex justify-start gap-2 items-center">
          <BellRing size={18} /> Remainder
        </div>
        <div>{lead.Remainder}</div>
        <div className="font-semibold flex justify-start gap-2 items-center">
          <CircleHelp size={18} /> Source
        </div>
        <div>{lead.Source}</div>
        <div className="font-semibold flex justify-start gap-2 items-center">
          <CalendarClock size={18} /> Date Time Added
        </div>
        <div>{lead.DateTimeAdded}</div>
      </div>
    </div>
  );
};



const LeadDetails = ({lead}) => {
  console.log(lead,"from comp");
  
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
        <button
          onClick={() => {
            setedit(true);
          }}
        >
          <CircleArrowLeft size={18} color="gray" />
        </button>
        <button
          onClick={() => {
            setedit(true);
          }}
        >
          <CircleArrowRight size={18} color="gray" />
        </button>
      </div>
      <h2 className="text-2xl font-bold my-6">Ajay Gupta</h2>

      <LeadDeatilsTable lead={leaddata} edit={edit} />

      {edit && <CommentSection />}

      {steps.map((step, index) => (
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

import React from "react";
import { Edit, Trash2 } from "lucide-react";
import { leadsData } from "@/const";



export const LeadTable = () => {

   const Prioritycolor=(lead) =>{  return (lead.priority === "high" && "bg-red-300") ||
     (lead.priority === "low" && "bg-green-300") ||
     (lead.priority === "medium" && "bg-yellow-300");}

   const Activecolor = (lead) => {
     return lead.status === "active" ? "text-blue-600" : "text-red-600";
   };
   
   const Stagecolor=(lead)=>{
    {
      return (
        (lead.stage === "prospect" && "bg-green-400") ||
        (lead.stage === "opportunity" && "bg-blue-400") ||
        (lead.stage === "qualified" && "bg-orange-400") ||
        (lead.stage === "nurture" && "bg-purple-400") ||
        (lead.stage === "reprospect" && "bg-yellow-400")
      );
    }
   }
  const handleEdit = (leadId) => {
    // Implement edit logic here
    console.log(`Editing lead with ID: ${leadId}`);
  };

  const handleRemove = (leadId) => {
    // Implement remove logic here
    console.log(`Removing lead with ID: ${leadId}`);
  };

  return (
    <div className="flex flex-col w-full bg-red-300 my-5 ">
      <table className="min-w-full divide-y  border-[1px] pr-20 bg-red-700">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-x-[1px]">
              Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-x-[1px]">
              Email
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-x-[1px]">
              Status
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-x-[1px]">
              Priority
            </th>

            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-x-[1px]">
              Stage
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-x-[1px]">
              Collaborators
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-x-[1px]">
              Lead Reminder
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-x-[1px]">
              Address
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-x-[1px]">
              Source
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-x-[1px]">
              Ad Source
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-x-[1px]">
              Phone
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-x-[1px]">
              Secondary Number
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-x-[1px]">
              Branch Code
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-x-[1px]">
              Date Added
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {leadsData.map((lead) => (
            <tr key={lead.id}>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-x-[1px]">
                {lead.name}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 border-x-[1px]">
                {lead.email}
              </td>
              <td
                className={`px-6 py-4 whitespace-nowrap text-sm ${Activecolor(
                  lead
                )} border-x-[1px]`}
              >
                {lead.status}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 border-x-[1px]">
                <span
                  className={`p-1 px-3 ${Prioritycolor(
                    lead
                  )} rounded-lg text-white`}
                >
                  {lead.priority}
                </span>
              </td>

              <td
                className={`px-6 py-4 whitespace-nowrap text-sm text-gray-500 border-x-[1px] `}
              >
                <span className={`${Stagecolor(lead)} text-white px-3 py-1 rounded-sm`}>{lead.stage}</span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 border-x-[1px]">
                {lead.collaborators.join(", ")}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 border-x-[1px]">
                {lead.leadReminder}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 border-x-[1px]">
                {lead.address}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 border-x-[1px]">
                {lead.source}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 border-x-[1px]">
                {lead.adSource || "-"}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 border-x-[1px]">
                {lead.phone}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 border-x-[1px]">
                {lead.secondaryNumber}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 border-x-[1px]">
                {lead.branchCode}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 border-x-[1px]">
                {lead.dateAdded}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );}



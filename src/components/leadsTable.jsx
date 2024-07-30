import React from "react";
import { Edit, Trash2 } from "lucide-react";
import { leadsData } from "@/const";
import { formatTimestamp } from "@/utils/datemethods";
import { ScrollArea } from "@/components/ui/scroll-area"


export const LeadTable = ({ leads }) => {

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
  const handleEdit = (leadId) => {
    // Implement edit logic here
    console.log(`Editing lead with ID: ${leadId}`);
  };

  const handleRemove = (leadId) => {
    // Implement remove logic here
    console.log(`Removing lead with ID: ${leadId}`);
  };

  const getRandomColorById = (id) =>
    `#${((id & 0x00ffffff) | 0x1000000).toString(16).slice(1).toUpperCase()}`;

  return (
    <div className="flex flex-col w-full bg-red-300 my-5 overflow-auto ">
      <ScrollArea  className="h-screen pb-10">

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
        <tbody className="bg-white divide-y divide-gray-200 font-semibold">
          {leads.map((lead) => (
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
                  )} rounded-sm text-white`}
                >
                  {lead.priority}
                </span>
              </td>

              <td
                className={`px-6 py-4 whitespace-nowrap text-sm text-gray-500 border-x-[1px] `}
              >
                <span
                  className={`${Stagecolor(
                    lead
                  )} text-white px-3 py-1 rounded-sm`}
                >
                  {lead.stage}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 border-x-[1px] flex gap-2">
                {lead.collaborators?.map((collaborator) => {
                  return (
                    <span
                      className={`px-3  bg-blue-400 text-white rounded-sm py-1`}
                    >
                      @{collaborator.name}
                    </span>
                  );
                })}
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
                {formatTimestamp(lead.dateTimeAdded)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </ScrollArea>
    </div>
  );
};



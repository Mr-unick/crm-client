import React from "react";
import { Edit, Trash2 } from "lucide-react";

const dummyData = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    status: "Active",
    priority: "High",
    commentNotes: "Interested in our product",
    stage: "Prospect",
    collaborators: ["Jane Smith", "Bob Johnson"],
    leadReminder: "2023-06-15",
    address: "123 Main St, Anytown USA",
    source: "Website form",
    adSource: null,
    phone: "+1 (555) 555-5555",
    secondaryNumber: "+1 (555) 555-5556",
    branchCode: "ABC123",
    dateAdded: "2023-05-30T10:30:00Z",
  },
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    status: "Active",
    priority: "High",
    commentNotes: "Interested in our product",
    stage: "Prospect",
    collaborators: ["Jane Smith", "Bob Johnson"],
    leadReminder: "2023-06-15",
    address: "123 Main St, Anytown USA",
    source: "Website form",
    adSource: null,
    phone: "+1 (555) 555-5555",
    secondaryNumber: "+1 (555) 555-5556",
    branchCode: "ABC123",
    dateAdded: "2023-05-30T10:30:00Z",
  },
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    status: "Active",
    priority: "High",
    commentNotes: "Interested in our product",
    stage: "Prospect",
    collaborators: ["Jane Smith", "Bob Johnson"],
    leadReminder: "2023-06-15",
    address: "123 Main St, Anytown USA",
    source: "Website form",
    adSource: null,
    phone: "+1 (555) 555-5555",
    secondaryNumber: "+1 (555) 555-5556",
    branchCode: "ABC123",
    dateAdded: "2023-05-30T10:30:00Z",
  },
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    status: "Active",
    priority: "High",
    commentNotes: "Interested in our product",
    stage: "Prospect",
    collaborators: ["Jane Smith", "Bob Johnson"],
    leadReminder: "2023-06-15",
    address: "123 Main St, Anytown USA",
    source: "Website form",
    adSource: null,
    phone: "+1 (555) 555-5555",
    secondaryNumber: "+1 (555) 555-5556",
    branchCode: "ABC123",
    dateAdded: "2023-05-30T10:30:00Z",
  },
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    status: "Active",
    priority: "High",
    commentNotes: "Interested in our product",
    stage: "Prospect",
    collaborators: ["Jane Smith", "Bob Johnson"],
    leadReminder: "2023-06-15",
    address: "123 Main St, Anytown USA",
    source: "Website form",
    adSource: null,
    phone: "+1 (555) 555-5555",
    secondaryNumber: "+1 (555) 555-5556",
    branchCode: "ABC123",
    dateAdded: "2023-05-30T10:30:00Z",
  },
];

export const LeadTable = () => {
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
            {dummyData.map((lead) => (
              <tr key={lead.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-x-[1px]">
                  {lead.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 border-x-[1px]">
                  {lead.email}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 border-x-[1px]">
                  {lead.status}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 border-x-[1px]">
                  <span className="p-1 px-3 bg-red-300 rounded-lg">
                    {lead.priority}
                  </span>
                </td>
               
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 border-x-[1px]">
                  {lead.stage}
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



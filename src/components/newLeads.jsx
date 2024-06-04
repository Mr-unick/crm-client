import React, { useState } from "react";
import Select from 'react-select';


const data = [
  {
    id: 1,
    name: "Alice Johnson",
    email: "alice.johnson@example.com",
    level: "Junior",
  },
  {
    id: 2,
    name: "Bob Smith",
    email: "bob.smith@example.com",
    level: "Senior",
  },
  {
    id: 3,
    name: "Charlie Brown",
    email: "charlie.brown@example.com",
    level: "Mid",
  },
  {
    id: 4,
    name: "Daisy Lee",
    email: "daisy.lee@example.com",
    level: "Junior",
  },
  {
    id: 5,
    name: "Ethan Hawke",
    email: "ethan.hawke@example.com",
    level: "Senior",
  },
  {
    id: 6,
    name: "Fiona Apple",
    email: "fiona.apple@example.com",
    level: "Mid",
  },
  {
    id: 7,
    name: "George Martin",
    email: "george.martin@example.com",
    level: "Junior",
  },
  {
    id: 8,
    name: "Hannah Baker",
    email: "hannah.baker@example.com",
    level: "Senior",
  },
  {
    id: 9,
    name: "Ivy Carter",
    email: "ivy.carter@example.com",
    level: "Mid",
  },
  {
    id: 10,
    name: "Jack Daniels",
    email: "jack.daniels@example.com",
    level: "Junior",
  },
  {
    id: 11,
    name: "Karen White",
    email: "karen.white@example.com",
    level: "Senior",
  },
  {
    id: 12,
    name: "Leo King",
    email: "leo.king@example.com",
    level: "Mid",
  },
  {
    id: 13,
    name: "Mia Wong",
    email: "mia.wong@example.com",
    level: "Junior",
  },
  {
    id: 14,
    name: "Nathan Drake",
    email: "nathan.drake@example.com",
    level: "Senior",
  },
  {
    id: 15,
    name: "Olivia Wilde",
    email: "olivia.wilde@example.com",
    level: "Mid",
  },
];



const employees = [
  { id: 1, name: 'Alice Johnson', email: 'alice.johnson@example.com', level: 'Junior' },
  { id: 2, name: 'Bob Smith', email: 'bob.smith@example.com', level: 'Senior' },
  // Add more employees as needed
];

const NewLeadsTable = () => {
  const [selectedRows, setSelectedRows] = useState([]);
  const [selectedCollabrators, setSelectedCollabrators] = useState([]);
  const [selectPriority, setSelectPriority] = useState(null);
  const [leads, setLeads] = useState(data);

  const collabratorOptions = [
    { value: 'alice', label: 'Alice Johnson' },
    { value: 'bob', label: 'Bob Smith' },
    { value: 'charlie', label: 'Charlie Brown' },
    // Add more options as needed
  ];

  const priorityOptions = [
    { value: 'high', label: 'High' },
    { value: 'medium', label: 'Medium' },
    { value: 'low', label: 'Low' },
  ];

  const handleSelectRow = (employeeId) => {
    setSelectedRows(prevSelectedRows =>
      prevSelectedRows.includes(employeeId)
        ? prevSelectedRows.filter(id => id !== employeeId)
        : [...prevSelectedRows, employeeId]
    );
  };

  const handleSelectAllRows = () => {
    setSelectedRows(selectedRows.length === leads.length ? [] : leads.map(employee => employee.id));
  };

  const handleApplyCollabrators = () => {
    if (selectedCollabrators.length && selectPriority) {
      const updatedEmployees = leads.map((employee) =>
        selectedRows.includes(employee.id)
          ? {
              ...employee,
              collabrators: selectedCollabrators.map(
                (collabrator) => collabrator.value
              ),
              priority: selectPriority.value
            }
          : employee
      );

      setLeads(updatedEmployees);
      setSelectedRows([]);
      setSelectedCollabrators([]);
      setSelectPriority(null);
    }
  };

  return (
    <div className="overflow-x-auto ml-8">
      <div className=" hidden mb-4 lg:flex mt-3">
        <Select
          isMulti
          value={selectedCollabrators}
          onChange={setSelectedCollabrators}
          options={collabratorOptions}
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
        <button
          onClick={handleApplyCollabrators}
          className="ml-4 px-4 py-1 bg-black w-[20%] text-white rounded-md"
        >
          Apply Changes
        </button>
      </div>

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
                Level
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Collaborators
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Priority
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {leads.map((employee) => (
              <tr key={employee.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 text-start">
                  <input
                    type="checkbox"
                    checked={selectedRows.includes(employee.id)}
                    onChange={() => handleSelectRow(employee.id)}
                  />
                </td>
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
                  {employee.collabrators
                    ? employee.collabrators.join(", ")
                    : "None"}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-start">
                  {employee.priority || "None"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};







export default NewLeadsTable;

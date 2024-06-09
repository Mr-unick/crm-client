import React, { useState, useEffect } from "react";
import sortBy from "sort-by";
import {
  ChevronDown,
  ChevronUp,
  Filter,
  ArrowUp,
  ArrowDown,
  Cross,
  X,
} from "lucide-react";

import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";


const NotionComponent = () => {
  const data = [
    { id: 1, name: "Project Alpha", date: "2024-05-30" },
    { id: 2, name: "Meeting Notes", date: "2024-06-03" },
    { id: 3, name: "Personal To-Do List", date: "2024-05-20" },
    { id: 4, name: "Market Research Report", date: "2024-05-25" },
    { id: 5, name: "Travel Itinerary", date: "2024-06-10" },
  ];

  const [sortArray, setSortArray] = useState([]); // Initial sort criteria
  const [sortDirection, setSortDirection] = useState("desc"); // Initial sort direction
  const [tableData, setTableData] = useState(data); // Initial table data

  const options = ["id", "name", "date"];

  const handleSortChange = (criteria) => {
    const newSortArray = sortArray.includes(criteria)
      ? sortArray.filter((item) => item !== criteria)
      : [...sortArray, criteria];
    setSortArray(newSortArray);
  };

  const removeSortCriteria = (index) => {
    const updatedSortArray = [...sortArray];
    updatedSortArray.splice(index, 1);
    setSortArray(updatedSortArray);
  };

  useEffect(() => {
    const sortedData =
      sortArray.length > 0
        ? data.sort(
            sortBy(...sortArray, { descending: sortDirection === "desc" })
          )
        : data;
    setTableData(sortedData);
  }, [sortArray, sortDirection]);

  return (
    <div className="container mx-auto py-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-semibold">Notion Data</h2>
        <div className="flex items-center">
          <Filter className="text-gray-500 mr-2" size={20} />
          <span className="text-gray-500 font-medium">Sort By:</span>
          <button
            onClick={() =>
              setSortDirection((prevDirection) =>
                prevDirection === "asc" ? "desc" : "asc"
              )
            }
            className={`ml-2 py-1 px-2 rounded-full inline-flex items-center transition-colors duration-300 ${
              sortDirection === "asc"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-800 hover:bg-gray-300"
            }`}
          >
            {sortDirection === "asc" ? (
              <ArrowUp size={16} />
            ) : (
              <ArrowDown size={16} />
            )}
          </button>
        </div>
      </div>
      
      <div className="border rounded-md p-4 mb-4 w-[50%] ">
        <div className="text-primary">
          {sortArray.map((criteria, index) => (
            <span
              key={index}
              className="border text-gray-800 py-1 px-2 rounded-md inline-flex items-center mr-2 mb-2"
            >
              {criteria}
              <button
                onClick={() => removeSortCriteria(index)}
                className="ml-2 text-gray-500 hover:text-gray-700 "
              >
                <X size={15} />
              </button>
            </span>
          ))}
        </div>

        <div className="flex items-start  flex-col ">
          <Command className="border">
            <CommandInput placeholder="Type a command or search..." />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>

              {options.map((option) => (
                <CommandItem>
                  <button className="w-full text-start" key={option} onClick={() => handleSortChange(option)}>
                    {option}
                  </button>
                </CommandItem>
              ))}
            </CommandList>
          </Command>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {tableData.map((data) => (
              <tr key={data.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {data.id}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {data.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {data.date}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default NotionComponent;

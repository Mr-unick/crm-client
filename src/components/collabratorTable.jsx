import React from "react";
import { Delete, Edit, Trash2 } from "lucide-react";
import {
  Dialog,
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







const CollabratorTable = () => {
  const employees = [
    { id: 1, email: "john@example.com", level: "Operation Manager", name: "Nikhil Lende " },
    {
      id: 2,
      email: "jane@example.com",
      level: "Sales Professional",
      name: "Sonu Gawali ",
    },
    {
      id: 3,
      email: "bob@example.com",
      level: "Interior Designer",
      name: "Ritik Reddy ",
    },
    // Add more employees as needed
  ];

  const handleEdit = (employeeId) => {
    // Implement edit logic here
    console.log(`Editing employee with ID: ${employeeId}`);
  };

  const handleRemove = (employeeId) => {
    // Implement remove logic here
    console.log(`Removing employee with ID: ${employeeId}`);
  };

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
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="email"
                  placeholder="Enter Email"
                ></input>
              </div>
            </div>
            <div className="mt-2 w-full">
              <Select className="mt-2">
                <SelectTrigger className="border border-gray-300">
                  <SelectValue placeholder="Select Level" />
                </SelectTrigger>
                <SelectContent className="bg-white placeholder:text-gray-400 ">
                  <SelectItem value="light" className="hover:bg-slate-400">
                    Sales Professional
                  </SelectItem>
                  <SelectItem value="dark" className="hover:bg-slate-400">
                    Interior Designer
                  </SelectItem>
                  <SelectItem value="system" className="hover:bg-slate-400">
                    Operation Manager
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <div className="flex items-center justify-between"></div>
              <div className="mt-2">
                <input
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
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="password"
                  placeholder="Confirm Password"
                ></input>
              </div>
            </div>

            <button
              type="button"
              className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black my-4 w-full"
            >
              ADD
            </button>
          </form>
        </DialogContent>
      </Dialog>

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
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {employees.map((employee) => (
              <tr key={employee.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 text-start">
                  {employee.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 text-start">
                  {employee.email}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-start">
                  {employee.level}
                </td>
                <td className="px-6 lg:py-4 py-2 whitespace-nowrap  text-sm font-medium text-start gap-4">
                  <Button
                    size={"sm"}
                    className="w-1/2 mr-2"
                    onClick={() => handleEdit(employee.id)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="outline"
                    size={"sm"}
                    className="w-1/2 mr-2"
                    onClick={() => handleRemove(employee.id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CollabratorTable;

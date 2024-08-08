import React, { useState } from "react";
import { Upload } from "lucide-react";
import * as XLSX from "xlsx";
import { useNavigate } from "react-router-dom";

const UploadLeads = () => {

  const [file, setFile] = useState(null);
  const [jsonData, setJsonData] = useState(null);
  const navigate=useNavigate();

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
    readExcelFile(selectedFile);
  };

  const readExcelFile = (file) => {
    const reader = new FileReader();

    reader.onload = (e) => {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: "array" });
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];
      const json = XLSX.utils.sheet_to_json(worksheet);
      setJsonData(json);
      console.log("Extracted JSON data:", json);
    };

    reader.readAsArrayBuffer(file);
  };

  const handleUpload = () => {
    // Handle further upload logic here, like sending the JSON data to the server

    let newleads=JSON.stringify(jsonData)
    sessionStorage.setItem('newleads',newleads);
    navigate('/dash/newleads')

    
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen">
      <div className="bg-white rounded-lg p-6 max-w-md w-full lg:mr-40">
        <div className="flex items-center justify-center mb-4">
          <Upload size={48} className="text-gray-400" />
        </div>
        <h2 className="text-xl font-semibold mb-4 text-center">
          Upload Excel Sheet
        </h2>
        <div className="mb-4">
          <label
            htmlFor="file-upload"
            className="flex items-center justify-center px-4 py-2 bg-gray-800 text-white rounded-md cursor-pointer"
          >
            <span>Choose File</span>
          </label>
          <input
            id="file-upload"
            type="file"
            accept=".xlsx, .xls"
            className="hidden"
            onChange={handleFileChange}
          />
        </div>
        {file && (
          <div className="text-sm text-gray-500 mb-4">
            Selected file: {file.name}
          </div>
        )}
        <button
          onClick={handleUpload}
          className="w-full bg-gray-800 text-white py-2 rounded-md hover:bg-gray-700 transition-colors duration-300"
          disabled={!file}
        >
          Upload
        </button>
        
      </div>
    </div>
  );
};

export default UploadLeads;

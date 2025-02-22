import { FileUpIcon, Image, Upload } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { Button } from "./ui/button";
import { addComment } from "@/services/leadsApi";
import { toast } from "react-toastify";
import { CircularProgress } from "@mui/material";
import { Form, useFetcher } from "react-router-dom";

const CommentSection = ({ lead, SetLeadState }) => {


  const [comment, setComment] = useState("");
  const [image, setImage] = useState("");
  const [pdf, setPdf] = useState(null);
  const [loader, setLoader] = useState(false);
  const[ fileloader,setfileloader]=useState(false);

  const imagedata = useRef();

  const loggedinuser = sessionStorage.getItem("user");
  const user = JSON.parse(loggedinuser);

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

const statechange = ()=>{
  setImage(sessionStorage.getItem('imageurl'))
  setPdf(sessionStorage.getItem('pdfurl'))
  setfileloader(true)
}


  const handleImageUpload = async (e) => {
 
    setfileloader(true)
    const file = e.target.files[0];
    const formdatatat = new FormData();

    formdatatat.append('image',file)
    
    formdatatat.append('comment','null')

    // imagedata.current = file;

    const res = await addComment(user?.token, lead?._id, formdatatat);
    if(res.status == 200){
      alert('Image Uploaded')
    }

    sessionStorage.setItem('imageurl',res.data.
      imageUrl
      )
    setImage(res.data.imageUrl);
    statechange()
    setfileloader(false)
  };
  
  const handlePdfUpload =async (e) => {
    setfileloader(true)
    const file = e.target.files[0];
    console.log("Selected PDF file:", file); // Debugging

    const formdatatat = new FormData();

    formdatatat.append('pdf',file)
    
    formdatatat.append('comment','null')

    // imagedata.current = file;

    const res = await addComment(user?.token, lead?._id, formdatatat);
    if(res.status == 200){
      alert('Pdf Uploaded')
    }

    sessionStorage.setItem('pdfurl',res.data.
      pdfUrl
      )
      setPdf(res.data.
        pdfUrl);
    e.target.value = null; 
    statechange()
    setfileloader(false)
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoader(true);

    const collaborator = {
      name: user?.name,
      email: user?.email,
      level: user?.level,
    };

    const data ={
      collaborator:collaborator,
      comment : comment,
      imageUrl : sessionStorage.getItem('imageurl'),
      pdfUrl : sessionStorage.getItem('pdfurl')
    };

    try {
      const res = await addComment(user?.token, lead?._id, data);

      if (res.status === 200) {
        toast.success(res.message);
        SetLeadState(res.lead);
        setComment("");
        setImage(null);
        setPdf(null);
        sessionStorage.removeItem('imageurl')
        sessionStorage.removeItem('pdfurl')
      } else {
        toast.error(res.message);
      }
    } catch (error) {
      toast.error("An error occurred while submitting the form.");
    } finally {
      setLoader(false);
    }
  };

  useEffect(()=>{
  
  },[image])
  
console.log(image)
  return (
    <div className="bg-gray-100 p-4 rounded-md">
      <div className="flex gap-5">
        <div className="flex items-start justify-start mb-4 flex-col">
          <div className="flex">
            <label htmlFor="image-upload" className="cursor-pointer mr-2">
              <Image className="text-gray-500 hover:text-gray-700" size={24} />
            </label>
            <input
              id="image-upload"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImageUpload}
            />
            <span className="text-sm text-gray-500">
              {fileloader ? "wait..." : "Upload an image (optional)"}
            </span>
          </div>
        </div>

        <div className="flex items-center mb-4">
          <label htmlFor="pdf-upload" className="cursor-pointer mr-2">
            <FileUpIcon className="text-gray-500 hover:text-gray-700" size={24} />
          </label>
          <input
            id="pdf-upload"
            type="file"
            accept=".pdf"
            className="hidden"
            onChange={handlePdfUpload}
          />
          <span className="text-sm text-gray-500">
          {fileloader ? "wait..." : "Upload an pdf (optional)"}
          </span>
        </div>
      </div>

     
    
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <textarea
            className="w-full border border-gray-300 rounded-md p-2 resize-none outline-none"
            rows="4"
            placeholder="Enter your comment..."
            value={comment}
            onChange={handleCommentChange}
          ></textarea>
        </div>

        <Button type="submit" className="w-32" disabled={loader}>
          {loader ? <CircularProgress color="inherit" className="text-sm" size={25} /> : "Submit"}
        </Button>
      </form>
    </div>
  );
};

export default CommentSection;
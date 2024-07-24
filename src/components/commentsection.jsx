import { FileUpIcon, Image, Upload } from "lucide-react";
import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";
import axios from "axios";
import { addComment } from "@/services/leadsApi";
import { toast } from "react-toastify";
import { CircularProgress } from "@mui/material";

const CommentSection = ({ lead }) => {
  const [data, setdata] = useState({});
  const [comment, setComment] = useState("");
  const [image, setImage] = useState(null);
  const [pdf, setPdf] = useState(null);
  const [submitted, setSubmitted] = useState(false); 
  const[loader,setloader]=useState(false)

  let loggedinuser = localStorage.getItem("user");
  let user = JSON.parse(loggedinuser);

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
   
    setImage(file);
    // const reader = new FileReader();

    // reader.onloadend = () => {
    //   setImage(reader.result);
    // };

    // if (file) {
    //   reader.readAsDataURL(file);
    // }
  };

  const handlePdfUpload = (e) => {
    const file = e.target.files[0];
    setPdf(file)
    // const reader = new FileReader();

    // reader.onloadend = () => {
    //   setPdf(reader.result);
    // };

    // if (file) {
    //   reader.readAsDataURL(file);
    // }
  };

  const handleSubmit = async (e) => {
    setloader(true)
    e.preventDefault();
    // setdata({
    //   comment: comment,
    //   imageUrl: image,
    //   pdfUrl: pdf,
    //   collaborator: { name: user.name, email: user.email, level: user.level },
    // });

    const formData = new FormData();
    formData.append("comment", comment);
    if (image) {
      formData.append("image", image);
    }
    if (pdf) {
      formData.append("pdf", pdf);
    }

    // Append collaborator object as JSON string
    const collaborator = {
      name: user.name,
      email: user.email,
      level: user.level,
    };
    
    formData.append("collaborator", JSON.stringify(collaborator));

    for (let pair of formData.entries()) {
      console.log(pair[0], pair[1]);
    }

     let res = await addComment(user.token, lead._id, formData);

     if (res.status == 200) {
      setloader(false)
       toast.success(res.message);

     } else {
      setloader(false);
       toast.error(res.message);
     }

    setSubmitted(true);
  };

  

  
  useEffect(() => {
    if (submitted) {
      setComment("");
      setImage(null);
      setPdf(null);
      setSubmitted(false); 
    }
  }, [data, submitted]);

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
              {image ? "Image selected" : "Upload an image (optional)"}
            </span>
          </div>
        </div>
       
        <div className="flex items-center mb-4">
          <label htmlFor="pdf-upload" className="cursor-pointer mr-2">
            <FileUpIcon
              className="text-gray-500 hover:text-gray-700"
              size={24}
            />
          </label>
          <input
            id="pdf-upload"
            type="file"
            accept=".pdf"
            className="hidden"
            onChange={handlePdfUpload}
          />
          <span className="text-sm text-gray-500">
            {pdf ? "PDF selected" : "Upload a PDF (optional)"}
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

        <Button type="submit" className="w-32">
          {loader ? <CircularProgress color="inherit" className="text-sm" size={25} /> : "Submit"}
        </Button>
      </form>
    </div>
  );
};

export default CommentSection;

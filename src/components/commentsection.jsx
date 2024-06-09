import { FileUpIcon, Image } from "lucide-react";
import React, { useState } from "react";
import { Button } from "./ui/button";


const CommentSection = () => {
  const [comment, setComment] = useState("");
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [pdf, setPdf] = useState(null);

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setImage(file);
  
  };

  const handlePdfUpload = (e) => {
    setPdf(e.target.files[0]);
    
  };

 

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Comment:", comment);
    console.log("Image:", image);
    console.log("PDF:", pdf);
    // Reset form fields
    setComment("");
    setImage(null);
    setImagePreview(null);
    setPdf(null);
  };

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
              {image !== null ? image.name : " Upload an image (optional)"}
            </span>
          </div>
        </div>
        <div className="flex items-center mb-4 ">
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
            {pdf !== null ? pdf.name : " Upload A Pdf (optional)"}
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

        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default CommentSection;

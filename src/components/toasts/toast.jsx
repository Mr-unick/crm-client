import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

  export const notifySuccess = () => {
    toast.success("Success! Your action was successful.", {
      className: "bg-green-500 text-white",
      bodyClassName: "font-bold",
      progressClassName: "bg-green-200",
      autoClose: 3000,
      position: "bottom-right",
    });
  };

  export const notifyError = () => {
    toast.error("Reached Limit", {
      className: "bg-gray-600 text-white",
      bodyClassName: "font-semibold",
      progressClassName: "bg-white",
      autoClose: 3000,
      position:"bottom-right",
      hideProgressBar:true

    });
  };

  

  


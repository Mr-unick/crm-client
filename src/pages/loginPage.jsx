import React, { useContext, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { signInCollaborator } from "@/services/collabratorApi";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "@/App";
import DeatilsDrawer from "@/components/Drawer";
import { ToastContainer, toast } from "react-toastify";
import { CircularProgress } from "@mui/material";


export function LoginPage() {

  const [loginData,SetLoginData]=useState({})
  const[loader,setloader]=useState(false)
  const[open,setopen]=useState(false)
  const navigate=useNavigate()



  const handlechange=(e)=>{
    
 SetLoginData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  const handlelogin=async()=>{

setloader(true)
   let res= await signInCollaborator(loginData);
   if(res.status==200){
    sessionStorage.setItem('user',JSON.stringify(res));
    navigate('/dash')
     toast.success("Logged In");
     setloader(false)
   }else{
    toast.error(res.message)
     setloader(false);
   }
  

  }

  
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-2 h-screen p-1 text-primary ">
        <div className="relative lg:flex items-end px-4 pb-10 pt-60 sm:px-6 sm:pb-16 md:justify-center lg:px-8 lg:pb-24 lg:visible hidden">
          <div className="absolute inset-0">
            <img
              className="h-full w-full rounded-md object-cover object-left"
              src="https://img.freepik.com/free-vector/abstract-realistic-technology-particle-background_23-2148420656.jpg"
              alt=""
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
          <div className="relative">
            <div className="w-full max-w-xl xl:mx-auto xl:w-full xl:max-w-xl xl:pr-24">
              <h3 className="text-4xl font-bold text-white text-start">
                Building Stronger Customer Connections, One Interaction at a
                Time
              </h3>
              <ul className="mt-10 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
                <li className="flex items-center space-x-3">
                  <div className="inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-500">
                    <svg
                      className="h-3.5 w-3.5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <span className="text-lg font-medium text-white">
                    {" "}
                    Contact Management{" "}
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-500">
                    <svg
                      className="h-3.5 w-3.5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <span className="text-lg font-medium text-white">
                    {" "}
                    Sales Management{" "}
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-500">
                    <svg
                      className="h-3.5 w-3.5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <span className="text-lg font-medium text-white">
                    {" "}
                    Analytics{" "}
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-500">
                    <svg
                      className="h-3.5 w-3.5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <span className="text-lg font-medium text-white">
                    {" "}
                    Customer Support{" "}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* <button onClick={notify}>CLick</button>
        <ToastContainer /> */}
        <div className="flex lg:hidden">
          <img src="./login.jpg" />
        </div>
        <div className="flex items-center justify-center px-4 py-0 sm:px-6 sm:py-16 lg:px-8 lg:py-24 -mt-20  lg:mt-0 bg-gray-100">
          <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md  w-[90%]">
            <div className="flex justify-start items-start w-1/2 -mt-12"><img src="logo1.png" alt="logo" /></div>
            <h2 className="font-normal text-gray-500 text-2xl my-5">Log in to your Account</h2>
            <form action="#" method="POST" className="mt-8">
              <div className="space-y-5">
                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor=""
                      className="text-base font-medium text-gray-900"
                    >
                      {" "}
                      Username{" "}
                    </label>
                  </div>
                  <div className="mt-2">
                    <input
                      name="email"
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="email"
                      placeholder="Enter Username"
                      onChange={handlechange}
                    ></input>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor=""
                      className="text-base font-medium text-gray-900"
                    >
                      {" "}
                      Password{" "}
                    </label>
                    <a
                      href="#"
                      title=""
                      className="text-sm font-semibold text-black hover:underline"
                    >
                      {" "}
                      Forgot password?{" "}
                    </a>
                  </div>
                  <div className="mt-2">
                    <input
                      name="password"
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="password"
                      placeholder="Password"
                      onChange={handlechange}
                    ></input>
                  </div>
                </div>
                <div>
                  <Button
                    onClick={handlelogin}
                    type="button"
                    className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                  >
                    {loader ? (
                      <CircularProgress
                        color="inherit"
                        
                        size={25}
                      />
                    ) : (
                      "Login"
                    )}
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

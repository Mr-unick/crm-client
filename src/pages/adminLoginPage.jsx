import React, { useContext, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { signInCollaborator } from "@/services/collabratorApi";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "@/App";
import DeatilsDrawer from "@/components/Drawer";
import { ToastContainer, toast } from "react-toastify";
import { signInAdmin } from "@/services/admin";
import { CircularProgress } from "@mui/material";

export function AdminLoginPage() {

  const [loginData, SetLoginData] = useState({});
    const [loader, setloader] = useState(false);
  const [open, setopen] = useState(false);
  const navigate = useNavigate();



  const handlechange = (e) => {
    SetLoginData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handlelogin = async () => {
    console.log(loginData);
    let res = await signInAdmin(loginData);
    if (res.status == 200) {
      sessionStorage.setItem("user", JSON.stringify(res));
      navigate("/dash");
      toast.success("Logged In")
    }else{
      toast.error(res.message)
    }
  };

  const notify = () => {
    toast("This is a default toast!", {
      autoClose: 8000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: 0.5,
    });
  };

  return (
    <section className="flex justify-center items-center w-screen h-screen flex-col bg-gray-200">
       <div className="flex justify-start items-start w-1/2 -mt-12">
       <img src="logo1.png" alt="logo" /></div>
      <div className="w-[30%] ">
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
                  <CircularProgress color="inherit" size={25} />
                ) : (
                  "Login"
                )}
              </Button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

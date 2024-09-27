import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../Context/AuthContext";

function Navbar() {
  const { user, logOut } = UserAuth();
  // console.log(user)

  const navigate = useNavigate()

  const Logout = async ()=>{
    try {
      await logOut()
      navigate('/')
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className=" flex items-center justify-between p-4 z-[100] w-full">
      <Link to="/">
        <h1 className=" text-red-600 text-4xl font-bold cursor-pointer">
          Netflix
        </h1>
      </Link>

      {user?.email ? (
        <div>
          <Link to="/account">
            <button className=" text-white pre-4">Account</button>
          </Link>
            <button 
            onClick={Logout}
             className="bg-red-600 px-6 py-2 rounded cursor-pointer text-white">
              logOut
            </button>
        </div>
      ) : (
        <div>
          <Link to="/login">
            <button className=" text-white pre-4">Sign up</button>
          </Link>
          <Link to="/signup">
            <button className="bg-red-600 px-6 py-2 rounded cursor-pointer text-white">
            Sign In
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Navbar;

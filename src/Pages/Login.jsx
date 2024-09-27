import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../Context/AuthContext";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState('')
  const { user, logIn } = UserAuth();
  const navigate = useNavigate;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('')
    try {
      await logIn(email, password);
      navigate('/');
    } catch (error) {
      console.log(error);
      setError(error.message)
    }
  };
  return (
    <div className=" w-full h-screen fixed">
      <img
        className=" hidden sm:block absolute w-full h-full object-cover"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/85ff76db-39e5-423a-afbc-97d3e74db71b/null/NG-en-20240909-TRIFECTA-perspective_27b06e81-2424-46bb-a92a-cfdb067a2cda_large.jpg"
        alt=""
      />
      <div className=" bg-black/60 fixed top-0 left-0 w-full h-screen"></div>
      <div className=" fixed w-full px-4 py-24 z-50">
        <div className=" max-w-[450px] h-[600px] mx-auto bg-black text-white">
          <div className=" max-w[320px] mx-auto py-16">
            <h1 className=" font-bold text-3xl"> Sign in</h1>
            {error ? <p className=" bg-red-300 p-3 my-2">(error)</p> : null}
            {error ? <p className=" p-3 bg-red-400 my-2">{error}</p> : null}
            <form
              onSubmit={handleSubmit}
              className=" w-full flex flex-col py-4"
            >
              <input
                onChange={(e) => setEmail(e.target.value)}
                className=" p-3 my-2 bg-gray-700 rounded"
                type="email"
                placeholder="email"
                autoComplete="email"
              />
              <input
                onChange={(e) => setPassword(e.target.value)}
                className=" p-3 my-2 bg-gray-700 rounded"
                type="password"
                placeholder="password"
                autoComplete="current-password"
              />
              <button className=" bg-red-600 py-3 my-3">sign up</button>
              <div className=" flex justify-between items-center text-sm text-gray-600">
                <p>
                  <input className="mr-2" type="checkbox" />
                  Remember me
                </p>
                <p>need help</p>
              </div>
              <p className=" py-8">
                <span className=" text-gray-600"> new to netflix?</span>{" "}
                <Link to="/signup">Sign up</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./Component/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import { AuthContextProvider } from "./Context/AuthContext";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Account from "./Pages/Account";
import ProtecteRoute from "./Component/ProtecteRoute";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/Account"
          element={
            <ProtecteRoute>
            <Account />
            </ProtecteRoute>
          }/>
        
          

          
          
        
        </Routes>
      </AuthContextProvider>
      </>
    
  );
}

export default App;

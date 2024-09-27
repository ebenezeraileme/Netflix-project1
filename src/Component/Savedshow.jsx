import React, { useEffect, useState } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { UserAuth } from "../Context/AuthContext";
import { db } from "../Firebase";
import { updateDoc, doc, onSnapshot } from "firebase/firestore";
import {AiFillApple} from "react-icons/ai";



const Savedshow = () => {
  const [movies, setMovies] = useState([]);
  const { user } = UserAuth();

  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollleft - 500;
  };
  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  
  useEffect(() => {
    if (user?.email && typeof user.email === 'string') {
      const unsubscribe = onSnapshot(doc(db, 'users', user.email), (doc) => {
        setMovies(doc.data()?.savedShows);
      });
    } else {
      console.error("Invalid user email:", user?.email);
    }
  }, [user?.email]);

  const movieRef = doc(db, 'users', `${user?.email}`)
  const deletShow = async (passedID) => {
    try {
      const result = movies.filter((item) =>item.id !== passedID)
      await updateDoc(movieRef, {
        savedShows

      });
    } catch (error){
      console.log(error)
    }

  }
  

  return (
    <div>
      <h2 className=" text-white font-bold md:text-xl p-4">my shows</h2>
      <div className=" relative flex items-center group">
        <MdChevronLeft
          onClick={slideLeft}
          className=" bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10  group-hover:black hidden"
          size={30}
        />
        <div
          id={"slider"}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
        >
          {movies.map((item, id) => (
            <div className="w-[160px] sm:[200px] md:[240px] lg:w-[200px] inline-block cursor-pointer relative p-2">
              <img
                className=" w-full h-auto block"
                src={`https://image.tmdb.org/t/p/w500/${item?.img}`}
                alt={item?.title}
              />
              <div className=" absolute top-1 left-1 w-500 h-500 hover:bg-red-300/80 hover:opacity-100 text-white ">
                <p className=" white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center">
                  {item?.title}
                </p>
                <p onClick={()=> deleteShow(item.id)} className="absolute text-gray-300 top-4 right-4 "><AiFillApple/></p>
              
              </div>
            </div>
          ))}
        </div>

        <MdChevronRight
          onClick={slideRight}
          className=" bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:black"
          size={40}
        />
      </div>
    </div>
  );
};

export default Savedshow;

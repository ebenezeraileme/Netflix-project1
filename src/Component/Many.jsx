import React, { useEffect, useState } from 'react'
import axios from 'axios'
import request from '../Request'

function Many() {
    let img = ""

    const [movies, setMovies] = useState([])
    const movie =movies[Math.floor(Math.random() * movies.length)]

    useEffect(()=>{
        axios.get(request.requestPopular).then((response)=>{
            // console.log(response.data.results[0].backdrop_path)
            setMovies(response.data.results)

    })

    },[]);
    // console.log(movies)
    const truncateString = (str, num) => {
        if (str?.length > num) {
            return str.slice(0, num) + '...';
            

        }else{
            return str;
        }
    };
    // console.log(length)
   
  

  return (
    <div  className='w-full h-50px text-white'>
        <div className=' w-full '>
            <div className=' absolute w-full h-50px bg-gradient-to-r from-black'></div>
            <img  className=" w-[80rem] h-[30em]"src={`https://image.tmdb.org/t/p/w500/${movie?.backdrop_path}`}
            alt={movie?.title} />
            <div className=' absolute w-50 top-[20%] p-4 md:p-8'>
                <h1 className='text-3xl md:text-5x1 font-bold'>{movie?.title}</h1>
            
           <div className=' my-4'>
            <button className=' hover:bg-red-600 bg-gray-300 text-black border-gray-300 py-2 px-5'>play</button>
            <button className=' border hover:bg-red-600 text-white border-gray-300 py-2 px-5 ml-4'> watch later</button>
            </div>
            <p className=' text-white-400 font-bold text-lg'> Released:{movie?.release_date}</p>
            <p className=' w-50 md:max-w-[70%] lg:max-w-[50%]: xl:max-w-[]35% text-gray-200'>
            {truncateString(movie?.overview, 50)}</p>

            
           </div>
        </div>
        
    </div>
  )
}

export default Many
import React, { useState } from 'react'
import Many from '../Component/Many'
import requests from '../Request'
import Row from '../Component/Row'


// const[menu, setMenu]=useState("")

function Home() {
  return (
    <>
        <Many/>
        <Row rowID='1' title='Upcoming' fetchURL={requests.requestUpcoming}/>
        <Row rowID='2' title='Popular' fetchURL={requests.requestPopular}/>
        <Row rowID='3' title='Trending' fetchURL={requests.requestTrending}/>
        <Row rowID='4' title='Top Rated' fetchURL={requests.requestUpcoming}/>
        <Row rowID='5' title='Horror' fetchURL={requests.requestHorror}/>

        
        
        

    </>
  )
}

export default Home
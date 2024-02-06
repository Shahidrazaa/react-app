import React, { useState } from 'react'
import Banner from './Banner';
import Service from './Service';


function Home()
{
    const [name,setName] = useState('Shahid');

    const [appName,setApp] = useState('Uniez');

    const changedata = () =>
    {
      setName('Arshad');
      setApp('Sameer');
  
    }

    const Updatedata = () =>
    {
      setName('Shahid Razaa');
      setApp('Uneiz Sheikh');
    }
  

    
   return( 
      <>
        <h1>Name : {name}</h1>
        <h1>Name : {appName}</h1>
        <button  onClick={() => changedata()}>change</button>
        <button  onClick={() => Updatedata()}>Update</button>
         <Banner sername={appName}></Banner>
         <Service></Service>
         

      </>
   )
}

export default Home;

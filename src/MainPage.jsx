import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
const MainPage = () => {
    const navigate = useNavigate();
    const goToMovie = () => {
        navigate('/ViewerPage');
      }
    // this is for getting music
const [music,setMusic] = useState([]);
const getMusic = async() => {
 

  const url = 'https://spotify23.p.rapidapi.com/search/?q=offset&type=multi&offset=0&limit=20&numberOfTopResults=20';
         const options = {
method: 'GET',
headers: {
'x-rapidapi-key': 'cb1ad76b2cmsh3edb5daf8471907p1eac0fjsn6208c6507bc7',
'x-rapidapi-host': 'spotify23.p.rapidapi.com'
}
};

       try {
const response = await fetch(url, options);
  const result = await response.json();
    setMusic(result);
    console.log(result);
      } catch (error) {
   console.error(error);
       }
}
useEffect(()=> {
  getMusic();
},[])
  return (
    <div className="bg-[#f9e3ce] w-full h-screen space-y-10">

      <div className=' justify-center justify-items-center flex space-x-10'>
            

          <h1 className='text-3xl font-bold'> All Artists</h1>
      </div>
             


      <div className='flex justify-center justify-items-center'>

     
      <div className="grid gap-4 grid-cols-4 p-4 " >

                  { music?.artists?.items?.map((m) =>{
                      return < >
                           <a href='' onClick={goToMovie} >

                            <div className="rounded-lg border-4 border-green-700 p-4 bg-white w-60 text-center ">
                          <img src={m?.data?.visuals?.avatarImage?.sources?.[2]?.url} alt={"Artist"} className="rounded-t-lg w-full h-48  mb-2" />
                           <h2 className="text-xl font-semibold text-green-700">{m?.data?.profile?.name}</h2>
                             </div>
                             </a>
                      </>
                  }

                  )}


       </div>

       </div>
     
           
  </div>
  )
}

export default MainPage
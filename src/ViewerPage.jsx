import React, { useEffect, useState } from 'react';
import mov2 from './assets/Images/mov2.png'
import mov1 from './assets/Images/ggg.jpg'
import mov3 from './assets/Images/oio.jpg'
import mov4 from './assets/Images/werggg.jpg'
import mov5 from './assets/Images/rer.jpg'
import mov6 from './assets/Images/ttt.jpg'
import { useNavigate,useParams } from 'react-router-dom';

const ViewerPage = () => {
     // retrieve id from URL
     const { idProp } = useParams();
    const navigate = useNavigate();

    const goToMovies = () => {
        navigate('/');
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
   ///  music?.artists?.items?
  return (
    <div className="bg-[#f9e3ce] w-full h-screen space-y-10 p-6">

    
    <div className='flex justify-center items-center space-x-10'>
      <h1 className='text-4xl font-bold text-gray-800'>this is number {idProp}</h1>
    </div>
  
  
    <div className='flex justify-center items-start space-x-10 p-10'>
     
      <div className="flex flex-col ">
        <a href='#' className='block'>
          <div className="rounded-lg border-4 border-green-700  w-96 h-96 text-center">
            <img src={mov2} alt="Movie Poster" className="rounded-t-lg w-full h-full  mb-2" />
            
          </div>
        </a>
      </div>
  
     
      <div className="flex flex-col justify-center">
        <h2 className="text-2xl font-bold mb-2">Movie Title</h2>
        <p className="text-gray-700 mb-4">Release Date: August 19, 2024</p>
        <p className="text-gray-700 mb-6">Director: John Doe</p>
        <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>
    </div>
  
    <div className="flex justify-center items-center mt-10">
      <a href='' onClick={goToMovies} className='text-green-700 font-semibold'>Back to Homepage</a>
    </div>
  </div>
  

  )
}

export default ViewerPage
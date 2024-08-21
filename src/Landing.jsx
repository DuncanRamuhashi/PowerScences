import React, { useEffect, useState } from 'react';
import mov2 from './assets/Images/mov2.png'
import mov1 from './assets/Images/ggg.jpg'
import mov3 from './assets/Images/oio.jpg'
import mov4 from './assets/Images/werggg.jpg'
import mov5 from './assets/Images/rer.jpg'
import mov6 from './assets/Images/ttt.jpg'
import { useNavigate } from 'react-router-dom';
import 'react-toastify/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';

//https://www.omdbapi.com/

//Here is your key: 53cb61cc

//Please append it to all of your API requests,

//OMDb API: http://www.omdbapi.com/?i=tt3896198&apikey=53cb61cc

// API KEY
//871ff18874f5530228c9d12e917d83bf


// API Read Access Token
//'https://api.themoviedb.org/3/movie/changes?page=1'
//eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NzFmZjE4ODc0ZjU1MzAyMjhjOWQxMmU5MTdkODNiZiIsIm5iZiI6MTcyNDA4MDUzNS45MDY4OTUsInN1YiI6IjY2YzM2MGExNzVjZGE0MDQzMGJmOWRkOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qobs1DEnqEGuOlOmHMqFSb-PijO0tNc8r1CSI21nUDw
const Landing = () => {
    const navigate = useNavigate();

    const goToMovie = (idProp) => {
        navigate(`/ViewerPage/${idProp}`);
      }
      const goToMain = () => {
        navigate('/MainPage');
        
      }
  const [searchInput, setSearchInput] = useState("");
  const [fGenres, setfGenres] = useState([]);
  const genres = ["50 Cent","Busta Rhymes", "Dmx", "JAY Z", "Drake"];
  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);

    if (e.target.value.length > 0) {
      const results = genres.filter((g) =>
        g.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())
      );
      setfGenres(results);
    } else {
      setfGenres([]);
    }

  };
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

    const counter = 0;
  return (
    <div className="bg-[#f9e3ce] w-full h-full space-y-10">
      <div className=' justify-center justify-items-center flex space-x-10'>
        <div >
        
        <input
          className="px-4 py-2 ring-8 ring-green-700 w-96 bg-white rounded-lg placeholder-zinc-400"
          placeholder="Search Artist"
          required
          value={searchInput}
          onChange={handleChange}
        />
        {fGenres.length > 0 && (
          <ul>
            {fGenres.map((genre, index) => (
              <li key={index}>{genre}</li>
            ))}
          </ul>
        )}
      </div> 
      <div>
      <button className='h-10 w-20 ring-2   ring-green-700 rounded-lg   mix-blend-normal text-xl "'>
          Search
        </button>
      </div>
        </div>
        <div className=' justify-center justify-items-center flex space-x-10'>
              

            <h1 className='text-3xl font-bold'> Latest</h1>
        </div>
               


        <div className='flex justify-center justify-items-center'>

       
        <div className="grid gap-4 grid-cols-4 p-4 " >

                    { music?.artists?.items?.slice(0,7).map((m,index) =>{
                        return <div key={index} >
                             <a   onClick={ (e) => {
                              e.preventDefault();
                              goToMovie(index);
                             }} >

                              <div className="rounded-lg border-4 border-green-700 p-4 bg-[#f9e3ce] w-60 text-center ">
                            <img src={m?.data?.visuals?.avatarImage?.sources?.[2]?.url} alt={"Artist"} className="rounded-t-lg w-full h-48  mb-2" />
                             <h2 className="text-xl font-semibold text-green-700">{m?.data?.profile?.name}</h2>
                               </div>
                               </a>
                               </div>
                    }

                    )}


         </div>

         </div>
       
             <div className='flex justify-center mt-4'>
            <button onClick={goToMain} className='h-10 w-32 ring-2 ring-green-700 rounded-lg text-xl bg-white text-green-700'>
                 More Artists
                </button>
              </div>
    </div>
  ); 
};

export default Landing;

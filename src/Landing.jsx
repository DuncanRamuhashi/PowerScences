import React, { useState } from 'react';
import mov2 from './assets/Images/mov2.png'
import mov1 from './assets/Images/ggg.jpg'
import mov3 from './assets/Images/oio.jpg'
import mov4 from './assets/Images/werggg.jpg'
import mov5 from './assets/Images/rer.jpg'
import mov6 from './assets/Images/ttt.jpg'
import { useNavigate } from 'react-router-dom';

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
    const goToMovie = () => {
        navigate('/ViewerPage');
      }
  const [searchInput, setSearchInput] = useState("");
  const [fGenres, setfGenres] = useState([]);
  const genres = ["Horror", "Action", "Comedy", "Romance"];

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

  return (
    <div className="bg-[#f9e3ce] w-full h-screen space-y-10">
      <div className=' justify-center justify-items-center flex space-x-10'>
        <div >

        <input
          className="px-4 py-2 ring-8 ring-green-700 w-96 bg-white rounded-lg placeholder-zinc-400"
          placeholder="Search movie"
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

       
        <div className="grid gap-4 grid-cols-4 p-4 ">
            <a href='' onClick={goToMovie}>

            <div className="rounded-lg border-4 border-green-700 p-4 bg-white w-60 text-center ">
                 <img src={mov2} alt={"Movie"} className="rounded-t-lg w-full h-48  mb-2" />
                 <h2 className="text-xl font-semibold text-green-700">Ringo Gringo</h2>
            </div>
            </a>

            <a href=' ' onClick={goToMovie}>

          <div className="rounded-lg border-4 border-green-700 p-4 bg-white w-60 text-center ">
     <img src={mov1} alt={"Movie"} className="rounded-t-lg w-full h-48  mb-2" />
     <h2 className="text-xl font-semibold text-green-700">Gurrrrrrr</h2>
          </div>
         </a> 
         <a href='' onClick={goToMovie}>

   <div className="rounded-lg border-4 border-green-700 p-4 bg-white w-60 text-center ">
<img src={mov3} alt={"Movie"} className="rounded-t-lg w-full h-48  mb-2" />
<h2 className="text-xl font-semibold text-green-700">Civil wwar</h2>
</div>
</a>        
<a href='' onClick={goToMovie}>

<div className="rounded-lg border-4 border-green-700 p-4 bg-white w-60 text-center ">
<img src={mov4} alt={"Movie"} className="rounded-t-lg w-full h-48  mb-2" />
<h2 className="text-xl font-semibold text-green-700">Spiderman</h2>
</div>
</a> 
<a href='' onClick={goToMovie}>

<div className="rounded-lg border-4 border-green-700 p-4 bg-white w-60 text-center ">
<img src={mov5} alt={"Movie"} className="rounded-t-lg w-full h-48  mb-2" />
<h2 className="text-xl font-semibold text-green-700">Deadpool</h2>
</div>
</a> 
<a href='' onClick={goToMovie}>

<div className="rounded-lg border-4 border-green-700 p-4 bg-white w-60 text-center ">
<img src={mov6} alt={"Movie"} className="rounded-t-lg w-full h-48  mb-2" />
<h2 className="text-xl font-semibold text-green-700">BeeKeeper</h2>
</div>
</a> 
         </div>
         </div>
    </div>
  );
};

export default Landing;

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
  //https://api.themoviedb.org/3/search/movie?api_key=871ff18874f5530228c9d12e917d83bf&query=deadpool

// API Read Access Token
//'https://api.themoviedb.org/3/movie/changes?page=1'
//eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NzFmZjE4ODc0ZjU1MzAyMjhjOWQxMmU5MTdkODNiZiIsIm5iZiI6MTcyNDA4MDUzNS45MDY4OTUsInN1YiI6IjY2YzM2MGExNzVjZGE0MDQzMGJmOWRkOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qobs1DEnqEGuOlOmHMqFSb-PijO0tNc8r1CSI21nUDw
const Landing = () => {
    const navigate = useNavigate();

    const goToMovie = (id) => {
        navigate(`/ViewerPage/${id}`);
      }
      const goToMain = () => {
        navigate('/MainPage');
        
      }
  const [searchInput, setSearchInput] = useState("");
 
  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);

    if (e.target.value.length > 0) {
      const results = searching.filter((g) =>
        g.original_title.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())
      );
     
      searchMovie();
    } else {
      setSearching([]);
    }

  };
   // this is for getting music

const [movies, setMovies] = useState([]);
const [searching, setSearching] = useState([]);
const getMovie =() => {

  
            
  fetch("https://api.themoviedb.org/3/movie/upcoming?api_key=871ff18874f5530228c9d12e917d83bf")
  .then(res => res.json())
  .then(json => {
 
      setMovies(json.results); // Sets the movies using the results from the API
  })
  .catch(error => {
      console.error('Error fetching data:', error); // Handles any errors
  });
 
              
 //      try {
//     const url= 'https://api.themoviedb.org/3/discover/movie?api_key=871ff18874f5530228c9d12e917d83bf';
  
 //    const response = fetch(url);
 // const result = response.json();
 //   setMovies(result);
 //  // console.log(result);
 //     } catch (error) {
 //  console.error(error);
 //      }
}

   
    const counter = 0;
    const [input, setInput] = useState("");
    const searchMovie =() => {

  
            
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=871ff18874f5530228c9d12e917d83bf&query=${searchInput}`)
      .then(res => res.json())
      .then(json => {
     
        setSearching(json.results); // Sets the movies using the results from the API
      })
      .catch(error => {
          console.error('Error fetching data:', error); // Handles any errors
      });
     
                  
     //      try {
    //     const url= 'https://api.themoviedb.org/3/discover/movie?api_key=871ff18874f5530228c9d12e917d83bf';
      
     //    const response = fetch(url);
     // const result = response.json();
     //   setMovies(result);
     //  // console.log(result);
     //     } catch (error) {
     //  console.error(error);
     //      }
    }
    

    useEffect(()=> {
      getMovie();
    //  searchMovie();
    },[])




  return (
    
    <div className="bg-[#f9e3ce] w-full h-full space-y-10">
      <div className=' justify-center justify-items-center flex space-x-10'>
        <div >
        
        <input
          className="px-4 py-2 ring-8 ring-green-700 w-96 bg-white rounded-lg placeholder-zinc-400"
          placeholder="Search Movies"
          required
          value={searchInput}
          onChange={handleChange}
        />
        {searching.length > 0 && (
          <ul>
            {searching.map((s) => (
           <li key={s.id}>{s.original_title}</li>
          ))}

          </ul>
        )}
      </div> 
      {console.log(movies)}
      {console.log(searching)}
      <div>
      <button className='h-10 w-20 ring-2   ring-green-700 rounded-lg   mix-blend-normal text-xl "'>
          Search
        </button>
      </div>
        </div>
        <div className=' justify-center justify-items-center flex space-x-10'>
              

            <h1 className='text-3xl font-bold'> Latest Movies</h1>
        </div>
               


        <div className='flex justify-center justify-items-center'>


        <div className="grid gap-4 grid-cols-4 p-4 " >

        {
  (searching ? searching : movies.slice(0, 8)).map((m) => (
    <div key={m.id}>
      <a href="" onClick={(e) => {
        e.preventDefault();
        goToMovie(m.id);
      }}>
        <div className="rounded-lg border-4 border-green-700 p-4 bg-[#f9e3ce] w-60 h-full text-center">
          <img 
            src={`https://image.tmdb.org/t/p/w500${m.poster_path}`} 
            alt="Movies" 
            className="rounded-t-lg w-full h-48 mb-2" 
          />
          <h2 className="text-xl font-semibold text-green-700">{m.original_title}</h2>
        </div>
      </a>
    </div>
  ))
}


                    {movies.slice(0,8).map((m) =>{
                        return <div key={m.id} >
                             <a href=''  onClick={ (e) => {
                              e.preventDefault();
                              goToMovie(m.id);
                             }} >

                              <div className="rounded-lg border-4 border-green-700 p-4 bg-[#f9e3ce] w-60 h-full text-center  ">
                            <img src={`https://image.tmdb.org/t/p/w500${m.poster_path}`} alt={"Movies"} className="rounded-t-lg w-full h-48  mb-2" />
                             <h2 className="text-xl font-semibold text-green-700">{m.original_title}</h2>
                               </div>
                               </a>
                               </div>
                    }

                    )}


         </div>

         </div>
       
             <div className='flex justify-center mt-4'>
            <button onClick={goToMain} className='h-10 w-32 ring-2 ring-green-700 rounded-lg text-xl bg-white text-green-700'>
                 More Movies
                </button>
              </div>
    </div>
  ); 
};

export default Landing;

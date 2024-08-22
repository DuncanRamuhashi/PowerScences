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

//U5MTdkODNiZiIsIm5iZiI6MTcyNDA4MDUzNS45MDY4OTUsInN1YiI6IjY2YzM2MGExNzVjZGE0MDQzMGJmOWRkOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qobs1DEnqEGuOlOmHMqFSb-PijO0tNc8r1CSI21nUDw
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
   // this is for getting movies

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
    
<div className="bg-[#f9e3ce] w-full h-full space-y-10 p-4">
  <div className='flex flex-col items-center space-y-4'>
    <div className='flex flex-col items-center space-y-4 w-full'>
      <input
        className="px-4 py-2 ring-4 ring-green-700 w-full max-w-md bg-white rounded-lg placeholder-zinc-400"
        placeholder="Search Movies"
        required
        value={searchInput}
        onChange={handleChange}
      />
      {searching.length > 0 && (
        <ul className="w-full max-w-md">
          {searching.map((s) => (
            <li key={s.id} className="py-2">{s.original_title}</li>
          ))}
        </ul>
      )}
    </div>
    <button className='h-10 w-32 ring-2 ring-green-700 rounded-lg text-xl'>
      Search
    </button>
    <h1 className='text-2xl font-bold text-center'>Latest Movies</h1>
  </div>

  <div className='flex flex-wrap justify-center gap-4'>
    {(searching.length > 0 ? searching : movies.slice(0, 8)).map((m) => (
      <div key={m.id} className="w-full max-w-sm">
        <a href="" onClick={(e) => {
          e.preventDefault();
          goToMovie(m.id);
        }}>
          <div className="rounded-lg border-4 border-green-700 p-4 bg-[#f9e3ce] text-center ">
            <img 
              src={`https://image.tmdb.org/t/p/w500${m.poster_path}`} 
              alt={m.original_title} 
              className="rounded-t-lg w-full h-48 mb-2 object-cover" 
            />
            <h2 className="text-lg font-semibold text-green-700">{m.original_title}</h2>
          </div>
        </a>
      </div>
    ))}
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

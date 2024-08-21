import React, { useEffect, useState } from 'react';
import mov2 from './assets/Images/mov2.png'
import mov1 from './assets/Images/ggg.jpg'
import mov3 from './assets/Images/oio.jpg'
import mov4 from './assets/Images/werggg.jpg'
import mov5 from './assets/Images/rer.jpg'
import mov6 from './assets/Images/ttt.jpg'
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const ViewerPage = () => {
     // retrieve id from URL
     const { id } = useParams();
    const navigate = useNavigate();

    const goToMovies = () => {
        navigate('/');
      }


      const [movies, setMovies] = useState([]);
      const [movie, setMovie] = useState(null);
      const getMovie =() => {
      
        
                  
        fetch("https://api.themoviedb.org/3/discover/movie?api_key=871ff18874f5530228c9d12e917d83bf")
        .then(res => res.json())
        .then(json => {
       
            setMovies(json.results); // Sets the movies using the results from the API
            
        })
        .catch(error => {
            console.error('Error fetching data:', error); // Handles any errors
        });

       // const dubMovie = movies.find(m => m.id === idProp);


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
          {console.log(movies)}
      },[])
      



  return (

    <div className="bg-[#f9e3ce] w-full h-screen space-y-10 p-6">
     
   
     {movies.map(m => (m.id.toString() === id ? (
      <div key={m.id}>
        
      <div className='flex justify-center items-center space-x-10'>
      <h1 className='text-4xl font-bold text-gray-800'>{m.original_title}</h1>
    </div>
  
  
    <div className='flex justify-center items-start space-x-10 p-10'>
     
      <div className="flex flex-col ">
        <a href='#' className='block'>
          <div className="rounded-lg border-4 border-green-700  w-96 h-96 text-center">
            <img src={`https://image.tmdb.org/t/p/w500${m.poster_path}`} alt="Movie Poster" className="rounded-t-lg w-full h-full  mb-2" />
            
          </div>
        </a>
      </div>
  
     
      <div className="flex flex-col justify-center">
        <h2 className="text-2xl font-bold mb-2">{m.original_title}</h2>
        <p className="text-gray-700 mb-4">{m.release_date}</p>
        <p className="text-gray-700 mb-6">Language: {m.original_language}</p>
        <p className="text-gray-700">{m.overview}</p>
      </div>
    </div>
    </div>
     ) : 
      null))}
    
    <div className="flex justify-center items-center mt-10">
      <a href='' onClick={goToMovies} className='text-green-700 font-semibold'>Back to Homepage</a>
    </div>
  </div>
  

  )
}

export default ViewerPage
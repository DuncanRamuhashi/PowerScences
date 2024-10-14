import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
const SeriesPage = () => {

  const navigate = useNavigate();

  let [page, setPage] = useState(1);
  let [min, setMin] = useState(0);
  let [max, setMax] = useState(8);

  const pagingHelper = (pageNumber, numberMin, numberMax) => {
    setPage(pageNumber);
    setMin(numberMin);
    setMax(numberMax);
    console.log(`Page: ${pageNumber}, Min: ${numberMin}, Max: ${numberMax}`); // For debugging
  };

  const goToTv = (id) => {
    navigate(`/ViewerPage/${id}/tv`);
  }
    const goToMovies = () => {
        navigate('/');
  }

const [movies, setMovies] = useState([]);
const getMovie =() => {

      
            
  fetch("https://api.themoviedb.org/3/discover/tv?api_key=871ff18874f5530228c9d12e917d83bf")
  .then(res => res.json())
  .then(json => {
 
      setMovies(json.results); // Sets the movies using the results from the API
  })
  .catch(error => {
      console.error('Error fetching data:', error); // Handles any errors
  });
    }
   useEffect(()=> {
  getMovie();
 },[])
  return (
    <div className="bg-[#f9e3ce] w-full h-full space-y-10 p-4">
    
    <div className='flex justify-center'>
      <h1 className='text-2xl md:text-3xl font-bold'>Latest Series</h1>
    </div>
  
    <div className='flex justify-center lg:px-96'>
      <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 p-4">
        {movies.slice(min, max).map((m) => (
          <div key={m.id}>
            <button
              onClick={(e) => {
                e.preventDefault();
                goToTv(m.id);
              }}
              className=" h-[350px] rounded-lg border-4 border-green-700 p-2  bg-[#f9e3ce] w-full   text-center"
            >
              <img
                src={`https://image.tmdb.org/t/p/w500${m.poster_path}`}
                alt={m.original_title}
                className="rounded-t-lg w-full h-60 mb-2 md:h-60 "
              />
              <h2 className="text-sm sm:text-lg font-semibold text-green-700">{m.original_name}</h2>
            </button>
          </div>
        ))}
      </div>
    </div>
  
    <div className="flex justify-center items-center mt-10 space-x-10">
      <a href='' onClick={(e) => { e.preventDefault(); pagingHelper(1, 0, 8); }} className='text-green-700  hover:text-yellow-500 font-semibold text-sm sm:text-base'>1</a>
      <a href='' onClick={(e) => { e.preventDefault(); pagingHelper(2, 8, 16); }} className='text-green-700 hover:text-yellow-500 font-semibold text-sm sm:text-base'>2</a>
      <a href='' onClick={(e) => { e.preventDefault(); pagingHelper(3, 16, 20); }} className='text-green-700 hover:text-yellow-500 font-semibold text-sm sm:text-base'>3</a>
    </div>
  
    <div className="flex justify-center items-center mt-6">
      <a href='' onClick={goToMovies} className='text-green-700 font-semibold text-sm sm:text-base hover:text-yellow-500'>Back to Homepage</a>
    </div>
  </div>
  
  )
}

export default SeriesPage
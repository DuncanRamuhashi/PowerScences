import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MainPage = () => {
  const navigate = useNavigate();

  const [page, setPage] = useState(1);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(8);
  const [movies, setMovies] = useState([]);

  // Fetch movies
  const getMovie = () => {
    fetch("https://api.themoviedb.org/3/discover/movie?api_key=871ff18874f5530228c9d12e917d83bf")
      .then(res => res.json())
      .then(json => {
        setMovies(json.results);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  };

  useEffect(() => {
    getMovie();
  }, []);

  const pagingHelper = (pageNumber, numberMin, numberMax) => {
    setPage(pageNumber);
    setMin(numberMin);
    setMax(numberMax);
  };

  const goToMovie = (id) => {
    navigate(`/ViewerPage/${id}/movie`);
  };

  const goToMovies = () => {
    navigate('/');
  };

  return (
    <div className="bg-gray-950 w-full min-h-screen p-6">
      <div className='flex justify-center mb-6'>
        <h1 className='text-4xl font-bold text-gray-300'>Latest Movies</h1>
      </div>

      <div className='flex justify-center'>
        <div className="grid gap-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 mb-8">
          {movies.slice(min, max).map((m) => (
            <div key={m.id} className="max-w-sm bg-white rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 cursor-pointer" onClick={() => goToMovie(m.id)}>
              <img
                src={`https://image.tmdb.org/t/p/w500${m.poster_path}`}
                alt={m.original_title}
                className="w-96 h-64 object-fill transition-transform transform hover:scale-105"
              />
              <div className="p-4">
                <h2 className="text-lg text-center font-semibold text-green-700">{m.original_title}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center items-center mt-10 space-x-10">
        <a href='' onClick={(e) => { e.preventDefault(); pagingHelper(1, 0, 8); }} className='text-green-700 hover:text-yellow-500 font-semibold text-lg'>1</a>
        <a href='' onClick={(e) => { e.preventDefault(); pagingHelper(2, 8, 16); }} className='text-green-700 hover:text-yellow-500 font-semibold text-lg'>2</a>
        <a href='' onClick={(e) => { e.preventDefault(); pagingHelper(3, 16, 24); }} className='text-green-700 hover:text-yellow-500 font-semibold text-lg'>3</a>
      </div>

      <div className="flex justify-center items-center mt-6">
        <a href='' onClick={goToMovies} className='text-green-700 font-semibold text-lg hover:text-yellow-500'>Back to Homepage</a>
      </div>
    </div>
  );
};

export default MainPage;

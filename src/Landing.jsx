import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';

const Landing = () => {
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState("");
  const [movies, setMovies] = useState([]);
  const [tv, setTv] = useState([]);
  const [searching, setSearching] = useState([]);

  // Handle search input change
  const handleChange = (e) => {
    const value = e.target.value;
    setSearchInput(value);
    
    if (value) {
      searchMovie(value);
    } else {
      setSearching([]);
    }
  };

  // Fetch popular movies
  const fetchMovies = async () => {
    try {
      const response = await fetch("https://api.themoviedb.org/3/discover/movie?api_key=871ff18874f5530228c9d12e917d83bf");
      const data = await response.json();
      setMovies(data.results);
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };

  // Fetch popular TV shows
  const fetchTVShows = async () => {
    try {
      const response = await fetch("https://api.themoviedb.org/3/discover/tv?api_key=871ff18874f5530228c9d12e917d83bf");
      const data = await response.json();
      setTv(data.results);
    } catch (error) {
      console.error('Error fetching TV shows:', error);
    }
  };

  // Search for movies based on user input
  const searchMovie = async (query) => {
    try {
      const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=871ff18874f5530228c9d12e917d83bf&query=${query}`);
      const data = await response.json();
      setSearching(data.results);
    } catch (error) {
      console.error('Error searching for movies:', error);
    }
  };

  // Fetch movies and TV shows on component mount
  useEffect(() => {
    fetchMovies();
    fetchTVShows();
  }, []);

  // Navigate to movie viewer page
  const goToMovie = (id) => {
    navigate(`/ViewerPage/${id}/movie`);
  };

  // Navigate to TV viewer page
  const goToTv = (id) => {
    navigate(`/ViewerPage/${id}/tv`);
  };

  return (
    <div className="bg-gray-100 w-full min-h-screen p-6">
      {/* Search Bar */}
      <div className="flex flex-col items-center mb-8">
        <input
          type="text"
          className="px-4 py-3 border border-gray-300 w-full max-w-md bg-white rounded-lg placeholder-gray-400 shadow-md focus:outline-none focus:ring-2 focus:ring-green-500"
          placeholder="Search Movies"
          value={searchInput}
          onChange={handleChange}
        />
      </div>
      
      {/* Popular Movies Section */}
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">Popular Movies</h1>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mb-8 ">
        {(searching.length > 0 ? searching : movies.slice(0, 8)).map((m) => (
          <div key={m.id} className="max-w-sm bg-white rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 cursor-pointer" onClick={() => goToMovie(m.id)}>
            <img 
              src={`https://image.tmdb.org/t/p/w500${m.poster_path}`} 
              alt={m.original_title} 
              className="w-full h-64 object-cover transition-transform transform hover:scale-105" 
            />
            <div className="p-4 ">
              <h2 className="text-lg font-semibold text-green-700">{m.original_title}</h2>
            </div>
          </div>
        ))}
      </div>

      {/* More Movies Button */}
      <div className="flex justify-center mb-10">
        <button 
          onClick={() => navigate('/MoviePage')} 
          className="h-12 w-36 border border-green-700 rounded-lg text-lg bg-white text-green-700 hover:bg-green-700 hover:text-white transition duration-300 shadow-md"
        >
          More Movies
        </button>
      </div>

      {/* Popular Series Section */}
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">Popular Series</h1>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mb-8">
        {tv.slice(0, 8).map((m) => (
          <div key={m.id} className="max-w-sm  bg-white rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 cursor-pointer" onClick={() => goToTv(m.id)}>
            <img 
              src={`https://image.tmdb.org/t/p/w500${m.poster_path}`} 
              alt={m.original_name} 
              className="w-96 h-64 object-cover transition-transform transform hover:scale-105" 
            />
            <div className="p-4  ">
              <h2 className="text-lg text-center font-semibold text-green-700">{m.original_name}</h2>
            </div>
          </div>
        ))}
      </div>

      {/* More Series Button */}
      <div className="flex justify-center mb-10">
        <button 
          onClick={() => navigate('/SeriesPage')} 
          className="h-12 w-36 border border-green-700 rounded-lg text-lg bg-white text-green-700 hover:bg-green-700 hover:text-white transition duration-300 shadow-md"
        >
          More Series
        </button>
      </div>

      <ToastContainer />
    </div>
  );
};

export default Landing;

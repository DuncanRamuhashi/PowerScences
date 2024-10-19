import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const ViewerPage = () => {
  const { id, type } = useParams();
  const navigate = useNavigate();

  const [movie, setMovie] = useState(null);
  const [videos, setVideos] = useState([]);

  const goToMovies = () => {
    navigate('/');
  };

  const getMovie = async () => {
    try {
      const response = await fetch(`https://api.themoviedb.org/3/${type}/${id}?api_key=871ff18874f5530228c9d12e917d83bf`);
      if (!response.ok) throw new Error('Network response was not ok');
      const json = await response.json();
      setMovie(json);
    } catch (error) {
      console.error('Error fetching movie data:', error);
    }
  };

  const getVideos = async () => {
    try {
      const response = await fetch(`https://api.themoviedb.org/3/${type}/${id}/videos?api_key=871ff18874f5530228c9d12e917d83bf`);
      if (!response.ok) throw new Error('Network response was not ok');
      const data = await response.json();
      setVideos(data.results);
    } catch (error) {
      console.error('Failed to fetch videos:', error);
    }
  };

  useEffect(() => {
    getMovie();
    getVideos();
  }, [id]);

  return (
    <div className="bg-gray-100 w-full h-full space-y-6 p-4 sm:p-6">
      <div className="flex flex-col items-center space-y-6">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 text-center">
          {movie ? movie.original_name || movie.title : 'Loading...'}
        </h1>

        <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-10 p-4 md:p-10">
          <div className="flex flex-col items-center">
            <div className="rounded-lg border-4 border-green-700 w-full max-w-xs md:w-96 h-auto md:h-96 text-center">
              <img
                src={movie ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : 'placeholder-image-url.jpg'}
                alt="Movie Poster"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left">
            <h2 className="text-xl md:text-2xl font-bold mb-2">{movie ? movie.title : 'Loading...'}</h2>
            <p className="text-gray-700 mb-2">{movie ? movie.release_date : 'Loading...'}</p>
            <p className="text-gray-700 mb-4">{movie ? `Language: ${movie.original_language}` : 'Loading...'}</p>
            <p className="text-gray-700 mb-4">{movie ? movie.overview : 'Loading...'}</p>
            <p className="text-gray-700 mb-4">{movie ? movie.tagline : 'Loading...'}</p>
            <p className="text-gray-700 mb-4">{movie ? `Ratings: ${movie.vote_average}` : 'Loading...'}</p>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center">
        {videos.length > 0 ? (
          <iframe
            src={`https://www.youtube.com/embed/${videos[0].key}`}
            title="Movie Trailer"
            className="rounded-lg w-full h-96"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ) : (
          <p>No videos available</p>
        )}
      </div>

      <div className="flex justify-center items-center mt-6">
        <button onClick={goToMovies} className="h-12 w-full border-2 border-green-700 rounded-lg text-lg bg-white text-green-700 hover:bg-green-700 hover:text-white transition duration-300">
          Back to Homepage
        </button>
      </div>
    </div>
  );
};

export default ViewerPage;

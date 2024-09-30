import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const ViewerPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [movies, setMovies] = useState(null);
  const [videos, setVideos] = useState([]);

  const goToMovies = () => {
    navigate('/');
  };

  const getMovie = () => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=871ff18874f5530228c9d12e917d83bf`)
      .then((res) => res.json())
      .then((json) => {
        setMovies(json);
      })
      .catch((error) => {
        console.error('Error fetching movie data:', error);
      });
  };

  const getVideos = () => {
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=871ff18874f5530228c9d12e917d83bf`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setVideos(data.results);
      })
      .catch((err) => {
        console.error('Failed to fetch videos:', err);
      });
  };

  useEffect(() => {
    getMovie();
    getVideos();
  }, [id]);

  return (
    <div className="bg-[#f9e3ce] w-full h-full space-y-6 p-4 sm:p-6">
      <div className="flex flex-col items-center space-y-6">
        <div className='flex flex-col items-center space-y-4'>
          <h1 className='text-3xl sm:text-4xl font-bold text-gray-800 text-center'>
            {movies ? movies.original_title : 'Loading...'}
          </h1>
        </div>

        <div className='flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-10 p-4 md:p-10'>
          <div className="flex flex-col items-center">
            <a href='#' className='block'>
              <div className="rounded-lg border-4 border-green-700 w-full max-w-xs md:w-96 h-auto md:h-96 text-center">
                <img
                  src={movies ? `https://image.tmdb.org/t/p/w500${movies.poster_path}` : 'placeholder-image-url.jpg'}
                  alt="Movie Poster"
                  className="w-full h-full"
                />
              </div>
            </a>
          </div>

          <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left">
            <h2 className="text-xl md:text-2xl font-bold mb-2">{movies ? movies.title : 'Loading...'}</h2>
            <p className="text-gray-700 mb-2">{movies ? movies.release_date : 'Loading...'}</p>
            <p className="text-gray-700 mb-4">{movies ? `Language: ${movies.original_language}` : 'Loading...'}</p>
            <p className="text-gray-700">{movies ? movies.overview : 'Loading...'}</p>
          </div>
        </div>
      </div>

      <div className='flex justify-center items-center'>
        {videos.length > 0 ? (
          <iframe
            src={`https://www.youtube.com/embed/${videos[videos.length - 1].key}`}
            title="Movie Trailer"
            className="rounded-t-lg w-full h-96"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ) : (
          <p>No videos available</p>
        )}
      </div>

      <div className="flex justify-center items-center mt-6">
        <a href='' onClick={goToMovies} className='text-green-700 font-semibold text-sm sm:text-base'>Back to Homepage</a>
      </div>
    </div>
  );
};

export default ViewerPage;

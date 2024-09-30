import React from 'react';

const About = () => {
  return (
    <div className="bg-gradient-to-r from-[#f9e3ce] to-[#ffe4d0] min-h-screen p-8 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-center text-green-800 mb-6">About PowerScene</h1>
      <p className="text-lg text-center mb-4 max-w-3xl">
        Welcome to <strong>PowerScene</strong>! We are passionate about films and dedicated to providing you with the ultimate movie-watching experience. Our platform allows you to explore a vast library of movies, watch trailers, and dive deep into detailed movie information.
      </p>
      
      <h2 className="text-2xl font-semibold text-green-700 mb-4">Our Mission</h2>
      <p className="text-lg mb-6 max-w-3xl">
        Our mission is to connect movie lovers with the films they adore. Whether you’re looking for the latest blockbusters, hidden gems, or timeless classics, we aim to make your movie selection process seamless and enjoyable.
      </p>
      
      <h2 className="text-2xl font-semibold text-green-700 mb-4">What We Offer</h2>
      <ul className="list-disc list-inside mb-6 max-w-3xl">
        <li className="mb-2">🌟 <strong>Extensive Movie Database:</strong> Browse through a rich collection of films from various genres and eras, all in one place.</li>
        <li className="mb-2">🎥 <strong>Trailers and Previews:</strong> Get a sneak peek of the movies with our curated selection of trailers, helping you decide what to watch next.</li>
        <li className="mb-2">🖥️ <strong>User-Friendly Interface:</strong> Our website is designed for easy navigation, ensuring that you can find the movies you love without hassle.</li>
      </ul>

      <h2 className="text-2xl font-semibold text-green-700 mb-4">How It Works</h2>
      <ol className="list-decimal list-inside mb-6 max-w-3xl">
        <li className="mb-2">🔍 <strong>Search for Movies:</strong> Use our search feature to find your favorite titles or discover new ones based on your interests.</li>
        <li className="mb-2">📄 <strong>View Details:</strong> Click on any movie to access detailed information, including cast, synopsis, and release dates.</li>
        <li className="mb-2">🎬 <strong>Watch Trailers:</strong> Get a taste of the film with our embedded trailers before deciding to watch.</li>
      </ol>

      <h2 className="text-2xl font-semibold text-green-700 mb-4">Join Us!</h2>
      <p className="text-lg mb-4 max-w-3xl">
        We’re excited to have you on this cinematic journey. Whether you're a casual viewer or a die-hard film buff, there's something for everyone here at <strong>PowerScene</strong>. Feel free to explore, share your thoughts, and immerse yourself in the world of movies!
      </p>

      <p className="text-lg text-center mb-4">Happy watching! 🍿</p>

      <p className="text-lg text-center max-w-3xl">
        If you have any questions or feedback, don’t hesitate to reach out to us. Enjoy your movie experience!
      </p>
    </div>
  );
};

export default About;

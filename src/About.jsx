import React from 'react';

const About = () => {
  return (
    <div className="bg-gradient-to-r from-[#f9e3ce] to-[#ffe4d0] min-h-screen p-8 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-center text-green-800 mb-6">About PowerScene</h1>
      <p className="text-lg text-center mb-4 max-w-3xl">
        Welcome to <strong>PowerScene</strong>! We're passionate about movies and series, dedicated to providing you with an exceptional viewing experience. Explore our vast library of films and shows, watch trailers, and dive into detailed information.
      </p>
      
      <h2 className="text-2xl font-semibold text-green-700 mb-4">Our Mission</h2>
      <p className="text-lg mb-6 max-w-3xl">
        Our mission is to connect entertainment enthusiasts with the films and series they love. Whether you’re seeking the latest releases, hidden gems, or classic favorites, we aim to make your selection process seamless and enjoyable.
      </p>
      
      <h2 className="text-2xl font-semibold text-green-700 mb-4">What We Offer</h2>
      <ul className="list-disc list-inside mb-6 max-w-3xl">
        <li className="mb-2"><strong>Extensive Library:</strong> Discover a rich collection of movies and series across various genres, all in one place.</li>
        <li className="mb-2"><strong>Trailers and Previews:</strong> Enjoy curated trailers to help you decide what to watch next.</li>
        <li className="mb-2"><strong>User-Friendly Interface:</strong> Navigate our website with ease to find the content you love.</li>
      </ul>

      <h2 className="text-2xl font-semibold text-green-700 mb-4">How It Works</h2>
      <ol className="list-decimal list-inside mb-6 max-w-3xl">
        <li className="mb-2"><strong>Search for Content:</strong> Use our search feature to find your favorite titles or discover new ones based on your interests.</li>
        <li className="mb-2"><strong>View Details:</strong> Click on any title to access detailed information, including cast, synopsis, and release dates.</li>
        <li className="mb-2"><strong>Watch Trailers:</strong> Get a taste of the film or series with embedded trailers before you dive in.</li>
      </ol>

      <h2 className="text-2xl font-semibold text-green-700 mb-4">Join Us!</h2>
      <p className="text-lg mb-4 max-w-3xl">
        We’re excited to have you on this cinematic journey. Whether you're a casual viewer or a devoted fan, there's something for everyone at <strong>PowerScene</strong>. Explore, share your thoughts, and immerse yourself in the world of movies and series!
      </p>

      <p className="text-lg text-center mb-4">Happy watching!</p>

      <p className="text-lg text-center max-w-3xl">
        If you have any questions or feedback, don’t hesitate to reach out. Enjoy your viewing experience!
      </p>
    </div>
  );
};

export default About;

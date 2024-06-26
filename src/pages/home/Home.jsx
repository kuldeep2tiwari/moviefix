import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.scss';

const Home = () => {
  const navigate = useNavigate();

  const handleMovieExplore = () => {
    navigate('/explore/movie');
  };

  const handleTVExplore = () => {
    navigate('/explore/tv');
  };

  return (
    <div className="home">
      <button className="button123" onClick={handleMovieExplore}>
        Explore Movies
      </button>
      <button className="button123" onClick={handleTVExplore}>
        Explore TV Shows
      </button>
    </div>
  );
};

export default Home;

import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { AiFillHome, AiOutlineInfoCircle } from 'react-icons/ai';
import { IoGameController, IoSettings } from 'react-icons/io5';
import { useSliderContext } from '../context/SliderContext';
import { useFullScreen } from '../hooks/useFullScreen';

const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { selectedSlide } = useSliderContext();
  const { toggleFullScreen } = useFullScreen();

  const handleGameClick = () => {
    if (selectedSlide) {
      toggleFullScreen();
      window.open(selectedSlide.url, '_blank');
    } else {
      alert('Please select a game first!');
    }
  };

  return (
    <nav className="fixed bottom-0 w-full bg-white border-t border-gray-200">
      <div className="flex justify-around items-center py-3">
        <button
          onClick={() => navigate('/')}
          className={`nav-item ${location.pathname === '/' ? 'active' : ''}`}
        >
          <AiFillHome size={24} />
          <span>Home</span>
        </button>
        
        <button
          onClick={handleGameClick}
          className="nav-item"
        >
          <IoGameController size={24} />
          <span>Game</span>
        </button>

        <button
          onClick={() => navigate('/settings')}
          className={`nav-item ${location.pathname === '/settings' ? 'active' : ''}`}
        >
          <IoSettings size={24} />
          <span>Settings</span>
        </button>

        <button
          onClick={() => navigate('/info')}
          className={`nav-item ${location.pathname === '/info' ? 'active' : ''}`}
        >
          <AiOutlineInfoCircle size={24} />
          <span>Info</span>
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
import React from 'react';
import { FaUser, FaLock, FaClock, FaShieldAlt, FaSync, 
         FaTelegram, FaGithub, FaCode } from 'react-icons/fa';

const InfoItem = ({ icon, title, onClick }) => (
  <div 
    className="info-item flex items-center p-4 bg-white rounded-lg shadow-md mb-4 cursor-pointer hover:bg-gray-50"
    onClick={onClick}
  >
    {icon}
    <span className="ml-4 text-lg">{title}</span>
  </div>
);

const Info = () => {
  return (
    <div className="info-container p-4">
      <InfoItem 
        icon={<FaUser className="text-2xl text-blue-500" />}
        title="User"
        onClick={() => {/* Handle click */}}
      />
      
      <InfoItem 
        icon={<FaLock className="text-2xl text-green-500" />}
        title="Password"
        onClick={() => {/* Handle click */}}
      />
      
      <InfoItem 
        icon={<FaClock className="text-2xl text-purple-500" />}
        title="Time"
        onClick={() => {/* Handle click */}}
      />
      
      <InfoItem 
        icon={<FaShieldAlt className="text-2xl text-red-500" />}
        title="Privacy Policy"
        onClick={() => {/* Handle click */}}
      />
      
      <InfoItem 
        icon={<FaSync className="text-2xl text-orange-500" />}
        title="Restart"
        onClick={() => {/* Handle click */}}
      />
      
      <InfoItem 
        icon={<FaTelegram className="text-2xl text-blue-400" />}
        title="Telegram"
        onClick={() => {/* Handle click */}}
      />
      
      <InfoItem 
        icon={<FaGithub className="text-2xl text-gray-700" />}
        title="GitHub"
        onClick={() => {/* Handle click */}}
      />
      
      <InfoItem 
        icon={<FaCode className="text-2xl text-indigo-500" />}
        title="Developer"
        onClick={() => {/* Handle click */}}
      />
    </div>
  );
};

export default Info;
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const timerOptions = [
  { id: 1, duration: '30 seconds', icon: '/icons/timer-30.png' },
  { id: 2, duration: '1 minute', icon: '/icons/timer-1.png' },
  { id: 3, duration: '3 minutes', icon: '/icons/timer-3.png' },
  { id: 4, duration: '4 minutes', icon: '/icons/timer-4.png' }
];

const Settings = () => {
  const [selectedTimer, setSelectedTimer] = useState(null);
  const [status, setStatus] = useState('Offline');
  const [selectedServer, setSelectedServer] = useState(null);
  const [selectedType, setSelectedType] = useState('');

  const handleTimerSelect = (timer) => {
    setSelectedTimer(timer);
    setStatus('Online');
  };

  return (
    <div className="settings-container p-4">
      <div className="images-container flex justify-between mb-6">
        <img src="/images/setting1.jpg" alt="Setting 1" className="w-[48%]" />
        <img src="/images/setting2.jpg" alt="Setting 2" className="w-[48%]" />
      </div>

      <div className="timers-section flex flex-wrap justify-between mb-6">
        {timerOptions.map((timer) => (
          <motion.div
            key={timer.id}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="timer-item w-[23%] text-center"
            onClick={() => handleTimerSelect(timer)}
          >
            <img src={timer.icon} alt={timer.duration} className="w-full mb-2" />
            <p>{timer.duration}</p>
          </motion.div>
        ))}
      </div>

      <div className="display-section flex mb-6">
        <div className="timer-display border p-3 w-2/3">
          {selectedTimer ? selectedTimer.duration : 'Select Timer'}
        </div>
        <div className="status-display border p-3 w-1/3 ml-2">
          {status}
        </div>
      </div>

      <div className="servers-section flex justify-between mb-6">
        {[1, 2, 3].map((num) => (
          <button
            key={num}
            onClick={() => setSelectedServer(num)}
            className={`server-btn ${selectedServer === num ? 'active' : ''}`}
          >
            Server {num}
          </button>
        ))}
      </div>

      <div className="controls-section mb-6">
        <select
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
          className="w-full mb-3 p-2"
        >
          <option value="">Select Type</option>
          <option value="type1">Type 1</option>
          <option value="type2">Type 2</option>
        </select>

        <button className="show-results-btn w-full mb-3">
          Show Results
        </button>

        <div className="history-section border p-3">
          Result History
        </div>
      </div>

      <div className="additional-icons flex justify-between">
        {[1, 2, 3, 4].map((num) => (
          <img
            key={num}
            src={`/icons/additional-${num}.png`}
            alt={`Icon ${num}`}
            className="w-[23%]"
          />
        ))}
      </div>
    </div>
  );
};

export default Settings;
import React, { createContext, useContext, useState } from 'react';

const SliderContext = createContext();

export const useSliderContext = () => useContext(SliderContext);

export const SliderProvider = ({ children }) => {
  const [selectedSlide, setSelectedSlide] = useState(null);

  return (
    <SliderContext.Provider value={{ selectedSlide, setSelectedSlide }}>
      {children}
    </SliderContext.Provider>
  );
};
import React, { createContext, useContext, useState } from 'react';
import { getAllAccommodations } from '../../services/accommodationService';
import { useEffect } from 'react';
const AccommodationContext = createContext();

const AccommodationProvider = ({ children }) => {
  const [accommodations, setAccommodation] = useState([])
  const [filteredAccommodations, setFilteredAccommodations] = useState(accommodations);

  useEffect(() => {
    const getAccommodations = async () => {
      const { result } = await getAllAccommodations()
      setAccommodation(result)
      setFilteredAccommodations(result)
    }
    getAccommodations()
  }, [])

  const updateFilteredAccommodations = (filterText) => {
    const filtered = accommodations.filter(accommodation =>
      accommodation.name.toLowerCase().includes(filterText.toLowerCase())
    );
    setFilteredAccommodations(filtered);
  };

  return (
    <AccommodationContext.Provider value={{ accommodations, setFilteredAccommodations, filteredAccommodations, updateFilteredAccommodations }}>
      {children}
    </AccommodationContext.Provider>
  );
};

export { AccommodationContext, AccommodationProvider }
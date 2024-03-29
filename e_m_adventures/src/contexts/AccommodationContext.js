import React, {
  useMemo,
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
} from 'react';

import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

const AccommodationContext = createContext(null);

export const useAccommodationContext = () => useContext(AccommodationContext);

export const AccommodationContextProvider = ({ children }) => {
  const [getAccommodation, setGetAccommodation] = useState({
    loading: true,
    data: null,
  });

  const [accommodationFocus, setAccommodationFocus] = useState({
    focusSet: false,
    data: null,
  });

  const history = useHistory();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const getData = await fetch(
          'https://em-adv-be.onrender.com/api/accommodation'
        );
        const data = await getData.json();

        setGetAccommodation({ loading: false, data: data.data });
      } catch (err) {
        console.error(err.message);
      }
    };
    fetchData();
  }, [setGetAccommodation]);

  const accommodationFocusHandler = useCallback(
    (id) => {
      const data = [...getAccommodation.data];

      const idIndex = data.findIndex((arr) => arr.accommodationId === id);

      setAccommodationFocus({ focusSet: true, data: data[idIndex] });

      history.push('/accommodationInformation');
    },
    [getAccommodation.data, history]
  );

  const testMessage = () => 'HELLOW FROM THE ACCCOMMODATION CONTEXT';

  const value = useMemo(
    () => ({
      getAccommodation,
      accommodationFocusHandler,
      accommodationFocus,
      testMessage,
    }),
    [getAccommodation, accommodationFocusHandler, accommodationFocus]
  );

  return (
    <AccommodationContext.Provider value={value}>
      {children}
    </AccommodationContext.Provider>
  );
};

AccommodationContextProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

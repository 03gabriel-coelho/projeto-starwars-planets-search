import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import AppContext from './AppContext';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [oneFilter, setOneFilter] = useState('');

  useEffect(() => {
    const requestApi = async () => {
      const ENDPOINT = 'https://swapi-trybe.herokuapp.com/api/planets';
      const request = await fetch(ENDPOINT);
      const requestJSON = await request.json();
      const result = requestJSON.results;
      setData(result);
    };
    requestApi();
  }, []);

  const [input, setInput] = useState({
    filterByName: {
      name: '',
    },
  });
  const [filter, setFilter] = useState({
    filterByNumericValues: [{
      column: '',
      comparison: '',
      value: '' }],
  });
  const contextValue = {
    data,
    input,
    setInput,
    filter,
    setFilter,
    oneFilter,
    setOneFilter,
  };

  return (
    <AppContext.Provider value={ contextValue }>
      {children}
    </AppContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Provider;

import PropTypes from 'prop-types';
import React, { useState } from 'react';
import AppContext from './AppContext';

function Provider({ children }) {
  const [input, setInput] = useState({
    filterByName: {
      name: '',
    },
  });
  const [filter, setFilter] = useState('');
  const contextValue = {
    input,
    setInput,
    filter,
    setFilter,
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

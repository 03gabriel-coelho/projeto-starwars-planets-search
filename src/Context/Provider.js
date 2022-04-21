import PropTypes from 'prop-types';
import React, { useState } from 'react';
import AppContext from './AppContext';

function Provider({ children }) {
  const [data, setData] = useState('vazio');
  const contextValue = {
    data,
    setData,
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

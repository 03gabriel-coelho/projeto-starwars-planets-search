import React, { useContext } from 'react';
import AppContext from '../Context/AppContext';

function InputSearch() {
  const { setInput } = useContext(AppContext);

  function InputActualize({ target }) {
    setInput({
      filterByName: {
        name: target.value,
      },
    });
  }

  return (
    <input type="text" data-testid="name-filter" onChange={ InputActualize } />
  );
}

export default InputSearch;

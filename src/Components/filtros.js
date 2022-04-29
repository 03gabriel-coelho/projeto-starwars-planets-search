import React, { useContext } from 'react';
import AppContext from '../Context/AppContext';

function Filtros() {
  const { filter } = useContext(AppContext);
  const { filterByNumericValues } = filter;
  return (
    <div>
      { filter.length !== 0 ? (
        filterByNumericValues.map((element, key) => (
          <p
            key={ key }
          >
            { `${element.column} ${element.comparison} ${element.value}` }

          </p>
        ))
      ) : null }
    </div>
  );
}

export default Filtros;

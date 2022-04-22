import React, { useState, useContext } from 'react';
import AppContext from '../Context/AppContext';

function FiltroNumber() {
  const { setFilter } = useContext(AppContext);
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState(0);

  function defineValues({ target }) {
    if (target.name === 'column') setColumn(target.value);
    if (target.name === 'comparison') setComparison(target.value);
    if (target.name === 'value') setValue(target.value);
  }

  function insertValues() {
    setFilter({
      filterByNumericValues: [{
        column,
        comparison,
        value }],
    });
  }

  return (
    <form>
      <select
        data-testid="column-filter"
        name="column"
        onChange={ defineValues }
        value={ column }
      >
        <option name="population">population</option>
        <option name="orbital_period">orbital_period</option>
        <option name="diameter">diameter</option>
        <option name="rotation_period">rotation_period</option>
        <option name="surface_water">surface_water</option>
      </select>
      <select
        data-testid="comparison-filter"
        name="comparison"
        onChange={ defineValues }
        value={ comparison }
      >
        <option name="maior">maior que</option>
        <option name="menor">menor que</option>
        <option name="igual">igual a</option>
      </select>
      <input
        type="number"
        data-testid="value-filter"
        value={ value }
        name="value"
        onChange={ defineValues }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ insertValues }
      >
        Filtrar

      </button>
    </form>
  );
}

export default FiltroNumber;

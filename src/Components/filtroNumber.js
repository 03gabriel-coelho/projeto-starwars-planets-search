import React, { useState, useContext } from 'react';
import AppContext from '../Context/AppContext';

function FiltroNumber() {
  const { setFilter, filter } = useContext(AppContext);
  const [options, setOptions] = useState(
    ['population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'],
  );
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState(0);

  function defineValues({ target }) {
    if (target.name === 'column') setColumn(target.value);
    if (target.name === 'comparison') setComparison(target.value);
    if (target.name === 'value') setValue(target.value);
  }

  function insertValues() {
    const { filterByNumericValues } = filter;
    console.log(filterByNumericValues, 'numeric aqui');
    setOptions(options.filter((param) => param !== column));
    if (filterByNumericValues !== undefined) {
      setFilter({
        filterByNumericValues: [...filterByNumericValues, {
          column,
          comparison,
          value }],
      });
    } else {
      setFilter({
        filterByNumericValues: [{
          column,
          comparison,
          value }],
      });
    }
  }

  return (
    <form>
      <select
        data-testid="column-filter"
        name="column"
        onChange={ defineValues }
        value={ column }
      >
        {options.map((option) => (
          <option name={ option } key={ option }>{option}</option>
        ))}
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
        onClick={ () => insertValues() }
      >
        Filtrar

      </button>
    </form>
  );
}

export default FiltroNumber;

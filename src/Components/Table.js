import React, { useContext, useEffect, useState } from 'react';
// import AppContext from '../Context/AppContext';
import AppContext from '../Context/AppContext';

function Table() {
  const [filtered, setFiltered] = useState([]);
  const { input: { filterByName: { name } },
    filter: { filterByNumericValues }, data, oneFilter } = useContext(AppContext);

  console.log(filterByNumericValues, 'filter');
  console.log(name, 'name');
  console.log(data, 'resultApi');
  console.log(oneFilter, 'oneFilter');
  console.log(filtered, 'filtered');

  useEffect(() => {
    const setFilter = (valueAFilter) => {
      const { column, comparison, value } = oneFilter;
      const resultFilter = valueAFilter.filter((element) => {
        if (comparison === 'maior que') {
          return Number(element[column]) > Number(value);
        }
        if (comparison === 'menor que') {
          return Number(element[column]) < Number(value);
        }
        return Number(element[column]) === Number(value);
      });
      setFiltered(resultFilter);
    };

    if (filterByNumericValues.length === 1) {
      setFilter(data);
    } else {
      setFilter(filtered);
    }
  }, [oneFilter]);

  const insertMap = filtered.length !== 0 ? filtered : data;

  const insertMapResult = name.length === 0 ? insertMap : (
    insertMap.filter((e) => (e.name.indexOf(name) >= 0))
  );

  return (
    <div>
      { data !== [] ? (
        <table>
          <tr>
            <th>Name</th>
            <th>Rotation Period</th>
            <th>Orbital Period</th>
            <th>Diameter</th>
            <th>Climate</th>
            <th>Gravity</th>
            <th>Terrain</th>
            <th>Surface Water</th>
            <th>Population</th>
            <th>Films</th>
            <th>Created</th>
            <th>Edited</th>
            <th>URL</th>
          </tr>
          { insertMapResult.map((planet, planetI) => (
            <tr key={ planetI }>
              <td>{ planet.name }</td>
              <td>{ planet.rotation_period }</td>
              <td>{ planet.orbital_period }</td>
              <td>{ planet.diameter }</td>
              <td>{ planet.climate }</td>
              <td>{ planet.gravity }</td>
              <td>{ planet.terrain }</td>
              <td>{ planet.surface_water }</td>
              <td>{ planet.population }</td>
              <td>
                { planet.films.map((e, i) => (
                  <p key={ i }>{ e }</p>
                )) }
              </td>
              <td>{ planet.created }</td>
              <td>{ planet.edited }</td>
              <td>{ planet.url }</td>
            </tr>
          )) }
        </table>
      ) : (<h1>Carregando...</h1>)}
    </div>
  );
}

export default Table;

import React, { useContext, useEffect, useState } from 'react';
// import AppContext from '../Context/AppContext';
import AppContext from '../Context/AppContext';
import requisitAPI from './requisitAPI';

function Table() {
//   const { data } = useContext(AppContext);
  const { input: { filterByName: { name } }, filter } = useContext(AppContext);
  console.log(filter);
  const [filt, setFilt] = useState([]);
  const result = requisitAPI();

  useEffect(() => {
    const { filterByNumericValues } = filter;

    const filtResultName = name.length === 0 && filter === ''
      ? (result) : (result.filter((e) => (
        e.name.indexOf(name) >= 0
      )));

    const filtResultFilt = filter === '' ? filtResultName : filterByNumericValues
      .map((values) => {
        const { column, comparison, value } = values;
        const resul = filtResultName.filter((planet) => {
          if (comparison === 'maior que') {
            return parseInt(planet[column], 10) > parseInt(value, 10);
          }
          if (comparison === 'menor que') {
            return parseInt(planet[column], 10) < parseInt(value, 10);
          }
          return planet[column] === value;
        });
        return resul;
      });
    console.log([...filtResultFilt], 'filt resulttttt');

    if (filter === '') {
      setFilt(filtResultFilt);
    } else {
      setFilt(filtResultFilt[0]);
    }
  }, [name, result, filter]);

  return (
    <div>
      {filt !== [] ? (
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
          { filt.map((planet, planetI) => (
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

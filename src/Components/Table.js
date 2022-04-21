import React from 'react';
// import AppContext from '../Context/AppContext';
import requisitAPI from './requisitAPI';

function Table() {
//   const { data } = useContext(AppContext);
  const result = requisitAPI();
  console.log(result);

  return (
    <div>
      {result !== undefined ? (
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
          { result.map((planet, planetI) => (
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

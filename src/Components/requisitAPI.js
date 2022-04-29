// import { useState, useEffect } from 'react';

// function useRequisitAPI() {
//   const [data, setData] = useState([]);
//   const requestApi = async () => {
//     const ENDPOINT = 'https://swapi-trybe.herokuapp.com/api/planets';
//     const request = await fetch(ENDPOINT);
//     const requestJSON = await request.json();
//     const result = requestJSON.results;
//     setData([...result]);
//   };
//   // useEffect(() => {
//   //   const ENDPOINT = 'https://swapi-trybe.herokuapp.com/api/planets';
//   //   const getAPI = async () => {
//   //     fetch(ENDPOINT)
//   //       .then((response) => response.json())
//   //       .then((result) => { setData([...result.results]); });
//   //   };
//   //   getAPI();
//   // }, []);
//   // return data;
// }

// export default useRequisitAPI;

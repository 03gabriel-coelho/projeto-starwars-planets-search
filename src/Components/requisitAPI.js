import { useState, useEffect } from 'react';

function useRequisitAPI() {
  const [data, setData] = useState([]);
  //   const { setData } = useContext(AppContext);
  useEffect(() => {
    const ENDPOINT = 'https://swapi-trybe.herokuapp.com/api/planets';
    // const NEXTPOINT = 'https://swapi-trybe.herokuapp.com/api/planets/?page=2';
    const getAPI = async () => {
      fetch(ENDPOINT)
        .then((response) => response.json())
        .then((result) => { setData([...result.results]); });
    };
    getAPI();
    // const getNext = async () => {
    //   fetch(NEXTPOINT)
    //     .then((response) => response.json())
    //     .then((result) => { setData([...data, ...result.results]); });
    // };
    // getNext();
  }, []);
  return data;
}

export default useRequisitAPI;

import React, { useEffect, useState } from 'react'

function useFetch(url){

    let [data,setData] = useState(null);
    let [ loading, setLoading ] = useState(false);
    let [ error, setError ] = useState(null);

    
    useEffect(() => {

        const abortController = new AbortController();
        const signal = abortController.signal;

      setLoading(true);
        fetch(url, {
            signal
        })
        .then(res => {
          if(!res.ok) {
            throw Error('something went wrong');
          }
          return res.json();
        })
        .then(data => {
          setData(data);
          setError(null);
          setLoading(false);
        })
        .catch(e => {
          setError(e.message);
        })
        //cleanup function
        return ()=>{
            console.log('clean up function');
            abortController.abort();
        }
      },[url]);
    return { data , loading , error };

}
export default useFetch;
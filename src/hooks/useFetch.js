import React, { useEffect, useState, useRef } from 'react'

function useFetch(url, _options){

    let [data,setData] = useState(null);
    let [ loading, setLoading ] = useState(false);
    let [ error, setError ] = useState(null);

    //let [options, setOptions] = useState(_options)
    //obj, array
    let options = useRef(_options).current;

    
    useEffect(() => {
        console.log(options);
        let abortController = new AbortController();
        let signal = abortController.signal;

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
      },[url, options]);
    return { data , loading , error };

}
export default useFetch;
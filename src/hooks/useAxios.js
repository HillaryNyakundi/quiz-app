import axios from 'axios';
import { useEffect, useState } from 'react'

axios.defaults.baseURL = "https://opentdb.com/"

const useAxios = ({url}) => {
       const [response, setResponse] = useState(null);
       const [error, setError] = useState("");
       const [loading, setLoading] = useState(true);
       return {response, error, loading}


       useEffect(() => {
       const fetchData = async () => {
       try {
              const response = await axios.get(url);
              setResponse(response.data);
       } catch (error) {
              setError(error.message);
       }
       setLoading(false);
       };

       fetchData();
       }, [url]);

}

export default useAxios
import { useState, useEffect } from "react";

export const useFetch = (url, method = "GET") => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [option, setOption] = useState();
  // console.log(option);
  const postData = (postData) => {
    setOption({
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(postData),
    });
  };

  useEffect(() => {
    const fetchData = async (optionFetch) => {
      // console.log(optionFetch);
      setIsLoading(true);

      try {
        let response;
        if (optionFetch === undefined) {
          response = await fetch(url);
        } else {
          response = await fetch(url, { ...optionFetch });
        }

        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const json = await response.json();

        setIsLoading(false);

        setData(json);
        setError(null);
      } catch (err) {
        setIsLoading(false);
        setError(err.message);
      }
    };

    // fetchData();
    if (method === "GET") {
      fetchData(option);
    }
    if (method === "POST") {
      fetchData(option);
    }
  }, [url, method, option]);
  
  return { data, isLoading, error, postData };
};

import { useState, useEffect, useCallback } from "react";

export const useFetch = (url, url2) => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState({});
  const [movies, setMovies] = useState({});
  const [moviesLoading, setMoviesLoading] = useState(true);
  const getProducts = useCallback(async () => {
    const response = await fetch(url);
    const products = await response.json();
    setProducts(products);
    setLoading(false);
  }, [url]);

  useEffect(() => {
    getProducts();
  }, [url, getProducts]);
  /*to get the searched movie data for the grid display */

  const getMovies = useCallback(
    async (signal) => {
      const response = await fetch(url2, { signal: signal });
      const products = await response.json();
      setMovies(products);
      setMoviesLoading(false);
    },
    [url2]
  );

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;
    getMovies(signal);
    return function cleanup() {
      abortController.abort();
    };
  }, [url2, getMovies]);

  return { loading, products, movies, moviesLoading };
};

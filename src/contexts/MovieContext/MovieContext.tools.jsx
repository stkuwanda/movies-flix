import { createContext, useContext } from 'react';

const movieContext = createContext();
const useMovieContext = () => useContext(movieContext);

export { movieContext, useMovieContext };

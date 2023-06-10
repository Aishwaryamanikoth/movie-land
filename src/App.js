import React from 'react';
import { useState,useEffect } from 'react';
import './App.css';
import SearchIcon from './search.svg'
import MovieCard from './movieCard'


const API_URL='http://www.omdbapi.com?apikey=e7a2b61b'

const App =() => {
const [movies,setMovies] = useState([]);
const[searchVal,setSearchVal]= useState('');

    const SearchMovies = async(title) =>{
        const response = await fetch(`${API_URL}&s=${title}`)
        const data = await response.json();

    setMovies(data.Search);
    }
    useEffect(()=>{ SearchMovies('Avengers');
},[]);    
    return(
         <div className="app">
            <h1>WatchMovies🎬</h1>
            <div className="search">
                <input placeholder="search for movies" value={searchVal}
                 onChange={(e)=> {setSearchVal(e.target.value)}}
                />
                <img 
                src={SearchIcon}
                alt="search"
                onClick={() => SearchMovies(searchVal)}
                />
            </div>

            {
                movies?.length > 0 ?(
                    <div className="container">
                     {movies.map((movie) => (
                        <MovieCard movie={movie}/>
                     ))}
                 </div>
                ) :
                (
                    <div className="empty">
                        <h2>No movies found</h2>
                        </div>
                )
            }

           
         </div>
        );
}

export default App;
import React from 'react';
import { useState,useEffect } from 'react';
import './App.css';
import SearchIcon from './search.svg'
import MovieCard from './movieCard'


const App =() => {
const [movies,setMovies] = useState([]);
const[searchVal,setSearchVal]= useState('');

    const SearchMovies = async(title) =>{
        const response = await fetch(`${process.env.REACT_APP_API_KEY}&s=${title}`)
        const data = await response.json();

    setMovies(data.Search);
    }
    useEffect(()=>{ SearchMovies('Avengers');
},[]);    
    return(
         <div className="app">
            <h1>WatchMovies🎬</h1>
            <div className="search">
                <input placeholder="Search for movies" value={searchVal}
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


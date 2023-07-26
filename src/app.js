import { useEffect, useState } from "react";
import './App.css'
import SearchIcon from './search.svg'
import MovieCard from "./MovieCard";

const apiUrl = 'https://www.omdbapi.com?apikey=effbf68d'

const App = ()=>{
    const [movies, setMovies] = useState();
    const [searchTerm, setSearchTerm] = useState('');
    const searchMovie = async (title) => {
        const response = await fetch(`${apiUrl}&s=${title}`);
        const data = await response.json(); 
        setMovies(data.Search);
    }
    useEffect(() => {
        searchMovie('Spiderman')
    },[]);

    return (
        <div className="app">
            <h1>MovieCorner</h1>

            <div className="search">
                <input placeholder="Search For Movies" value={searchTerm}onChange={(e)=>setSearchTerm(e.target.value)}/>
                <img src={SearchIcon} alt="search" onClick={()=>searchMovie(searchTerm)}/>
            </div>
            
            {
                movies?.length > 0 
                ? (
                    <div className="container">
                        {movies.map((movie)=>{
                               return <MovieCard movie={movie} />
                            })
                        }
                    </div>
                ) : (
                    <div className="empty">
                        <h2>No Movie Found</h2>
                    </div>
                )
            }
        </div>
    );
        
}

export default App
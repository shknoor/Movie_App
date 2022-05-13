import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Genres from '../components/Genres/Genres';
import CustomPagination from '../components/Pagination/CustomPagination';
import SingleContent from '../components/SingleContent/SingleContent';
import useGenre from '../Hooks/useGenres';
export const api_key = "4bf39d09d6fc8fc3eb6bf1d620e7a0fd";

const Series = () => {
  
    const [genres, setGenres] = useState([]);
    const [selectedGenres, setSelectedGenres] = useState([]);
    const [page, setPage] = useState(1)
    const [content, setContent] = useState ([]);
    const [numOfPages, setNumOfPages] =useState()
    const genreforURL = useGenre(selectedGenres);
     console.log(selectedGenres);
    
    const fetchMovies = async () => {
    const {data} = await axios.get(
      `https://api.themoviedb.org/3/discover/tv?api_key=${api_key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate&page=${page}&with_genres=${genreforURL}`);
  
    //console.log(data.results);
    setContent(data.results);
    setNumOfPages(data.total_pages)
  
  };
   
  useEffect(() => {
    window.scroll(0, 0);
   fetchMovies(); 
   // eslint-disable-next-line
  }, [genreforURL, page]);

  return (
    <div>
        <span className="pageTitle">Series</span>
        <Genres
        type="tv"
        selectedGenres={selectedGenres}
        setSelectedGenres={setSelectedGenres}
        genres={genres}
        setGenres={setGenres}
        setPage={setPage}
      />
        <div className="trending">
         {content && 
         content.map((c,i) => ( 
         <SingleContent
         key={i} 
         id={c.id} 
         poster_path={c.poster_path} 
         title={c.title || c.name} 
         date={c.first_air_date || c.release_date}
         media_type="tv"
         vote_average={c.vote_average}
         />
        ))} 
    </div>
    {numOfPages > 1 &&   (
     <CustomPagination setPage={setPage} numOfPages={numOfPages} />
     )}
     </div>
    
  );
}

export default Series;
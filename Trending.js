import axios from 'axios';
import React, { useEffect, useState } from 'react';
import SingleContent from '../components/SingleContent/SingleContent';
import './Trending.css';
import CustomPagination from '../components/Pagination/CustomPagination';

export const api_key="4bf39d09d6fc8fc3eb6bf1d620e7a0fd";
const Trending = () => {
const [page , setPage]=useState(1);
const[content,setContent]=useState([]);

const fetchTrending =async() =>{
const{data}= await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${api_key}&page=${page})`);

console.log(data.results);
setContent(data.results);

  };
  useEffect(()=>{
    window.scroll(0,0);
    fetchTrending();
  }, [page]);
    return (
  <div>
     <span className="pageTitle">Trending</span>
     <div className='trending'>
       {content && content.map((c)=>( 
         <SingleContent 
         key={c.id} 
         id={c.id} 
         poster_path={c.poster_path} 
         title={c.title || c.name} 
         date={c.first_air_date || c.release_date}
         media_type={c.media_type}
         vote_average={c.vote_average}
         />
        ))}


     </div>
     <CustomPagination setPage={setPage} />
  </div>
    );
}
export default Trending;
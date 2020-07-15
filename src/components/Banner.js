import React, { useState , useEffect } from 'react' ;
import axios from 'axios';
import { FaRegBookmark } from "react-icons/fa";
const preFix = "https://api.themoviedb.org/3" ;
const Banner = ({Url,displayList,myList,list,setList}) => {
    const[movies,setMovies] = useState([]) ;
    const[rand,setRand] = useState(0) ;
    const removeBookMark = (movie) => {
        var newList = list.filter( m=>{
            return m.id!==movie.id
        });
        setList(newList) ;

    }

    useEffect(() => {
        async function fetchDetails(){
            const {data} = await axios.get(preFix+Url) ;
            setMovies(data?.results) ;
            setRand(Math.floor( Math.random() * Math.floor(20) )) ;
        }
        fetchDetails() ;
    },[Url]) ;
    if( myList ) {
        return(
            <div className="list__content">
                <h1 className="banner__title">SAVED LIST</h1>
                <div className="banner__button"> <button onClick={()=>displayList()}>BACK</button> </div>
                <div className="list__content">{
                    list.map( movie => {
                        return(
                            <div className="bookmark__img__wrapper">
                                <div className="bookmark__header__img">

                                <img key= {movie.id} className="bookmark__row__poster" src={"https://image.tmdb.org/t/p/original/"+movie.poster_path} alt={movie.name||movie.title} />  
                                </div>
                                <div className="bookmark__wrapper">
                                    <div className="bookmark__heading">{movie?.name||movie?.title}</div>
                                    <div className="bookmark__overview">{movie?.overview}</div>
                                    <div className="bookmark__rating">Ratings : {movie?.vote_average}/10</div>
                                    <div className="poster__bookmark">
                                        <h3>Remove from the List</h3>
                                        <FaRegBookmark onClick={
                                            ()=>removeBookMark(movie)
                                        }/>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }</div>
            </div>
        )
    }
    
    return(
        <div className="banner__wrapper"
            style = {{
                backgroundSize : "cover" ,
                backgroundImage:`url(
                    "https://image.tmdb.org/t/p/original${movies[rand]?.backdrop_path}" 
                )` ,
                backgroundPosition :"center center"
            }}
        >
            <div className="banner__content">
                <h1 className="banner__title">{movies[rand]?.name} </h1>
                <div className="banner__button">
                    <button className="banner__play">Play</button>
                    <button className="banner__list" onClick={displayList}>My List</button>
                </div>
                <h4 className="banner__description">{movies[rand]?.overview}</h4>
            </div>
            <div className="banner__fadeOut"></div>
        </div>
    );
}
export default Banner ;
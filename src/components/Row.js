import React , {useEffect,useState} from 'react' ;
import {FaBookmark} from 'react-icons/fa'
import axios from 'axios' ;
import Popup from 'reactjs-popup' ;
const preFix = "https://api.themoviedb.org/3" ;
 
const Row = ({heading,Url,list,setList,large}) => {
    const[movies,setMovies] = useState([]) ;
    function checkBookMark(movie) {
        for( var i = 0 ;i<list.length;i++ ) {
            if( list[i].id===movie.id ) return true ;
        }
        return false ;
    }
    const removeBookMark = (movie) => {
        let newList = list.filter( m => m?.id!==movie?.id )
        setList(newList) ;
    }
    useEffect(() => {
        async function fetchDetails(){
            const {data} = await axios.get(preFix+Url) ;
            setMovies(data?.results) ; 
        }
        fetchDetails();
    }, [Url])
    return(
        <div className="row__contents">
            <div className="container__heading"><h2>{heading}</h2></div>
            <div  className="containter__poster">{
                movies.map( movie => {
                    return(
                        <Popup
                            trigger={<img key={movie.id} className={`row__poster ${large && "row__Lposter"}` } src={"https://image.tmdb.org/t/p/original/"+movie.poster_path} alt={movie.name} />  }
                            modal
                        >
                            <div className="poster__content__popup" >
                                <h1 >{movie.name || movie.title}</h1>
                                <div className="poster__overview">
                                    <h3>OVERVIEW :  </h3>
                                    {movie?.overview}
                                </div>
                                <div className="poster__details"> {  movie?.release_date ? ( "Relase Date : "+movie?.release_date ) : ("") } </div>
                                <div className="poster__rating__wrapper">
                                    <div className="poster__rating">
                                        Ratings : {movie?.vote_average}/10
                                    </div>
                                    <div className="poster__bookmark">
                                        { 
                                            checkBookMark(movie) ? (
                                                <div>
                                                    <h3>Remove from the List</h3>
                                                    <FaBookmark onClick={
                                                        ()=>{removeBookMark(movie)}
                                                    } />
                                                </div>
                                            ) : (
                                                <div>
                                                    <h3>Add to List</h3>
                                                    <FaBookmark onClick={()=>setList([...list,movie])}/>
                                                </div>
                                            )
                                        }      
                                        
                                    </div>
                                </div>
                                
                            </div>
                        </Popup>
                    )
                })
            }</div>
        </div>
     );
 }

 export default Row ;
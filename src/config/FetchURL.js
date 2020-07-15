const API_KEY = "d4e015514c62107872a39af575280be0" ;
const request = {
    fetchTrending : `/trending/all/week?api_key=${API_KEY}&language=en-US` , 
    fetchNetflixOrginal : `/discover/tv?api_key=${API_KEY}&with_networks=213` , 
    fetchTopRated : `/movie/top_rated?api_key=${API_KEY}&language=en-US` , 
    fetchActionMovie : `/discover/movie?api_key=${API_KEY}&with_genres=28` , 
   
    fetchComedyMovie : `/discover/movie?api_key=${API_KEY}&with_genres=35` ,
    fetchHorroMovie : `/discover/movie?api_key=${API_KEY}&with_genres=27` ,
    fetchRomanceMovie : `/discover/movie?api_key=${API_KEY}&with_genres=10749` ,
    fetchDocumentries : `/discover/movie?api_key=${API_KEY}&with_genres=99`, 
}

export default request ;

import React , {useState} from 'react';
import './App.css';
import FetchURL from './config/FetchURL' ;
import Row from './components/Row' ;
import Banner from './components/Banner';
import NavBar from './components/NavBar'
function App() {
  const [myList, setMyList] = useState(false) ;
  const [list,setList] = useState([]) ;
  const displayList = () => {
    setMyList(!myList);
    console.log(" h "+myList)
  }
  return (
    <div className="App">
        <NavBar/>
        <Banner Url={FetchURL.fetchNetflixOrginal} displayList={displayList} list={list}myList={myList}setList={setList} />
        <Row heading="NETFLIX ORGINALS"Url={FetchURL.fetchNetflixOrginal} list={list} setList={setList}large={true}/>
        <Row heading="TRENDING" Url={FetchURL.fetchTrending}  list={list}setList={setList}large={false} />
        <Row heading="TOP RATED"Url={FetchURL.fetchTopRated}  list={list}setList={setList}large={false}/>
        <Row heading="TOP ACTION MOVIES"Url={FetchURL.fetchActionMovie}  list={list}setList={setList}large={false}/>
        <Row heading="TOP COMODEY MOVIES"Url={FetchURL.fetchComedyMovie} list={list} setList={setList}large={false}/>
        <Row heading="TOP HORROR MOVIES"Url={FetchURL.fetchHorroMovie} list={list} setList={setList}large={false}/>
        <Row heading="TOP ROMANCE MOVIE"Url={FetchURL.fetchRomanceMovie} list={list} setList={setList}large={false}/>
        <Row heading="DOCUMENTRY MOVIES"Url={FetchURL.fetchDocumentries}  list={list}setList={setList}large={false}/>
    </div>
  );
}

export default App;

import './App.css';
import React, {useRef,useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  
  const [person,setperson] = useState('');
  const [height,setheight] = useState('');
  const [isLoading,setisLoading] = useState(false);

  function fetchMovieHandler(){
    setisLoading(true);
    fetch('https://swapi.py4e.com/api/people/1/').then(response =>{
      return response.json();
    }).then(data =>{
      setperson(data.name);
      setheight(data.height);
      setisLoading(false);
    })
  }


  return(
    <div>
      <button onClick={fetchMovieHandler}>FetchMovie</button>
      {!isLoading && <p>{person} and your heigth is {height}</p>}
      {isLoading && <p>Loading...</p>}
    </div>
  );
}
export default App;

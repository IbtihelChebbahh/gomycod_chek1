import './App.css';
import { Fragment } from 'react';
import Greeting from './Components/Greeting';
function App() {
  const fullName='Jhon dee '
  const age=44
  const Arra=['Jhoe','Jane']
  //const res=Arra.map(el=>`Hello ${el}`);
  
  //const res=Arra.map(name=> <li>{name}</li>);
  //console.log(res); 
  return (
    <Fragment>
    <Greeting fullName={fullName} age={age}/>

     <p> {1+2}</p>
     <ul>
     {Arra.map((name,i)=>(<li key={i}>{name}</li>))}</ul>
 </Fragment>
  );
}

export default App;

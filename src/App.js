import './App.css';
import ProfileComponent from './Profile/ProfileComponent';
import bobby from'./BobTheBuilder.jpg' ;

import React,{ useState } from 'react';

function App() {
  const fullname="bob the builder";
  let what=true
  const [toggle,setToggle]=useState(what);
  const hundlename = () => {
    return alert(`hello ${fullname}`)
  };
  const toggler=()=>{
    setToggle( (what) => !what);
  };
  return (
    <div className="App">
      <div className={toggle ? "active": ""}>
     <ProfileComponent handle={hundlename} fullName={fullname} bio ='i build stuff for fun , my tools are handy AND I HAVE A YELLOW HAMMER!!!' profession=' you asking about my profession ? builder DUH'>
      {bobby}
      </ProfileComponent> 
      </div>
      <button onClick={toggler}></button>
     </div> 
  );

}

export default App;

import './App.css';
import ProfileComponent from './Profile/ProfileComponent';
import image from'./BobTheBuilder.jpg' ;

function App() {
  return (
    <div className="App">
     <ProfileComponent fullName='bob the builder' bio ='i build stuff for fun , my tools are handy AND I HAVE A YELLOW HAMMER!!!' profession=' you asking about my profession ? builder DUH'>
      <img src = {image} alt ="no image" />
      </ProfileComponent> 
     </div> 
  );
}

export default App;

import './App.css';
import React from 'react';
import LogInScreen from './screens/LogInScreen';
import HomeScreen from './screens/HomeScreen';

function App() {
  const user = localStorage.getItem('user');
  if(user){
    return(
      <HomeScreen user={user}/>
    )
  }
  else{
    return (
      <LogInScreen/>
    );
  }
}

export default App;
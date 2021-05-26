import '../styles/HomeScreen.css';
import React from 'react';

function HomeScreen(props){
    const user = JSON.parse(props.user);
    return(
        <div className="homeScreen">
            <h1>Welcome, {user.firstName} {user.lastName}</h1>
            
            <button className="homescreen-logout" onClick={() => {
                localStorage.clear();
                window.location.reload();
            }}>Log Out</button>
        </div>
    );
}

export default HomeScreen;
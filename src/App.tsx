import React from 'react';
import './App.css';
import { Button } from '@mui/material';
import NavBar from './components/organisms/NavBar/NavBar';

function App() {
  return (
    <div className="App">
        <div style={{position: 'relative'}}>
          <img style={{height: '100vh', display: 'block', justifySelf: 'center'}} src='images/thumbnail.jpg' alt="thumbnail" />
          <div style={{position: 'absolute', backgroundColor: '#3a567350', width: '100%', height: '100%', top: 0, alignItems: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'column', gap: '3%'}}> 
            <span style={{margin: 0, fontSize: '4rem', fontWeight: 'bold', color: 'white'}}>Hi, I am Ha Ngo </span>
            <span style={{margin: 0, fontSize: '4rem', fontWeight: 'bold', color: 'white'}}>Full stack Software Engineer</span>
            <div style={{display: 'flex', flexDirection: 'row', width: '100%', height: '8%', gap: '5%', justifyContent: 'center', alignItems: 'center'}}>
              <Button style={{backgroundColor:'#f8e5e6', width: '15%', height: '100%', borderRadius: '3rem', color:'#3a567a', fontSize: '1rem', fontWeight: 'bold'}} variant='contained'> Download CV </Button>
              <Button style={{width: '15%', height: '100%', borderRadius: '3rem', border: "5px solid #f8e5e6", color: '#f8e5e6', fontSize: '1rem', fontWeight: 'bold'}} variant='outlined'> Contact </Button>
            </div>
          </div> 
        </div>
    </div>
  );
}

export default App;

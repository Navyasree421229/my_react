
import React from 'react';
import { BrowserRouter as Router, Route,Link, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import OtherPage from './OtherPage';
import './App.css';
function App() {
  const navigateToOtherPage = () => {
    window.location.href = '/otherpage';
  };
  return (
    
    <div>
      <div className="App1">
        <img src='https://m.media-amazon.com/images/I/31uCUjopLVL.jpg' style={{width:'350px',height:'435px'}} />
        
      </div>
      <div className='App2'>
        <img src='https://e1.pxfuel.com/desktop-wallpaper/934/976/desktop-wallpaper-rrr-bollywood-2022-movie-poster-thumbnail.jpg' style={{width:'380px',height:'435px'}}/>
      </div>
     <div className='App3'>
        <img src='https://filmfare.wwmindia.com/content/2022/sep/adipurush-poster-first-look.jpg' style={{width:'380px',height:'435px'}}/>
      </div>
      <div className='Navy'>
      <Router>
        
        <div>
              <button onClick={navigateToOtherPage} style={{background:'red',color:'white',width:'350px',height:'50px',position:'relative',left:'50px',bottom:'83px'}}>Book Tickets</button>
              <button onClick={navigateToOtherPage} style={{background:'red',color:'white',width:'380px',height:'50px',position:'relative',left:'79px',bottom:'85px'}}>Book Tickets</button>
              <button onClick={navigateToOtherPage} style={{background:'red',color:'white',width:'380px',height:'50px',position:'relative',left:'119px',bottom:'85px'}}>Book Tickets</button>
        <Routes>
        <Route exact path="/" component={HomePage} />
        <Route path="/otherpage" component={OtherPage} />
        </Routes>
        </div>
      </Router>
      </div>
    </div>
  );
}

export default App;

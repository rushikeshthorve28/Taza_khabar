import './App.css';

import React, { useState } from 'react';
import {
  Route,
  BrowserRouter as Router,
  Routes
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';
import Navbar from './components/Navbar';
import News from './components/News';
const App =()=> {
  const apiKey= "6f40f398516b4ae2a349e87a52e7eee3";
  const[progress,setprogress]=useState(0);
    return (
      <Router> 
      <div>
       <Navbar/>
     <LoadingBar height={3} color='#f11946' progress={progress}/>
        <Routes>
        
        <Route exact path="/"
          element={<News  apiKey={apiKey} setprogress={setprogress} key="general" pageSize={5} country="in" category="general"/>}>
          </Route>
          <Route exact path="/entertainment"
         element={<News  apiKey={apiKey}setprogress={setprogress}  key="entertainment" pageSize={5} country="in" category="entertainment"/>}></Route>
       
          <Route exact path="/health"
          element={ <News   apiKey={apiKey} setprogress={setprogress}  key="health" pageSize={5} country="in" category="health"/>}>
          </Route>
          <Route exact path="/science"
          element={<News  apiKey={apiKey} setprogress={setprogress}  key="science" pageSize={5} country="in" category="science"/>}>
          </Route>
          <Route  exact path="/technology"
         element={<News  apiKey={apiKey}  setprogress={setprogress}  key="technology" pageSize={5} country="in" category="technology"/>}>
          </Route>
          <Route exact path="/general"
          element={<News  apiKey={apiKey} setprogress={setprogress}   key="general" pageSize={5} country="in" category="general"/>}>
          </Route>
          <Route exact path="/sports"
         element={ <News  apiKey={apiKey}  setprogress={setprogress}  key="sports" pageSize={5} country="in" category="sports"/>}>
          </Route>
          
        </Routes>
      
      </div>
      </Router> 
     
    )
  }
  export default App;
 

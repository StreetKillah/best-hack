import './App.css';
import React from "react";
import Navbar from './components/Navbar';
import Main from './components/Main';
import Stock from './components/Stock';

import { BrowserRouter, Route, Routes } from 'react-router-dom';


class App extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <BrowserRouter>
          <div className='App'>
            <Navbar />
            <Routes>
                <Route index element={<Main /> }/> 
                <Route path="/stock" element={<Stock /> }/> 
            </Routes>
          </div>
         </BrowserRouter>
    );
  }
}



export default App;

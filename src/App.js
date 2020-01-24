import React from 'react';
import './App.css';
import { SearchProvider, Child } from './components/SearchProvider/SearchProvider';

function App() {
  return (
    <div className="App">
    <SearchProvider name="Test" />
    
     
    </div>
  );
}

export default App;

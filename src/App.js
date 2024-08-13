import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
      axios.get('http://localhost:8999/api/v1/test')
          .then(response => {
              setData(response.data);
          })
          .catch(error => {
              console.error('Error fetching data:', error);
          });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </header>
    </div>
  );
}

export default App;

import React, { useEffect } from 'react';
// @ts-ignore
import { initializeWordTooltips } from '../dist/word-tooltip-library.esm.js'; // Adjust the path based on where you store the file

function App() {
  useEffect(() => {
    initializeWordTooltips('.hover-word', 'tooltip');
  }, []);

  return (
    <div className="App">
      <h1>Word Tooltip Example</h1>
      <div>
        <span className="hover-word">apple</span>, 
        <span className="hover-word"> book</span>, 
        <span className="hover-word"> Python</span>, 
        <span className="hover-word"> Hope</span>, 
        <span className="hover-word"> Stack</span>
      </div>
      <div id="tooltip" className="tooltip" style={{ position: 'absolute', display: 'none', backgroundColor: '#333', color: 'white', padding: '5px', borderRadius: '5px' }}></div>
    </div>
  );
}

export default App;

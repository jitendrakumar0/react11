import React, {useState} from 'react'
import './App.scss';

function App() {
  return (
    <div className="App">
      <h2>Handle Form in React</h2>
      <form onSubmit={getFormData}>
        <input type="text" placeholder='enter name' onChange={(e)=>setName(e.target.value)} /><br /><br />
        <select onChange={(e)=>setInterest(e.target.value)}>
          <option>Select Options</option>
          <option>Marvel</option>
          <option>DC</option>
        </select><br /><br />
        <input type="checkbox" onChange={(e)=>setTnc(e.target.checked)} /> <span>Accept terms and conditions</span><br /><br />
        <button type='submit'>Submit</button>
        <button>Clear</button>
      </form>
    </div>
  );
}

export default App;

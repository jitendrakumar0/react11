import React,{useEffect, useState} from 'react'
function App() {
  const [count, setCount]=useState(0)
  useEffect(()=>{
    console.warn("UseEffect")
  })
  return(
    <div className="App">
      <h3>Hello World {count}</h3>
      <button onClick={()=>{setCount(count+1)}}>Update Counter</button>
    </div>
  )
}
export default App;
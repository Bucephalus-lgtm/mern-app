import React, { useState, useEffect } from 'react';

function App() {
    const [response, setResponse] = useState('Oops, something went wrong...')
    useEffect(() =>{
        async function checkAPIRoute() {
            try {
                const host = process.env.REACT_APP_HOST || "http://localhost:5000"
                const response = await fetch(
                    `${host}/api`
                )
                if (response.status === 200) {
                    setResponse("a Success!!!")
                }
            } catch (err) {
                setResponse("Oops, something went wrong...")
            }
        }
        checkAPIRoute()
    }, [response])

  return (
    <div style={{background: '#0f4b6d', color: '#fff'}}>
      <header className="App-header">
        <h1>Bhargab Nath, Full Stack MERN Developer</h1>

        <h1>The API call is...</h1>
          <h2>{response}</h2>
      </header>
    </div>
  );
}

export default App;
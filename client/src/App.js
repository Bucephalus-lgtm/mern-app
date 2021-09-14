import React, { useState, useEffect } from 'react';

function App() {
  const [response, setResponse] = useState('Oops, something went wrong...')
  useEffect(() => {
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
    <div className='container' style={{ background: '#0f4b6d', color: '#fff' }}>

      <div className="card text-white bg-dark mb-3" style={{ maxWidth: '18rem' }}>
        <div className="card-header">Bhargab Nath</div>
        <div className="card-body">
          <h5 className="card-title">Full Stack MERN Developer</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>

      <header className="App-header">
        <h1>The API call is...</h1>
        <h2>{response}</h2>
      </header>
    </div>
  );
}

export default App;
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
        <img className='rounded-circle' src="https://source.unsplash.com/daily" />
        <div className="card-header">Bhargab Nath</div>
        <div className="card-body">
          <h5 className="card-title">Full Stack MERN Developer</h5>
          <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos ex fugit, sapiente suscipit, illum dolor rerum autem nulla blanditiis modi ducimus id accusamus dignissimos voluptatem est! Impedit, dolores ex? Tenetur.
          Impedit laborum repellat quam, libero dolore adipisci accusamus veniam corporis architecto omnis accusantium! Ipsa, error repellendus eaque cum, autem repudiandae odit culpa dolores quis aliquid quae soluta? Nemo, nulla vitae.
          Quaerat laudantium corporis nemo, totam, dolor similique recusandae, eaque maxime magnam rem distinctio. Aperiam, assumenda ad? Laboriosam minus corrupti, aspernatur autem cumque nihil in adipisci, deleniti praesentium iusto at fuga!</p>
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
import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const[books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks();
  }, []);


  const fetchBooks = async () => {
    try{
      const response = await fetch("http://127.0.0.1:8000/api/books/");
      const data = await response.json()
      console.log(data);
    } catch(error) {
      console.log(error);
    }
  }

  const [count, setCount] = useState(0)

  return (
    <>
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}

      <div>
        <h1>Book Website</h1>

        <div>
          <input type='text' placeholder='Boot Title...'></input>
          <input type='number' placeholder='Release Date...'></input>
          <button> Add Book </button>
        </div>
      </div>
    </>
  )
}

export default App

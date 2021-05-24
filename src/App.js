import logo from './logo.svg'
import './App.css'
import os from 'os'

const electron = window.require('electron')
const fs = window.require('fs')

function App() {
  const rv = fs.readdirSync(__dirname)
  console.log(rv)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          onClick={(event) => {
            event.preventDefault()
            electron.ipcRenderer.invoke('open-new-page')
          }}
        >
          Learn React
        </a>
        <p>os: {os.hostname()}</p>
        <p>user: {window.process.env.USER}</p>
      </header>
    </div>
  )
}

export default App

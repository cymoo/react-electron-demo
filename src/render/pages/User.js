import { useState } from 'react'
import { css } from '@emotion/css'
import logo from '../assets/logo.svg'

const electron = window.require('electron')
const fs = window.require('fs')
// import os from 'os'
const os = window.require('os')
const env = window.process.env

const User = () => {
  const [dirname, setDirname] = useState(env.HOME)
  const [fileList, setFileList] = useState([])

  return (
    <div>
      <img
        src={logo}
        alt="logo"
        className={css`
          width: 130px;
          height: 130px;
        `}
      />
      <br />
      <button
        onClick={async (event) => {
          await electron.ipcRenderer.invoke('open-daydream')
        }}
      >
        Open a new window
      </button>
      <p>
        Hello, {env.USER}. Host: {os.hostname()}
      </p>
      <div>
        <input
          type="text"
          value={dirname}
          onChange={(event) => setDirname(event.target.value.trim())}
        />
        <button
          onClick={() => {
            if (fs.existsSync(dirname)) {
              setFileList(
                fs.readdirSync(dirname).filter((name) => !name.startsWith('.'))
              )
            } else {
              setFileList([])
            }
          }}
        >
          List File
        </button>
        <ul
          className={css`
            list-style: none;
            & li {
              position: relative;
              left: -40px;
            }
          `}
        >
          {fileList.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default User

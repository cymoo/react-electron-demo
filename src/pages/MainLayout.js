import React from 'react'
import { Link } from 'react-router-dom'
import { css } from '@emotion/css'

const MainLayout = (props) => {
  return (
    <div>
      <header>
        <ul
          className={css`
            list-style: none;
            text-align: center;
            & li {
              display: inline-block;
              margin-left: 15px;
              margin-right: 15px;
              font-size: 1.1rem;
            }
          `}
        >
          <li>
            <Link to="/">User</Link>
          </li>
          <li>
            <Link to="/play">Play</Link>
          </li>
          <li>
            <Link to="/ipc">IPC</Link>
          </li>
        </ul>
      </header>
      <div
        className={css`
          margin-top: 15px;
          text-align: center;
          margin-left: auto;
          margin-right: auto;
          max-width: 800px;
        `}
      >
        {props.children}
      </div>
      <footer />
    </div>
  )
}

export default MainLayout

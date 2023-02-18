import React from 'react';
import ReactDOM from 'react-dom/client';

import './global.css';

import { Tweet } from './components/Tweet';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <div className="layout">
      <Sidebar />

      <div className="content">
        <main className="timeline">
          <Header title="Home" />

          <form className="new-tweet-form">
            <label htmlFor="tweet">
              <img
                src="https://github.com/bonattii.png"
                alt="Rodrigo Bonatti"
              />
              <textarea id="tweet" placeholder="What's happening?" />
            </label>

            <button type="submit">Tweet</button>
          </form>

          <Tweet />
          <Tweet />
          <Tweet />
          <Tweet />
          <Tweet />
          <Tweet />
        </main>
      </div>
    </div>
  </React.StrictMode>
);

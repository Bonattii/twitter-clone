import React from 'react';
import ReactDOM from 'react-dom/client';

import './global.css';

import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { Tweet } from './components/Tweet';

const tweets = ['My first tweet', 'Test', 'Successfully tweeted'];

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

          {tweets.map(tweet => (
            <Tweet key={tweet} content={tweet} />
          ))}
        </main>
      </div>
    </div>
  </React.StrictMode>
);

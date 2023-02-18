import { FormEvent, useState, KeyboardEvent } from 'react';

import { Header } from '../components/Header';
import { Tweet } from '../components/Tweet';

import './Timeline.css';

export function Timeline() {
  const [newTweet, setNewTweet] = useState('');
  const [tweets, setTweets] = useState(['First Tweet!']);

  function createNewTweet(event: FormEvent) {
    event.preventDefault();

    setTweets([newTweet, ...tweets]);
    setNewTweet('');
  }

  function handleHotkeySubmit(event: KeyboardEvent) {
    if (event.key === 'Enter' && (event.ctrlKey || event.metaKey)) {
      setTweets([newTweet, ...tweets]);
      setNewTweet('');
    }
  }

  return (
    <main className="timeline">
      <Header title="Home" />

      <form className="new-tweet-form" onSubmit={createNewTweet}>
        <label htmlFor="tweet">
          <img src="https://github.com/bonattii.png" alt="Rodrigo Bonatti" />
          <textarea
            id="tweet"
            placeholder="What's happening?"
            value={newTweet}
            onKeyDown={handleHotkeySubmit}
            onChange={event => setNewTweet(event.target.value)}
          />
        </label>

        <button type="submit">Tweet</button>
      </form>

      {tweets.map(tweet => (
        <Tweet key={tweet} content={tweet} />
      ))}
    </main>
  );
}

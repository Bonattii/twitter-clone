import './Timeline.css';

import { Header } from '../components/Header';
import { Tweet } from '../components/Tweet';

const tweets = ['My first tweet', 'Test', 'Successfully tweeted'];

export function Timeline() {
  return (
    <main className="timeline">
      <Header title="Home" />

      <form className="new-tweet-form">
        <label htmlFor="tweet">
          <img src="https://github.com/bonattii.png" alt="Rodrigo Bonatti" />
          <textarea id="tweet" placeholder="What's happening?" />
        </label>

        <button type="submit">Tweet</button>
      </form>

      {tweets.map(tweet => (
        <Tweet key={tweet} content={tweet} />
      ))}
    </main>
  );
}

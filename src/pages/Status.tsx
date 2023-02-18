import './Status.css';

import { Header } from '../components/Header';
import { Tweet } from '../components/Tweet';

const answers = ['Agree!', 'Makes Sense', 'Congratulations!'];

export function Status() {
  return (
    <main className="status">
      <Header title="Tweet" />

      <Tweet content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id deleniti ex sit, recusandae aut obcaecati vero ab ratione odit neque! Velit nobis, omnis dolore vel maxime perspiciatis quos numquam magni." />

      <form className="answer-tweet-form">
        <label htmlFor="tweet">
          <img src="https://github.com/bonattii.png" alt="Rodrigo Bonatti" />
          <textarea id="tweet" placeholder="Tweet your Answer" />
        </label>

        <button type="submit">Answer</button>
      </form>

      {answers.map(answer => (
        <Tweet key={answer} content={answer} />
      ))}
    </main>
  );
}

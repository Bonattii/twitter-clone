import { FormEvent, KeyboardEvent, useState } from 'react';
import { PaperPlaneRight } from 'phosphor-react';

import { Header } from '../components/Header';
import { Tweet } from '../components/Tweet';

import './Status.css';

export function Status() {
  const [newAnswer, setNewAnswer] = useState('');
  const [answers, setAnswers] = useState(['Agree!']);

  function createNewAnswer(event: FormEvent) {
    event.preventDefault();

    setAnswers([newAnswer, ...answers]);
    setNewAnswer('');
  }

  function handleHotkeySubmit(event: KeyboardEvent) {
    if (event.key === 'Enter' && (event.ctrlKey || event.metaKey)) {
      setAnswers([newAnswer, ...answers]);
      setNewAnswer('');
    }
  }

  return (
    <main className="status">
      <Header title="Tweet" />

      <Tweet content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id deleniti ex sit, recusandae aut obcaecati vero ab ratione odit neque! Velit nobis, omnis dolore vel maxime perspiciatis quos numquam magni." />

      <form className="answer-tweet-form" onSubmit={createNewAnswer}>
        <label htmlFor="tweet">
          <img src="https://github.com/bonattii.png" alt="Rodrigo Bonatti" />
          <textarea
            id="tweet"
            placeholder="Tweet your Answer"
            value={newAnswer}
            onKeyDown={handleHotkeySubmit}
            onChange={event => setNewAnswer(event.target.value)}
          />
        </label>

        <button type="submit">
          <PaperPlaneRight />
          <span>Answer</span>
        </button>
      </form>

      {answers.map(answer => (
        <Tweet key={answer} content={answer} />
      ))}
    </main>
  );
}

import { useState } from 'react';
import styles from './book-create.module.css';

/* eslint-disable-next-line */
export interface BookCreateProps {
  onCreate: (title: string) => void;
}

export function BookCreate({ onCreate }: BookCreateProps) {
  const [title, setTitle] = useState('');
  return (
    <div className="columns is-half">
      <div className="column is-half">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          name="book-name"
          className="input is-primary"
          type="text"
          placeholder="Book Name"
        ></input>
      </div>
      <div className="column">
        <button
          onClick={() => {
            onCreate(title);
            setTitle('');
          }}
          className="button is-link"
        >
          Add Book
        </button>
      </div>
    </div>
  );
}

export default BookCreate;

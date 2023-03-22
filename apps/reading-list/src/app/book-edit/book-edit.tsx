import styles from './book-edit.module.css';
import { useState } from 'react';

/* eslint-disable-next-line */
export interface BookEditProps {
  onSubmit: (id: string, title: string) => void;
  book: { title: string; id: string };
}

export function BookEdit({ book, onSubmit }: BookEditProps) {
  const [value, setValue] = useState(book.title);
  return (
    <div className="columns">
      <div className="column is-full">
        <input
          className="input is-primary"
          placeholder="Book Name"
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
      <div className="column">
        <button
          className="button is-primary"
          onClick={() => onSubmit(book.id, value)}
        >
          Save
        </button>
      </div>
    </div>
  );
}

export default BookEdit;

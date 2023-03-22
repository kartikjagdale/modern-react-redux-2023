/* eslint-disable jsx-a11y/anchor-is-valid */
import styles from './book-show.module.css';
import { useState } from 'react';
import BookCreate from '../book-create/book-create';
import BookEdit from '../book-edit/book-edit';

/* eslint-disable-next-line */
export interface BookShowProps {
  book: { id: string; title: string };
  onDelete: (id: string) => void;
  onEdit: (id: string, title: string) => void;
}

export function BookShow({ book, onDelete, onEdit }: BookShowProps) {
  const [showEdit, setShowEdit] = useState(false);

  function toggleEdit() {
    setShowEdit(!showEdit);
  }

  function onEditSave(id: string, title: string) {
    onEdit(id, title);
    toggleEdit();
  }

  let content = <h3>{book.title}</h3>;
  if (showEdit) {
    content = <BookEdit book={book} onSubmit={onEditSave} />;
  }

  return (
    <div className="column is-full" style={{paddingRight: '20px'}}>
      <div className="card">
        <header className="card-header">
          <span className="card-header-title">{content}</span>
          <button
            onClick={() => onDelete(book.id)}
            className="card-header-icon"
            aria-label="more options"
          >
            <span className="icon">Delete</span>
          </button>
          <button
            onClick={toggleEdit}
            className="card-header-icon"
            aria-label="more options"
          >
            <span className="icon">{showEdit ? 'Cancel' : 'Edit'}</span>
          </button>
        </header>
      </div>
    </div>
  );
}

export default BookShow;

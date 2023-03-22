import styles from './book-list.module.css';
import BookShow from '../book-show/book-show';

/* eslint-disable-next-line */
export interface BookListProps {
  books: { id: string; title: string }[];
  onDelete: (id: string) => void;
  onEdit: (id: string, title: string) => void;
}

export function BookList({ books, onDelete, onEdit }: BookListProps) {
  const renderedBooks = books.map((book) => {
    return (
      <BookShow onDelete={onDelete} onEdit={onEdit} key={book.id} book={book} />
    );
  });

  return <div className="columns is-multiline" style={{maxWidth: '800px'}}>{renderedBooks}</div>;
}

export default BookList;

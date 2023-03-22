// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useState } from 'react';
import styles from './app.module.css';
import BookCreate from './book-create/book-create';
import BookList from './book-list/book-list';

export function App() {
  const [books, setBooks] = useState(
    [] as unknown as { id: string; title: string }[]
  );

  function createBook(title: string) {
    setBooks([...books, { id: Date.now().toString(), title }]);
  }

  function deleteBook(id: string) {
    setBooks(books.filter((book) => book.id !== id));
  }

  function editBook(id: string, title: string) {
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, title };
      }
      return book;
    });
    setBooks(updatedBooks);
  }

  return (
    <div className="container">
      <div className="notification is-primary">
        <section className="section">
          <h1 className="title">Add Book to Reading List</h1>
          <h2 className="subtitle">
            A simple List to store your Fav. Reading List;
          </h2>
          <BookCreate onCreate={createBook} />
        </section>
      </div>
      <BookList onDelete={deleteBook} onEdit={editBook} books={books} />
    </div>
  );
}

export default App;

import { useState } from 'react';
import { searchImages } from '@modern-react-redux/pics-search/unsplash-api';

import SearchBar from './search-bar/search-bar';
import ImageList from './image-list/image-list';

export function App() {
  const [imagesData, setImagesData] = useState([]);

  async function handleSearch(query: string) {
    setImagesData(await searchImages(query, false));
  }

  return (
    <section className="section">
      <div className="container">
        <h1 className="title">Unsplash Search</h1>
        <p className="subtitle">
          Search your faviorite <strong>Images</strong>!
        </p>
        <br />
        <div className="columns main-section">
          <div className="column is-full">
            <SearchBar onSubmit={handleSearch} />
          </div>
          <div className="column is-full">
            <ImageList imagesData={imagesData} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;

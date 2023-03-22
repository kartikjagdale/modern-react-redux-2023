import { useState } from 'react';

/* eslint-disable-next-line */
export interface SearchBarProps {
  onSubmit: (query: string) => void;
}

export function SearchBar(props: SearchBarProps) {
  const [searchText, setSearchText] = useState('');

  function handleClick() {
    props.onSubmit(searchText);
  }

  return (
    <div className="columns">
      <div className="column is-four-fifths">
        <input
          value={searchText}
          onChange={(event) => {
            setSearchText(event.target.value);
          }}
          className="input is-medium"
          type="text"
          placeholder="Search Images"
        />
      </div>
      <div className="column">
        <button className="button is-primary is-medium is-fullwidth" onClick={handleClick}>
          Search
        </button>
      </div>
    </div>
  );
}

export default SearchBar;

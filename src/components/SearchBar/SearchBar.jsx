const SearchBar = ({ onSubmit }) => {
  return (
    <header>
      <form onSubmit={onSubmit}>
        <input
          name="searchBarInput"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
};

export default SearchBar;

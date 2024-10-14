// import { useState } from 'react';
// import toast from 'react-hot-toast';

const SearchBar = ({ onSubmit }) => {
  // const [searchWord, setSearchWord] = useState('');

  // const handleInputChange = event => {
  //   setSearchWord(event.target.value);
  // };

  // const handleSubmit = event => {
  //   event.preventDefault();
  //   if (searchWord.trim() === '') {
  //     toast.error('Enter a search word!');
  //     return;
  //   }
  //   onSubmit(searchWord);
  //   setSearchWord('');
  // };

  //   return (
  //     <header>
  //       <form onSubmit={handleSubmit}>
  //         <input
  //           value={searchWord}
  //           onChange={handleInputChange}
  //           type="text"
  //           autoComplete="off"
  //           autoFocus
  //           placeholder="Enter search word"
  //         />
  //         <button type="submit">Search</button>
  //       </form>
  //     </header>
  //   );
  // };

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

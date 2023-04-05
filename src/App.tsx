import { useState } from 'react';
import SearchAppBar from './components/Appbar/Appbar';
import CharacterList from './components/CharacterList/CharacterList';
function App() {
  const [searchText, setSearchText] = useState('');
  function onSearchTextChangeHandler(text: string) {
    setSearchText(text)
  }
  return (
    <div>
      <SearchAppBar onSearchTextChange={onSearchTextChangeHandler} />
      <CharacterList searchText={searchText} />
    </div>
  );
}

export default App;

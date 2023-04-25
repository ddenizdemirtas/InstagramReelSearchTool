import '../Styles/App.css';
import SearchBar from './SearchBar';
import Feed from './Feed';
import SubmitButton from './SubmitButton';

function App() {
  return (
    <div className="App">
      <h1>Welcome to the Instagram Reels Search Tool!</h1>
      <SearchBar  placeholder="Search reels..."/>
      <Feed></Feed> 
    </div>
  );

  
}

export default App;
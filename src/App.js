import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./components/MyNav";
import Welcome from "./components/Welcome";

import MyFooter from "./components/MyFooter";
import SearchBook from "./components/SearchBook";
import fantasy from "./data/fantasy.json";

function App() {
  return (
    <div className='App'>
      <MyNav />
      <Welcome />
      <SearchBook books={fantasy} />
      <MyFooter />
    </div>
  );
}

export default App;

import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom';
import Pages from './pages/Pages';
import Searchbar from './components/Searchbar';

function App() {
  return (
    <Router>
      <Searchbar/>
      <Pages/>
    </Router>
  );
}

export default App;

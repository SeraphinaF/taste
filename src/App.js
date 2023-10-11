import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom';
import Pages from './pages/Pages';
import Searchbar from './components/Searchbar';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Pages/>
    </Router>
  );
}


export default App;

import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom';
import Pages from './pages/Pages';
import Searchbar from './components/Searchbar';

function App() {
  return (
    <BrowserRouter>
      <Pages/>
    </BrowserRouter>
  );
}

export default App;

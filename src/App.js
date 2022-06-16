import {BrowserRouter} from 'react-router-dom'
import Pages from './pages/Pages';
import Navbar from './components/Navbar/Navbar';
import './App.scss';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Navbar />
            <Pages />
        </BrowserRouter>
    </div>
  );
}

export default App;

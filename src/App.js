import './App.css';
import './styles/globals.css';

import { BrowserRouter } from 'react-router-dom';

import Homepage from './page/Homepage';
function App() {
  return (
    <BrowserRouter>
  
      <Homepage />
    </BrowserRouter>
  );
}

export default App;

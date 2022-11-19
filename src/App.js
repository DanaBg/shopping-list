
import './App.css';
import { Route, Routes } from 'react-router';
import HomePage from './pages/HomePage';
import ItemDetails from './components/ItemDetails';

const App = () => {


  return (
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/details/:itemKey" element={<ItemDetails/>}/>
    </Routes>
  );
}

export default App;

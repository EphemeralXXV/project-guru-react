import { Route, Routes } from 'react-router-dom';
import IndexPage from './pages/Index';
import './App.css';

const App = () => {
  return (
    <Routes>
      <Route path = '/' element = {<IndexPage />} />
    </Routes>
  );
}

export default App;
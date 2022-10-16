import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Navbar } from './components';
import { DetailedView, Home, NotFound } from './views';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:ticker" element={<DetailedView />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;

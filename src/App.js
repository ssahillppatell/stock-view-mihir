import { Route, Routes } from 'react-router-dom';
import './App.css';
import { DetailedView, Home, NotFound } from './views';

function App() {
  return (
    <div>
      <h1>React App</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:ticker" element={<DetailedView />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;

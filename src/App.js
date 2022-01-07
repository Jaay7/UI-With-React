import First from './landingpages/First';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Second from './landingpages/Second';
import Third from './landingpages/Third';
import Fourth from './landingpages/Fourth';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/first" element={<First />} />
          <Route path="/second" element={<Second />} />
          <Route path="/third" element={<Third />} />
          <Route path="/" element={<Fourth />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

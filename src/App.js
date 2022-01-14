import First from './landingpages/First';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Second from './landingpages/Second';
import Third from './landingpages/Third';
import Fourth from './landingpages/Fourth';
import Fifth from './landingpages/Fifth';
import Home from './Home';
import DFirst from './dashboard/DFirst';
import Sixth from './landingpages/Sixth';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/first" element={<First />} />
          <Route path="/second" element={<Second />} />
          <Route path="/third" element={<Third />} />
          <Route path="/fourth" element={<Fourth />} />
          <Route path="/fifth" element={<Fifth />} />
          <Route path="/sixth" element={<Sixth />} />
          <Route path="/dashboard/first" element={<DFirst />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

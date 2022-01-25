import First from './landingpages/First';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Second from './landingpages/Second';
import Third from './landingpages/Third';
import Fourth from './landingpages/Fourth';
import Fifth from './landingpages/Fifth';
import Home from './Home';
import DFirst from './dashboard/DFirst';
import Sixth from './landingpages/Sixth';
import DSecond from './dashboard/DSecond';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/UI-With-React/first" element={<First />} />
          <Route path="/UI-With-React/second" element={<Second />} />
          <Route path="/UI-With-React/third" element={<Third />} />
          <Route path="/UI-With-React/fourth" element={<Fourth />} />
          <Route path="/UI-With-React/fifth" element={<Fifth />} />
          <Route path="/UI-With-React/sixth" element={<Sixth />} />
          <Route path="/UI-With-React/dashboard/first" element={<DFirst />} />
          <Route path="/UI-With-React/dashboard/second" element={<DSecond />} />
          <Route path="/UI-With-React" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

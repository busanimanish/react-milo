import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Agdash from './agdash';
import Login from './login';
import Host from './host';
import Profile from './profile';
function App() {
  return (
     <>
    <Router>
      <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/host" element={<Host/>}></Route>
        <Route path="/agency" element={<Agdash/>}></Route>
        <Route path="/profile" element={<Profile/>}></Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;

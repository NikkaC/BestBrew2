import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavB from './components/nav';
import { BrowserRouter,Routes, Route,} from "react-router-dom";
import PrvaStran from './components/prvastran';
import { render } from "react-dom";

function App() {
  return render (
    <BrowserRouter>
 

      <Routes>
        <Route path='/prva' element={<PrvaStran />}></Route>
        <Route path='/' element={<PrvaStran></PrvaStran>}></Route>
      </Routes>

  </BrowserRouter>
    )
}

export default App;

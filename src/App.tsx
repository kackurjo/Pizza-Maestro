import {
  Route,
  BrowserRouter as Router,
  Routes
} from 'react-router-dom';
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import NavBar from './components/navbar/Nabar';

/*
orange: #FD7F20
red Orange: #FC2E20
Amber: #FDB750
black: #010100
*/

export default function App() {
  return (
    <>
      <NavBar />
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </Router>
    </>
  )
}

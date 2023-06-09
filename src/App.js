import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import SignUpPage from './pages/SignUpPage';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='login' element={<LoginPage />} />
          <Route path='signup' element={<SignUpPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

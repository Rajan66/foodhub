import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Header from "./components/Header";
import './App.css';
import RestaurantList from './pages/RestaurantList';
import Login from './components/Login';
import Register from './components/Register'
import { RequireAuth } from "react-auth-kit";


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path='/' Component={RestaurantList} />
          <Route path='/register' Component={Register} />
          <Route path='/login' Component={Login} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

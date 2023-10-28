import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import './App.css';
import RestaurantList from './pages/RestaurantList';
import Login from './components/auth/Login';
import Register from './components/auth/Register'
import HomePage from "./pages/home/home"
import './index.css'


function App() {
  return <HomePage />

}
export default App;

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Header from "./components/Header";
import './App.css';
import RestaurantList from './pages/RestaurantList';
import Login from './components/Login';
import { RequireAuth } from "react-auth-kit";


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        {/* <RestaurantList/> */}
        <Routes>
          
            <Route path='/' Component={RestaurantList} />
         
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

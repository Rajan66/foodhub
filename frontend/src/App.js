import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Header from "./components/Header";
import './App.css';
import RestaurantList from './pages/RestaurantList';


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        {/* <RestaurantList/> */}
        <Routes>
          <Route path='/' Component={RestaurantList} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './views/Home'
import Registration from './views/Registration';
import Login from './views/Login';
import CreateVote from './views/CreateVote';
import ManageVotes from './views/ManageVotes';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route 
              path="/" 
              element={ <Home /> } 
            />
            <Route 
              path="/registration" 
              element={ <Registration /> } 
            />
            <Route 
              path="/login" 
              element={ <Login /> } 
            />
            <Route 
              path="/createvote" 
              element={ <CreateVote /> } 
            />
            <Route 
              path="/managevotes" 
              element={ <ManageVotes /> } 
            />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;



/* ---

- installed: react router, styled components
-Header component


*/
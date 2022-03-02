import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './views/Home'
import Registration from './views/Registration';
import LogReg from './views/LogReg';
import CreateVote from './views/CreateVote';
import ManageVotes from './views/ManageVotes';
import PollDetail from './views/PollDetail';

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
              element={ <LogReg /> } 
            />
            <Route 
              path="/createvote" 
              element={ <CreateVote /> } 
            />
            <Route 
              path="/managevotes/:username" 
              element={ <ManageVotes /> } 
            />
            <Route
              path="/deatil/:pollid"
              element={ <PollDetail/> }
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
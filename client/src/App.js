import { Router } from '@reach/router';
import './App.css';
import AllPolls from './components/AllPolls';
import SelectedPoll from './components/SelectedPoll';


function App() {
  return (
    <div className="App">
      <Router>
        <AllPolls path="/" />
        <SelectedPoll path="/poll/:pollid" />
      </Router>
    </div>
  );
}

export default App;

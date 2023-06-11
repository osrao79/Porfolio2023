
import './App.css';
import Router from './routes';
import Dashboard from './screens/Dashboard/Dashboard.js';


function App() {
  return (
    <div className="App">
      <Dashboard />
      <Router />
    </div>
  );
}

export default App;

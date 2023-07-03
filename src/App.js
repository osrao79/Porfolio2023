
import './App.css';
import Router from './routes';
import Dashboard from './screens/Dashboard/Dashboard.js';


function App() {
  return (
    <div className="App">
      <Dashboard />
      <Router />
        <div className='bg-scaler-right'></div>
        <div className='bg-scaler-left'></div>
    </div>
  );
}

export default App;

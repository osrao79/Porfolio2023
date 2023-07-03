
import './App.css';
import Footer from './comopnents/footer/footer';
import Router from './routes';
import Dashboard from './screens/Dashboard/Dashboard.js';


function App() {
  return (
    <div className="App">
      <Dashboard />
      <Router />
        {/* <Footer/> */}
    </div>
  );
}

export default App;

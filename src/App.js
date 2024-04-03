// import logo from './logo.svg';
import './App.css';
import Chats from './components/Chats/Chats';
import Dashboard from './components/Dashboard/Dashboard';

import MenuItem from "./components/MenuItem/MenuItem";

function App() {
  return (
    <div style={{ display: 'flex' }} className="App">
      <MenuItem />
      <Chats />
      <Dashboard />
    </div>
  );
}

export default App;

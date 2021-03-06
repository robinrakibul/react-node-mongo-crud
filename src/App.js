import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddUser from './components/AddUser/AddUser';
import Home from './components/Home/Home';
import UpdateUser from './components/UpdateUser/UpdateUser';

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="adduser" element={<AddUser></AddUser>}></Route>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/update" element={<UpdateUser></UpdateUser>}></Route>
    </Routes>
    </div>
  );
}

export default App;

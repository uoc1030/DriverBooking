import { Routes, Route, Navigate } from "react-router-dom";
import Landing from "./pages/Landing";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { AuthContextProvider } from "./context/AuthContext";
import Protected from './components/Protected';

// Font Awesome Style Sheet
import "@fortawesome/fontawesome-free/css/all.min.css";

// Tailwind CSS Style Sheet
import 'assets/styles/tailwind.css';
import Admin from './pages/Admin';
import Dashboard from './pages/Dashboard';
import Account from './pages/Account';
import Area from './pages/Area';
import Driver from './pages/Driver';
import Vehicles from './pages/Vehicles';
import Employees from './pages/Employees';
import Category from './pages/Category';
import District from './pages/District';
import Group from './pages/Group';

function App() {
  return (
    <AuthContextProvider>
      <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="/profile" element={<Protected> <Profile/> </Protected>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/admin" element={<Admin/>} />
        <Route path="/admin/dashboard" element={<Dashboard/>} />
        <Route path="/admin/account" element={<Account/>} />
        <Route path="/admin/area" element={<Area/>} />
        <Route path="/admin/driver" element={<Driver/>} />
        <Route path="/admin/vehicles" element={<Vehicles/>} />
        <Route path="/admin/employees" element={<Employees/>} />
        <Route path="/admin/category" element={<Category/>} />
        <Route path="/admin/district" element={<District/>} />
        <Route path="/admin/group" element={<Group/>} />
        <Route path="*" element={<Navigate to ="/" />}/>
      </Routes>
    </AuthContextProvider>
  );
}

export default App;

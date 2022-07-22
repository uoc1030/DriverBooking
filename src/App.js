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
import Order from "./pages/Order";
import Edit from "components/Area/Edit";
import DistrictEdit from "components/District/DistrictEdit";
import DriverEdit from "components/Driver/DriverEdit";
import EmployeesEdit from "components/Employees/EmployeesEdit";
import GroupEdit from "components/Group/GroupEdit";
import VehiclesEdit from "components/Vehicles/VehiclesEdit";
import OrderCreate from "components/Order/OrderCreate";


function App() {
  return (
    <AuthContextProvider>
      <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="/profile" element={<Protected> <Profile/> </Protected>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/admin" element={ <Protected> <Admin/> </Protected> }/>
        <Route path="/admin/dashboard" element={ <Protected><Dashboard/></Protected> } />
        <Route path="/admin/account" element={ <Protected> <Account/> </Protected> } />
        <Route path="/admin/area" element={ <Protected> <Area/> </Protected> } />
        <Route path="/admin/driver" element={ <Protected> <Driver/> </Protected> } />
        <Route path="/admin/vehicles" element={ <Protected> <Vehicles/> </Protected> } />
        <Route path="/admin/employees" element={ <Protected> <Employees/> </Protected> } />
        <Route path="/admin/category" element={ <Protected> <Category/> </Protected> } />
        <Route path="/admin/district" element={ <Protected> <District/> </Protected> } />
        <Route path="/admin/group" element={ <Protected> <Group/> </Protected> } />
        <Route path="/admin/order" element={ <Protected> <Order/> </Protected> } />
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
        <Route path="/admin/order" element={<Order/>} />
        <Route path="/admin/edit/:id" element={<Edit/>} />
        <Route path="/admin/DistrictEdit/:id" element={<DistrictEdit/>} />
        <Route path="/admin/DriverEdit/:id" element={<DriverEdit/>} />
        <Route path="/admin/EmployeesEdit/:id" element={<EmployeesEdit/>} />
        <Route path="/admin/GroupEdit/:id" element={<GroupEdit/>} />
        <Route path="/admin/OrderCreate" element={<OrderCreate/>} />
        <Route path="/admin/VehiclesEdit/:id" element={<VehiclesEdit/>} />
        
        <Route path="*" element={<Navigate to ="/" />}/>
      </Routes>
    </AuthContextProvider>
  );
}

export default App;

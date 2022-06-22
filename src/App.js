import { Switch, Route, Redirect } from 'react-router-dom';
import Landing from 'pages/Landing';
import Profile from 'pages/Profile';
import Login from 'pages/Login';
import Register from 'pages/Register';

// Font Awesome Style Sheet
import '@fortawesome/fontawesome-free/css/all.min.css';

// Tailwind CSS Style Sheet
import 'assets/styles/tailwind.css';
import Admin from 'pages/Admin';
import Dashboard from 'pages/Dashboard';
import Account from 'pages/Account';
import Area from 'pages/Area';
import Driver from 'pages/Driver';
import Vehicles from 'pages/Vehicles';
import Employees from 'pages/Employees';
import Category from 'pages/Category';
import District from 'pages/District';
import Group from 'pages/Group';

function App() {
    return (
        <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/admin" component={Admin} />
            <Route exact path="/admin/dashboard" component={Dashboard} />
            <Route exact path="/admin/account" component={Account} />
            <Route exact path="/admin/area" component={Area} />
            <Route exact path="/admin/driver" component={Driver} />
            <Route exact path="/admin/vehicles" component={Vehicles} />
            <Route exact path="/admin/employees" component={Employees} />
            <Route exact path="/admin/category" component={Category} />
            <Route exact path="/admin/district" component={District} />
            <Route exact path="/admin/group" component={Group} />
            <Redirect from="*" to="/" />
        </Switch>
    );
}

export default App;

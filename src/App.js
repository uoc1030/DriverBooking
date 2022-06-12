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
import "assets/styles/tailwind.css";

function App() {
  return (
    <AuthContextProvider>
      <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="/profile" element={<Protected> <Profile/> </Protected>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="*" element={<Navigate to ="/" />}/>
      </Routes>
    </AuthContextProvider>
  );
}

export default App;

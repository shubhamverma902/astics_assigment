import { Route, Routes } from "react-router-dom";
import "./App.css";
import UserRegister from "./components/sign_up_page/sign_up";
import UserLogin from "./components/sign_in_page/sign_in";
import ProtectedRoutes from "./protected_routes/protected_routes";
import Dashboard from "./components/dashboard/dashboard";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/register" element={<UserRegister />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/" element={<UserLogin />} />
        <Route path="/" element={<ProtectedRoutes />}>
        <Route path="/dashboard" element={<Dashboard />} />
        
        </Route>
      </Routes>
    </div>
  );
}

export default App;

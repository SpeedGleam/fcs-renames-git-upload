import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "../ProtectedRoute";

import Login from "./components/Login";
import Registration from "./components/Registration";
import Messaging from "./components/Messaging";
import GroupMessaging from "./components/GroupMessaging";
import Profile from "./components/Profile";
import Navbar from "./components/Navbar";
import MarketPlace from "./components/MarketPlace"
import Home from "./Home";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <div className="app">
          <Navbar/>  
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Registration />} />
            <Route element={<ProtectedRoute />}>
              <Route path="/home" element={<Home />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/messages" element={<Messaging />} />  
              <Route path="/groups" element={<GroupMessaging />} />  
              <Route path="/market" element={<MarketPlace />} />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}


export default App;
import Signup from "./authentication/Signup";
import Profile from "./authentication/Profile";
import Login from "./authentication/Login";
import { AuthProvider } from "../contexts/AuthContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivateRoute from "./authentication/PrivateRoute";
import ForgotPassword from "./authentication/ForgotPassword";
import UpdateProfile from "./authentication/UpdateProfile";
import Dashboard from "./google-drive/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          {/* Drive */}
          <Route
            exact
            path="/"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          ></Route>
          <Route
            exact
            path="/folder/:folderId"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          ></Route>

          {/* Profile */}
          <Route
            path="/user"
            element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            }
          />
          <Route
            path="/update-profile"
            element={
              <PrivateRoute>
                <UpdateProfile />
              </PrivateRoute>
            }
          />

          {/* Auth */}
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;

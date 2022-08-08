import React from "react";
import { Routes, Route } from "react-router-dom";
import theme from "./styles/theme";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Home from "./pages/Home";
import Features from "./pages/Features";
import Circular from "./pages/Circular";
import Notifications from "./pages/Notifications";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import SharedLayout from "./layouts/SharedLayout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import SharedLayoutAdmin from "./layouts/SharedLayoutAdmin";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />

      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/circular" element={<Circular />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin" element={<SharedLayoutAdmin />}>
          <Route index element={<Dashboard />} />
          <Route path="/admin/users" element={<Users />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
};

export default App;

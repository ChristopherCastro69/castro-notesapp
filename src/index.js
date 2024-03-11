import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Login from "./components/Login";

import Register from "./components/SignUp";
import AddNote from "./components/AddNote";
import DisplayNotes from "./components/DisplayNotes";
import Dashboard from "./components/Dashboard";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="addnote" element={<AddNote />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="displaynotes" element={<DisplayNotes />} />
    </Routes>
  </BrowserRouter>
);

// Optional: If using create-react-app and want web vitals measurement
// import reportWebVitals from './reportWebVitals';
// reportWebVitals();

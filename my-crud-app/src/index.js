import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AddStudent from "./pages/addstudent";
import EditStudent from "./pages/editStudent";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from './pages/mainpage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
    <Routes>
        <Route path="/">
          <Route index element={<MainPage />} />
          <Route path="new" element={<AddStudent />} />
          <Route path="edit/:id" element={<EditStudent />} />
        </Route>
      </Routes>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

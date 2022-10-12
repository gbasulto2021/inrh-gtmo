import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import PrivateRoutes from './components/PrivateRoutes';
import Reports from './components/Reports';
import Login from './components/Login';
import Form from './components/Form';
import Chart from './components/Chart';
import ReportDetails from './components/ReportDetails';
import { ReportsProvider } from './context/ReportsContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <ReportsProvider>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>}/>
        <Route path="login" element={<Login/>}/>
        <Route element={<PrivateRoutes/>}>
             <Route path="reports" element={<Reports/>}/>
             <Route path="form" element={<Form/>}/>
             <Route path="update/:id" element={<Form/>}/>
             <Route path="report" element={<Chart/>}/>
             <Route path="report/:id" element={<ReportDetails/>}/>
        </Route>
        <Route path='*' element={<Navigate to="/"/>}/>
      </Routes>
    </BrowserRouter>
    </ReportsProvider>
    </AuthProvider>
  </React.StrictMode>
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

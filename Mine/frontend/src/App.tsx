import React, { useState } from 'react';
import {  Routes, Route, BrowserRouter } from "react-router-dom";
import AuthContext from './components/auth/authContext';
import { ProtectedRoute } from './components/auth/protectedRoute';
import GridScreen from './screens/dataGrid/dataGrid';
import LoginScreen from './screens/login/login';

function App() {
  const [authentication, setAuthentication] = useState(false);
  return (
    <>
    <AuthContext.Provider value={{authentication, setAuthentication}}>
    <BrowserRouter>
    <Routes>

    <Route element={<ProtectedRoute />}>
              
      <Route path="/home" element={<GridScreen />} />
            
    </Route>
    <Route path="/" element={<LoginScreen />} />

    </Routes>
    </BrowserRouter>
    </AuthContext.Provider>
    
      </>
  );
}

export default App;

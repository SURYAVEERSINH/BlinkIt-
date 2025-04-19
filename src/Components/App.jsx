import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';

// Import components
import  Home  from './Home';
import Cart from './Cart';
import LoginPage from './LoginPage';
import Register from './Register'; // ✅ Add Register
import CategoryList from './CategoryList';
import CategoryPage from './CategoryPage';
import ProtectedRoute from './ProtectedRoute'; // ✅ Import ProtectedRoute
import Dashboard from './Dashboard'; // ✅ Example protected page

// Context providers
import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext'; // ✅ Create & import AuthContext

const App = () => {
  return (
    <AuthProvider> {/* ✅ Wrap with Auth context */}
      <CartProvider>
        <div className="App">
          <Routes>
            <Route path="/login" element={<Home />} />
            <Route path="/" element={<LoginPage />} />
            <Route path="/register" element={<Register/>} /> {/* ✅ Add Register Route */}
            <Route path="/cart" element={<Cart />} />
            <Route path="/categories" element={<CategoryList />} />
            <Route path="/category/:name" element={<CategoryPage />} />
            <Route path="/dashboard" element={<Dashboard />} />

            {/* ✅ Protected Route Example */}
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
          </Routes>
        </div>
      </CartProvider>
    </AuthProvider>
  );
};

export default App;


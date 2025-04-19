import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './context/AuthContext'; // ✅ use custom hook
import  Home  from './Home';


const Dashboard = () => {
  const { user, setUser } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    setUser(null);
    navigate('/');
  };

  return (
    <>
   
    <div style={styles.container}>
      <h2>👋 Welcome to your Dashboard</h2>
      <p><strong>{user?.email }</strong>.</p>
      <button style={styles.button} onClick={handleLogout}>Logout</button>
    </div>
    <Home/>
 
    </>
  );
};

export default Dashboard;

const styles = {
  container: {
    padding: '2rem',
    textAlign: 'center',
    backgroundColor: '#f0fff0',
    borderRadius: '12px',
    margin: '2rem auto',
    maxWidth: '500px',
    boxShadow: '0 0 20px rgba(0,0,0,0.1)',
  },
  button: {
    marginTop: '1rem',
    padding: '0.8rem 1.5rem',
    fontSize: '1rem',
    backgroundColor: '#28a745',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
  },
};

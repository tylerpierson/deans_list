import { useState } from 'react';
import styles from './AuthPage.module.scss';
import Login from '../../components/Login/Login';
import Register from '../../components/Register/Register';

export default function AuthPage({ setUser }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <main className={styles.AuthPage}>
      <div>
        <h3 onClick={() => setShowLogin(!showLogin)}>{showLogin ? 'SIGN UP' : 'LOG IN'}</h3>
      </div>
      {showLogin ? <Login setUser={setUser} /> : <Register setUser={setUser} />}
    </main>
  );
}
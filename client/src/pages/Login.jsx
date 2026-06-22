
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import backgroundImageFile from '../assets/ig.jpg';
import { toast } from "react-toastify";


export default function Login({ setToken }) {
  const [isRegistering, setIsRegistering] = useState(false);
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState({ text: '', type: '' });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage({ text: '', type: '' });

    const endpoint = isRegistering ? 'register' : 'login';

    const payload = isRegistering
      ? {
          fullName: fullname,
          email,
          password,
        }
      : {
          email,
          password,
        };

    try {
      const response = await fetch(
        `http://localhost:5000/api/user/${endpoint}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong');
      }

      if (isRegistering) {
        setMessage({
          text: 'Account created successfully! Logging you in...',
          type: 'success',
        });

        setIsRegistering(false);
      } else {
        localStorage.setItem('token', data.token);
        setToken(data.token);
        navigate('/');
      }
    } catch (err) {
      setMessage({
        text: err.message,
        type: 'error',
      });
    }
  };

  return (
    <div style={styles.container}>
      <form
        onSubmit={handleSubmit}
        style={styles.card}
        autoComplete="off"
      >
        <input
          type="text"
          name="prevent-autofill-username"
          autoComplete="off"
          style={styles.hiddenInput}
          tabIndex="-1"
        />
        <input
          type="password"
          name="prevent-autofill-password"
          autoComplete="off"
          style={styles.hiddenInput}
          tabIndex="-1"
        />
        <h2 style={styles.title}>AVS SOLAR</h2>

        <p style={styles.subtitle}>
          {isRegistering
            ? 'Create an Account'
            : 'Sign In'}
        </p>

        {message.text && (
          <p
            style={
              message.type === 'error'
                ? styles.error
                : styles.success
            }
          >
            {message.text}
          </p>
        )}

        {isRegistering && (
          <input
            type="text"
            placeholder="Full Name"
            value={fullname}
            onChange={(e) =>
              setFullname(e.target.value)
            }
            autoComplete="off"
            required
            className="login-input"
            style={styles.input}
          />
        )}

        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
          autoComplete="off"
          name="email"
          required
          className="login-input"
          style={styles.input}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
          autoComplete="off"
          name="password"
          required
          className="login-input"
          style={styles.input}
        />

        {/* Forgot Password Link */}
        {!isRegistering && (
          <div style={{ textAlign: 'right', marginBottom: '15px' }}>
            <Link
              to="/forgot-password"
              style={{
                color: 'white',
                textDecoration: 'none',
                fontSize: '14px',
              }}
            >
              Forgot Password?
            </Link>
          </div>
        )}

        <button
          type="submit"
          style={styles.button}
        >
          {isRegistering ? 'Sign Up' : 'Log In'}
        </button>

        <p style={styles.toggleText}>
          {isRegistering
            ? 'Already have an account?'
            : "Don't have an account?"}{' '}
          <span
            style={styles.toggleLink}
            onClick={() =>
              setIsRegistering(!isRegistering)
            }
          >
            {isRegistering
              ? 'Log In'
              : 'Register Here'}
          </span>
        </p>
      </form>
    </div>
  );
}

const styles = {
  container: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundImage: `url(${backgroundImageFile})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundColor: '#0a192f',
    fontFamily: 'sans-serif',
  },

  card: {
  
    background: 'transparent',
    padding: '40px',
    borderRadius: '12px',
    boxShadow: '0 8px 24px white',
    width: '100%',
    maxWidth: '380px',
    textAlign: 'center',
  },

  title: {
    color: 'white',
    margin: '0 0 5px 0',
  },

  subtitle: {
    color: 'white',
    marginBottom: '25px',
  },

 input: {
  width: '100%',
  padding: '12px',
  marginBottom: '15px',
  borderRadius: '6px',
  border: '1px solid #f9dcdc',
  boxSizing: 'border-box',
  color: 'white',    
  backgroundColor: 'rgba(255, 255, 255, 0.08)',
},

  button: {
    width: '100%',
    padding: '12px',
    backgroundColor: '#0052cc',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    fontWeight: 'bold',
    cursor: 'pointer',
    marginBottom: '15px',
  },

  error: {
    color: 'red',
    margin: '0 0 15px 0',
  },

  success: {
    color: 'green',
    margin: '0 0 15px 0',
  },

  toggleText: {
    fontSize: '14px',
    color: 'yellow',
  },

  toggleLink: {
    color: 'white',
    cursor: 'pointer',
    fontWeight: 'bold',
    textDecoration: 'underline',
  },

  hiddenInput: {
    position: 'absolute',
    opacity: 0,
    pointerEvents: 'none',
    height: 0,
    width: 0,
  },
  
};

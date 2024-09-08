import { Link, useNavigate } from "react-router-dom";

export default function Navbar(){
  const navigate = useNavigate()
  function handleSignup (){
    navigate("/signup")
  }
  return (
    <nav style={styles.navbar}>
      <Link to={"/"} style={styles.link}>Home</Link>
      <button onClick={handleSignup} >
        {false?'Logout': 'Sign Up'}
      </button>
    </nav>
  )
}
const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 20px',
    backgroundColor: '#282c34',
    color: '#61dafb',
    height: '60px'
  },
  link: {
    color: '#61dafb',
    textDecoration: 'none',
    fontSize: '18px',
    marginRight: '20px'
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    color: '#61dafb',
    backgroundColor: 'transparent',
    border: '2px solid #61dafb',
    borderRadius: '5px',
    cursor: 'pointer'
  }
};

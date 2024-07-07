import { useState } from "react";
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase';

const Password = ({setAuthenticated}) => {

    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
          await signInWithEmailAndPassword(auth, "stinkyfartbutt@gmail.com", password);
          setAuthenticated(true);
        } catch (error) {
            console.log("login failed")
        }
      };

    const handleChange = (e) => {
        setPassword(e.target.value);
    };

    return (
        <div className="password">
            <input
                value={password}
                onChange={handleChange}
                placeholder="password"
            />
            <button
                onClick={handleLogin}
            >Submit</button>
        </div>
    )
}

export default Password;
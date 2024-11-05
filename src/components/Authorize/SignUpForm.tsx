import React, { useState } from 'react'
import { useRouter } from 'next/router';
import styles from "../../styles/auth.module.css"


function SignUpForm() {
    const [numberOrEmail, setNumberOrEmail] = useState<string>("");
    const [password,setPassword]= useState<string>("");
    const [ name,setName] = useState<string>("");
    const [username,setUserName] = useState<string>("");
    const router = useRouter();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault(); 

        localStorage.setItem("numberOrEmail", numberOrEmail);
        localStorage.setItem("password", password);
        localStorage.setItem("name", name);
        localStorage.setItem("username", username);

        alert("Success");
        router.push("/login")
    };
    return (
    <div className={styles.div}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h2 className={styles.baslik}>Sign Up</h2>
        <div >
            <input type='text' placeholder='Mobile Number or Email' className={styles.input} value={numberOrEmail}
                        onChange={(e) => setNumberOrEmail(e.target.value)}required/>
        </div>
        <div>
            <input type='password' placeholder='Password' className={styles.input} value={password}
                        onChange={(e) => setPassword(e.target.value)}required/>
        </div>
        <div>
            <input type='text' placeholder='Name Surname' className={styles.input} value={name}
                        onChange={(e) => setName(e.target.value)}required/>
        </div>
        <div>
            <input type='text' placeholder='User Name' className={styles.input} value={username}
                        onChange={(e) => setUserName(e.target.value)}required/>
        </div>
        <button type="submit" className={styles.btn}>Sign Up</button>
      </form>
    </div>
  )
}  

export default SignUpForm;

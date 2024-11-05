import React, { useState } from 'react';
import styles from "../../styles/auth.module.css"
import { useRouter } from 'next/router'
import Link from 'next/link'

function LoginForm() {
  const router = useRouter();
  const [username, setUsername] = useState('');
    const[password,setPassword]= useState<string>("");

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault(); 
        const savedUsername = localStorage.getItem('username');
        const savedPassword = localStorage.getItem('password');
     

        if (username === savedUsername && password === savedPassword) {
          
          router.push('/post'); 
        } else {
          alert('Kullanıcı adı veya şifre yanlış!');
        }
  }

  return (
    <div className={styles.div}>
      <form className={styles.form}
      onSubmit={handleSubmit}>
        <div className={styles.baslik}>
        <h2 >LOGİN</h2>
        </div>
        
           <div >
            <input type='username' id='username' placeholder='Username'className={styles.input} value={username}
            onChange={(e) => setUsername(e.target.value)}  required/>
        </div>
      
        <div > 
            <input type='password' id='password' placeholder='Password' className={styles.input} onChange={(e) => setPassword(e.target.value)}  required/>
            </div>
        <button type='submit'  className={styles.btn}>Login</button>
        <div >Don't have an account? 
        <Link href='/signup' className={styles.link}>Sign Up</Link>
        </div>
      </form>
    </div>
  )
}

export default LoginForm;

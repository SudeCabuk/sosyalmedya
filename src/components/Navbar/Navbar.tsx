
import React, { useEffect, useState } from 'react';
import styles from "../../styles/Navbar.module.css";
import { useRouter } from 'next/router';

export default function Navbar() {
  const router = useRouter();
    const [username, setUsername] = useState<string>("");

    useEffect(() => {
        
        const storedName = localStorage.getItem("name");
      if (storedName) {
          setUsername(storedName);
        } 
      }, []);

      const logOut = () => {
        router.push("/login")
      }
  return (
    <div className={styles.div}>
        <span className={styles.logo}>
            <img src='https://www.pngarts.com/files/11/Instagram-IG-Logo-PNG-Image.png' alt='logo' className={styles.logoImage}/>
        </span>
        <span className={styles.userContainer} >
        <span className={styles.user}> Hoşgeldiniz {username ? username : "Kullanıcı"}</span>
        <span> <button onClick={logOut}  className={styles.btn}>Log Out</button></span>
        </span>
    </div>
  )
}

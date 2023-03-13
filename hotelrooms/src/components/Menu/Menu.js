import React, { useContext } from 'react';
import styles from './Menu.module.css'
import AuthContext from '../../context/authContext';

function Menu(){

    const auth = useContext(AuthContext);

    const loginLink = () =>{
        let link;
        if(auth.isAuthenticated === false){
            link = <a onClick={loginE} href="#">Login</a>
        }else{
            link = <a onClick={logoutE} href="#">Logout</a>
        }
        return(
            link
        )
    }
    const loginE = (e) => {
        e.preventDefault()
        auth.login()
    }
    const logoutE = (e) => {
        e.preventDefault()
        auth.logout()
    }
    return(
       
    <div className={`${styles.menuContainer} container`}>
        <div className={`${styles.navigation}`}>
            <ul>
                <li className={styles.menuItem}>
                    <a href="#">Home</a>
               </li>
                <li className={styles.menuItem}>
                  {loginLink()}
               </li>

            </ul>
        </div>
    </div>
    );
}

export default Menu;
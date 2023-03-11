import React from 'react';
import styles from './Menu.module.css'

function Menu(){
    return(
    <div className={`${styles.menuContainer} container`}>
        <div className={`${styles.navigation}`}>
            <ul>
                <li className={styles.menuItem}>
                    <a href="#">Home</a>
                </li>
            </ul>
        </div>
    </div>
    );
}

export default Menu;
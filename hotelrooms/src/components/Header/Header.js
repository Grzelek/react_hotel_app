import React from 'react';
import Searchbar from './Searchbar/Searchbar';
import styles from './Header.module.css'


function Header(props){
    
    return (
        <header className={`${styles.header} container`}>
         <Searchbar onSearch={props.onSearch}></Searchbar>
        </header>
    );
}

export default Header;

import styles from './Header.module.css'


function Header(props){
    
    return (
        <header className={`${styles.header} container`}>
         {/* <Searchbar onSearch={props.onSearch}></Searchbar> */}
         {props.children}
        </header>
    );
}

export default Header;
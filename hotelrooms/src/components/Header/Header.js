
import styles from './Header.module.css'
import withMousePosition from '../../hoc/withMousePosition';

function Header(props){

    const animationStyle = {
        transform: `translate(${props.mouseX/40}px, ${props.mouseY/40}px)`
    }
    
    return (
        <header 
            className={`${styles.header} container`}
            >
         {/* <Searchbar onSearch={props.onSearch}></Searchbar> */}
         <div 
            className={styles.headerBackground}
            style={animationStyle}
         ></div>
         {props.children}
         
        </header>
    );
}

export default withMousePosition(Header);
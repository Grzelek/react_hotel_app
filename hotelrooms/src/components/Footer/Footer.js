import {ThemeContext} from "../../context/themeContext";

/*
export default function Footer(){
    return(
        <div className={`container`}>
            <div>footer</div>
        </div>
    )
}
*/
/*
export default () => (
    <div className={`container`}>
        <div>footer</div>
    </div>
)
*/
const date = new Date();

const Footer = (props) =>(
    <ThemeContext.Consumer>
        {obj => 
            <div className={`text-center container m-2`}>
            <div className={`text-${obj.theme}`}>footer {date.getFullYear()}</div>
            </div>
        }
        </ThemeContext.Consumer>    
)
export default Footer;
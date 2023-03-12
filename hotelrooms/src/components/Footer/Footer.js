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
    <div className={`text-center container m-2`}>
        <div className={`text-${props.theme}`}>footer {date.getFullYear()}</div>
    </div>
)
export default Footer;
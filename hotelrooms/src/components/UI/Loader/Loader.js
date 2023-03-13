import {ThemeContext} from "../../../context/themeContext";

function Loader(props){
    let loadingText = (props.text) ? props.text : "Loading";
    return (
        <ThemeContext.Consumer>
            {
                obj => (
                    <div className="text-center">
                    <div>{loadingText}</div>
                    <div className={`mt-3 spinner-border text-${obj.colorTheme}`} role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>   
                )
            }
     
        </ThemeContext.Consumer>
    );
}

export default Loader;


function Loader(props){
    let loadingText = (props.text) ? props.text : "Loading";
    return (
        <div className="text-center">
            <div>{loadingText}</div>
            <div className={`mt-3 spinner-border text-${props.theme}`} role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>        
    );
}

export default Loader;
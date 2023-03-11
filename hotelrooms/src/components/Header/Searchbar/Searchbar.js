import {useState} from "react";


function Searchbar(props){
    const [term, setTerm] = useState('');

    const search = () => {
        props.onSearch(term)
    }

    
    return(
        <div className="d-flex">
            <div className="form-group">
                <input 
                value={term}
                onKeyDown={e=> e.key === "Enter" && search()}
                onChange={e => setTerm(e.target.value)}
                className="form-control" 
                style={{width: "calc(100% - 20px", marginRight: '20px'}} 
                type="text" 
                placeholder="szukaj...."/>
            </div>
            <div className="">
                <button 
                onClick={search}
                className="btn btn-primary">Szukaj</button>
            </div>
        </div>
    )
}


export default Searchbar
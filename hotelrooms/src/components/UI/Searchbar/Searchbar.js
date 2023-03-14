import {useContext, useEffect, useState, useRef} from "react";
import PropTypes from 'prop-types'
import {ThemeContext} from "../../../context/themeContext";

const propTypes = {
    onSearch: PropTypes.func.isRequired
}

function Searchbar(props){

    const theme = useContext(ThemeContext)
    const [term, setTerm] = useState('');
    const inputRef = useRef()

    const search = () => {
        props.onSearch(term)
    }

    const focusInput = () => {
        inputRef.current.focus()
    }
    useEffect(() => {
        focusInput()
    }, []) // if array empty - useEffect will start only once

    const dynamicSearch = (e) => {
        setTerm(e.target.value)
        props.onSearch(e.target.value)
    }
    

    return(
        <div className="d-flex">
            <div className="form-group">
                <input 
                    value={term}
                    ref={inputRef}
                    onKeyDown={e => e.key === "Enter" && search()}
                    onChange={e => dynamicSearch(e)}
                    className="form-control search-bar" 
                    style={{width: "calc(100% - 20px", marginRight: '20px'}} 
                    type="text" 
                    placeholder="search..."
                />
            </div>
                <div className="">
                <button 
                onClick={search}
                className={`btn btn-${theme.colorTheme}`}>Search</button>
                </div>
        </div>
    )
}

Searchbar.propTypes = propTypes

export default Searchbar
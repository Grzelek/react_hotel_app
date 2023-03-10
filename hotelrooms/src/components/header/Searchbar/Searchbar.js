import React from "react";

function Searchbar(){
    return(
        <div className="d-flex">
            <div className="form-group">
                <input className="form-control" style={{width: "calc(100% - 20px", marginRight: '20px'}} type="text" placeholder="szukaj...."/>
            </div>
            <div className="">
                <button className="btn btn-primary">Szukaj</button>
            </div>
        </div>
    )
}


export default Searchbar
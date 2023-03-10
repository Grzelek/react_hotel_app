import React from "react";
import styles from "./Hotel.module.css"
import hotelImg from '../../../assets/images/image-placeholder.jpg'

function Hotel(){
    return(
    <div className={`row ${styles.hotelWrap}`}>
        <div className="col-4">
            <img className={`img-thumbnail ${styles.hotelImage}`}src={hotelImg} alt="alttext"/>
        </div>
        <div className="col-8">
            <div className="row">
                <div className="col">
                    <p>Title</p>
                    <p>Town</p>
                </div>
                <div className="col">
                    <p>Ocena: 8.3</p>
                    <p>Opinie: 100</p>
                </div>
            </div>
        </div>
        <div className="col-12">    
            <p>Description</p>
            <div className="d-flex justify-content-end">
                <a href="#" className="btn btn-primary float-right">Show</a>
            </div>
            
        </div>
    </div>
    )
}

export default Hotel;
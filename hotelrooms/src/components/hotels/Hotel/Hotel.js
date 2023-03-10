import React from "react";
import styles from "./Hotel.module.css"
import hotelImg from '../../../assets/images/image-placeholder.jpg'

function Hotel(){
    return(
    <div className={`row ${styles.hotelWrap}`}>
        <div className="col-4">
        <img className={styles.hotelImage}src={hotelImg} alt="alttext"/>
        </div>
        <div className="col-8">
            <p>Title</p>
            <p>Town</p>
        </div>
        <div className="col-1">    
            <p>Description</p>
            <a href="#" className="btn btn-primary">Show</a>
        </div>
        <div className="col-8">
            <p>Title</p>
            <p>Town</p>
            <p>Description</p>
            <a href="#" className="btn btn-primary">Show</a>
        </div>
        </div>
    )
}

export default Hotel;
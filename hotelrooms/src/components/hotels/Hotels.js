import React, {Component} from "react";
import Hotel from "./Hotel/Hotel";
import styles from "./Hotels.module.css"

class Hotels extends Component {
 
    render(){
        return(
           
            <div className={`${styles.hotelsWrap} container`}>
            <h2 className={styles.header}>Oferty</h2>
            
            {this.props.hotels.map(hotel => <Hotel key={hotel.id} {...hotel}/>)}
            </div>);
    }
}

export default Hotels;
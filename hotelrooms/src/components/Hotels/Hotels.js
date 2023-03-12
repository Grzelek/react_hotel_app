
import {Component} from "react";
import PropTypes from 'prop-types';
import Hotel from "./Hotel/Hotel";
import styles from "./Hotels.module.css"

const propTypes = {
    hotels: PropTypes.array.isRequired
}
class Hotels extends Component {
    componentWillUnmount(){
        console.log('hotels will unmounted')
    }
    render(){
        return(
           
            <div className={`${styles.hotelsWrap} container`}>
            <h2 className={styles.header}>Oferty</h2>
            {this.props.hotels.map(hotel => 
                    <Hotel
                        theme={this.props.theme}
                        key={hotel.id} {...hotel}
                    />
                )
             }
            </div>);
    }
}
Hotels.propTypes = propTypes;

export default Hotels;
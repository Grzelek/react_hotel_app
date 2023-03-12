import styles from "./Hotel.module.css"
import hotelImg from '../../../assets/images/image-placeholder.jpg'
import PropTypes from 'prop-types';


const propTypes = {
    name: PropTypes.string.isRequired,
    town: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    description: PropTypes.string,
}
const defaultProps = {
    rating: 'no rating yet'
}

function Hotel(props){
    return(
    <div className={`row ${styles.hotelWrap}`}>
        <div className="col-4">
            <img className={`img-thumbnail ${styles.hotelImage}`}src={hotelImg} alt="alttext"/>
        </div>
        <div className="col-8">
            <div className="row">
                <div className="col">
                    <p>{props.name}</p>
                    <p>{props.town}</p>
                </div>
                <div className="col">
                    <p>Rate: {props.rating}</p>
                    <p>Reviews: 100</p>
                </div>
            </div>
        </div>
        <div className="col-12">    
            <p className="my-2">{props.description}</p>
            <div className="d-flex justify-content-end">
                <a href="#" className={`btn btn-${props.theme} float-right`}>Show</a>
            </div>
            
        </div>
    </div>
    )
}

Hotel.propTypes = propTypes
Hotel.defaultProps = defaultProps

export default Hotel;
import React from 'react'
import PropTypes from 'prop-types'

const Rating = ({ value, text, color }) => {   // value, text, color are props   
    return (   
        <div className='rating'> 
            <span>{/* >= 1 Full Star, >= 0.5 half star, else empty star go through each span tag, and add stars one at a time*/}
                {/* set the style color to the color props that's passed in */}
                <i style = {{color: color}}  
                className={
                    value >= 1 ? 'fas fa-star' 
                    : value >= 0.5 ? 'fas fa-star-half-alt' 
                    : 'far fa-star'}></i>
            </span>

            <span>
                <i style = {{color: color}} 
                className={
                    value >= 2 ? 'fas fa-star' 
                    : value >= 1.5 ? 'fas fa-star-half-alt' 
                    : 'far fa-star'}></i>
            </span>

            <span>
                <i style = {{color: color}}
                className={
                    value >= 3 ? 'fas fa-star' 
                    : value >= 2.5 ? 'fas fa-star-half-alt' 
                    : 'far fa-star'}></i>
            </span>

            <span>
                <i style = {{color: color}} 
                className={
                    value >= 4 ? 'fas fa-star' 
                    : value >= 3.5 ? 'fas fa-star-half-alt' 
                    : 'far fa-star'}></i>
            </span>

            <span>
                <i style = {{color: color}}
                className={
                    value >= 5 ? 'fas fa-star' 
                    : value >= 4.5 ? 'fas fa-star-half-alt' 
                    : 'far fa-star'}></i>
            </span>

            <span>{ text && text }</span> {/* this means if there is a text and that text exists, show it */}

        </div>
    )
}

Rating.defaultProps = {
    color: '#f8e825',
}

// this will typecheck our props
Rating.propTypes = {
    value: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    color: PropTypes.string,
}

export default Rating

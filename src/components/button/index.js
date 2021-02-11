import React from 'react';
import PropTypes from 'prop-types';
import './buttonStyles.css';
import classNames from 'classnames';

const Button = ({children, onClick, color,size,name,type,...props}) => {

    const myClass = classNames('btn app-button', {
        [size]: size,
        [color]:color
    });
    console.log(type);
    return(
        <button
            type={type}
            className={myClass}
            onClick={(event) => onClick(event)}>
            {children}
        </button>
    )
    
};
Button.defaultProps = {
    type: 'submit',
    children: 'Submit',
    size: '',
    classname: '',
    color: 'red',
};

Button.propTypes = {

    /** Input name. Recommend setting this to match object's property so a single change handler can be used. */
    name: PropTypes.string.isRequired,

    /** Input type */
    type: PropTypes.oneOf(['button', 'submit', 'reset']),

    /** Function to call onClick */
    onClick: PropTypes.func.isRequired,

    /** Child component to display next to the input */
    children: PropTypes.node,

    /** Size classname to use for different sizes */
    size: PropTypes.string,

    /** Any additional classnames to add to it */
    classname: PropTypes.string,

    color: PropTypes.string,
};

export default Button;
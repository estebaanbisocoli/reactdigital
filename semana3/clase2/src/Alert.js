import React from 'react';
import PropTypes from 'prop-types'

const Alert = ({children, type, onClick}) => {
    return (
    <div onClick={onClick} className={`alert alert-${type}`}>
        {children}
    </div>
)};

Alert.propTypes = {
    type: PropTypes.oneOf(['primary', 'secondary', 'success', 'danger',
        'warning', 'info', 'light', 'dark' ])
}
Alert.defaultProps = {
    type: 'primary'
}
export default Alert;

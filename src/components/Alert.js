import React from 'react'

function Alert(props) {
    if (!props.alert) {
        return null; // or any other fallback behavior you prefer
    }
    const alertStyle = {
      position: 'absolute',
      top: '20px', // Adjust the top position for the space you want above the alert
      left: '50%', // Center the alert horizontally
      transform: 'translateX(-50%)', // Center the alert horizontally
      zIndex: 9999, // Set a high z-index to ensure it's above other elements
    };
  
  return (
      <div style={alertStyle}>
       <div className="alert alert-warning alert-dismissible fade show" role="alert">
       <strong>{props.alert.type}</strong>:{props.alert.msg}
      </div>
    </div>
  )
}

export default Alert

import React from 'react'

function Alert(props) {
    if (!props.alert) {
        return null; // or any other fallback behavior you prefer
    }
  return (
    <div>
       <div className="alert alert-warning alert-dismissible fade show" role="alert">
       <strong>{props.alert.type}</strong>:{props.alert.msg}
        
      </div>
    </div>
  )
}

export default Alert

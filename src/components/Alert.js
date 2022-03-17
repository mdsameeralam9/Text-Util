import React from "react";

function Alert(props) {

  const capitalizy = (suc) => {
    const text =   suc.toLowerCase()
    return text.charAt(0).toUpperCase() + text.slice(1)
  }

  return (
    <div style={{height: '50px'}}>
        {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
           <strong>{capitalizy(props.alert.type)}</strong>: {props.alert.msg} 
        </div>}
        </div>
  );
}

export default Alert;

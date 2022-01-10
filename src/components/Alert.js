import React from 'react';

function Alert(props) {
    const capitalize = (word) => {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    return (
        props.alert &&
        <div div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert" >
            <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
        </div>
    )
};
// props.alert && ... ye jo syntax hai iska mtlb ye hai ki props.alert agar null hai to aage ka code return nhi hoga code props.alert par hi ruk jayega
// this happens because all the JSX will be converted to javascript calls!
export default Alert;

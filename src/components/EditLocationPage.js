import React from 'react';

const EditLocationPage = (props) => {
    return (    
        <div>
            This is edit location page with id of {props.match.params.id}
        </div>
    );

};
    
export default EditLocationPage
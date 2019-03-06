import React from 'react';

const details = ({
    match, location, history
}) => {
    console.log(match);
    console.log(location);
    console.log(history);
    return <h2>Details</h2>
}

export default details;
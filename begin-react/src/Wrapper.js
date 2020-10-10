import React from 'react';

function Wrapper({children}){
    const style = {
        border: '2px solid blue',
        padding: '1rem'
    }
    return <div style={style}>{children}</div>
}

export default Wrapper;
import React from 'react';
import './App.css';
const test = "tttt";
const style = {
    backgroundColor : '#000',
    fontSize: 24,
    padding: '10px',
    border: '1px solid #000'
}
function Hello({name, color, isSpecial}){
    return <>
        { /* 주석은 이렇게 */ }
        <div >
            <button className="white_box" style={{color: color}}>
                {isSpecial && <b>*</b>}
                {name} 님 안녕?</button>
        </div>
    </>
}

Hello.defaultProps = {
    name : 'null'
}
export default Hello; 
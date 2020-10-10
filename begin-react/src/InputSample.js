import React, { useState } from 'react';


function InputSample(){
    const [inputs, setInputs] = useState({
        name: '',
        nick: ''
    });
    const {name, nickname} = inputs;
    const onChange = (e) => {
        const {name, value} = e.target;
        const nextInputs = {
            ...inputs,
            [name] : value,
        }
    }
    const onReset = () => {
        setInputs({
            name: '',
            nickname: ''
        });
    }
    return(
        <div>
            <input name="name" placeholder="이름" onChange={onChange} />
            <input name="nickname" placeholder="닉네임" onChange={onChange} />
            <button onClick={onReset}>초기화</button>
            <div>이름 : {name} / 닉네임 : {nickname}</div>
        </div>
    )
}
export default InputSample;
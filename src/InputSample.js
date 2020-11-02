import React, { useRef, useState } from 'react';

function InputSample () {

    const [inputs , setInputs] = useState({
        name : '',
        nickName : '' ,
        type : ''
    });

    const nameInput = useRef();
    const nickNameInput = useRef();

    const {name , nickName , type} = inputs;

    const onChange = (e) => {

        const {name , value} = e.target;

        setInputs({
            ...inputs,
            [name] : value,
        });
        
    }
    const onReset = (e) => {
        setInputs({
            name : '',
            nickName : '',
            type : ''
        });
        // .current 는 해당 DOM 을 가리킨다..
        nameInput.current.focus();
        nickNameInput.current.placeholder = 'placeholder 변경';
    }

    return (
        <div>
            <input name="name" placeholder="이름" onChange={onChange} value={name} ref={nameInput}></input>
            <input name="nickName" placeholder="닉네임" onChange={onChange} value={nickName} ref={nickNameInput}></input>
            <input name="type" placeholder="닉네임" onChange={onChange} value={type}></input>
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값 : </b>
                {name} ({nickName})
            </div>
        </div>
    )
}

export default InputSample;
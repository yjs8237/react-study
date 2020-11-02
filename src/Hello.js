import React from 'react';

// 컴포넌트 첫 단어는 대문자로 된다.
function Hello({color , name, isSpecial}) {
    //console.log(props);
    return (
        <p style={{color: color}}>
            안녕하세요. 
            {/* 삼항 연산자 방법 */}
            {isSpecial ? <b>*</b> : null} 
            {/* AND 연산자 방법 */}
            {isSpecial && <b>*</b>} 
            {name} 
        </p>
    );
}

/* 기본값 props 설정 */
Hello.defaultProps = {
    name: '이름없음'
}

export default Hello;
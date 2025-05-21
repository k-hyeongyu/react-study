import { useState } from "react"; //export

function State02(){

    //let v = []{key : value}

    let text = ""; //문자열 변수
    let textArr = []; //배열변수

    for(let i = 0; i<5; i++){
        text += "<p>하이요</p>"
        textArr.push(<p>ㅎㅇ</p>)    
    }

    let numArr = [1,2,3,4,5]; //숫자 배열 5개짜리 갯수 활용목적

    let [colorArr, setColorArr] = useState(["빨강","파랑","초록","노랑"]);
    let [item, setitem] = use
    
    return(
        <div>
            <p>하이</p>
            <p>하이</p>
            <p>하이</p>
            <p>하이</p>
            <p>하이</p>
            <hr></hr>
            {textArr}
            <hr></hr>
            {text}
            <hr></hr>
            {
                numArr.map( ()=>{
                    return(
                        <p></p>
                    )
                })
            }
            <hr></hr>
            {
                msgArr.map((msg)=>{
                    return(
                        <p>이번 메시지는....</p>
                    )
                })
            }
            <hr></hr>
            {
                colorArr.map((itme)=>{
                    return(
                        <p>색상은 {item}</p>
                    )
                })
            }
        </div>
    )
}

export default State02;
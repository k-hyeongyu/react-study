import { useState } from "react";

function State01(){

    //일반 js변수
    let cnt = 0;

    //State변수
    //React Hooks
    //useState -> 상태를 저장하는 변수 역할
    //화면이 리렌더링이 되는 상황에서도 상태변수 데이터가 유지됨.
    //set함수를 통해서 state변수값이 변경이 되면 -> 화면 리렌더링

    //사용법 const or let [변수명, set함수] = useState(초깃값);

    let[cnt2, setCnt2] = useState(0);

    return(

        <div className="App">
            <h1>State01</h1>
            <p>{cnt}</p>
            {/* <button onClick={cntPlus}>cnt증가 버튼</button> */}
            {/* <button onClick={()=>{ cntPlus() }}>cnt증가 버튼</button> */}
            <button onClick={()=>{
                cnt++;
                console.log('cnt : ' + cnt);
            }}>cnt증가버튼</button>

            <p>{cnt2}</p>
            <button onClick={()=>{
                //cnt2++; //state변수값을 그냥 변경, 재렌더링이 없음.
                //재렌더링 조간 -> set함수를 통해서 state 변수값 변경
                setCnt2(cnt2 + 1); //cnt2 = cnt2 + 1;
                //setCnt2 (매개변수)
                console.log('cnt2 : ' + cnt2);
            }}>cnt2증가버튼(state변수)</button>
        </div>

    );

    function cntPlus(){
        cnt++;
        console.log(cnt);
    }
}
export default State01;
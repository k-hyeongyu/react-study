import './Basic01.css';

function Basic01(){

    let msg = "hi";
    let state = "hunger";
    let flag = false;

    let hi = "";
    for(let i =0; i<5; i++){
        hi += "hi";
    }
    return(
        <div className="App">
            <h1>리액트</h1>
            <p className="font-red">너란 녀석 참 힘들다..</p>
            <p id="pid">귀여운 나의 아기새</p>
            {/* { 삼항 연산자
                flag == true ? <h3>{msg}</h3> : <h3>{state}</h3>
            } */}
            {
                //&&연산자
                flag && <h3>{msg}</h3>
            }
            {
                //flag == false && <h3>{state}</h3>
                !flag && <h3>{state}</h3>
            }

            <h4 style={{color:'green', fontStyle:'italic'}}>{hi}</h4>

        </div>
    )

    //if else 로 return을 통으로 구분하는 케이스
    // if(flag){

    //     return(
    //         <div className="App">
    //             <h1>리액트</h1>
    //             <p className="font-red">커피</p>
    //             <p id="pid">아무거나</p>

    //             <h3>{state}</h3>
    //             <h4 style={{color:'green', fontStyle:'italic'}}>{hi}</h4>
    //         </div>
    //     )
        
    // } else {
    //     return(
    //         <div className="App">
    //             <h1>{state}</h1>
    //         </div>
    //     )
    // }


    //리액트 컴포넌트에서 return은 최상위 1개 요소로 리턴
    // return(
    //     <>
    //         <div>
    //             <p></p>
    //         </div>
    //         <div>
    //             <p></p>
    //         </div>
    //     </>
    // );

    // return(
    //     <div>
    //         <div>
    //             <p></p>
    //         </div>
    //         <div>
    //             <p></p>
    //         </div>
    //     </div>
    // );
}
export default Basic01
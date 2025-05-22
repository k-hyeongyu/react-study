import { useState } from "react"; //

function Practice02(){
    const texts = ["하나", "둘", "셋"]; // 텍스트 배열
    const[cnt, setCnt] = useState(0);

    return(
            <div className="App">
                <p>{texts[cnt]}</p>
                <button onClick={()=>{
                    setCnt((cnt + 1) % texts.length);

                    // let temp = cnt;
                    // temp++;
                    // if(temp == texts.length)
                    //     temp == 0;
                    // setCnt(temp);
                }}>변경버튼</button>
            </div>
        );
}

export default Practice02;
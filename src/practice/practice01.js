import { useState } from "react"; //

function Practice01(){

    const[cnt/*변수명*/ , setCnt/*함수명*/] = useState(0);

    return(

        <div className="App">
            <button onClick={()=>{
                setCnt(cnt + 2);
            }}>짝수 출력</button> <span style={{ color: 'red' }}>{cnt}</span>

        </div>

    );
}

export default Practice01;
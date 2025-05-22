import Box from "./Box";
import { useState } from "react";

function Props02(){


    let [titleArr, setTitleArr] = useState(['아침','점심','저녁','야식']);
    let [contentArr, setContentArr] = useState(['시리얼', '햄버거', '삼겹살', '치킨']);

    return (
        <div>
            <p></p>
            <button onClick={()=>{
                //setTitleArr(['아침','점심','저녁','야식', '추가야식']);
                //setContentArr(['시리얼', '햄버거', '삼겹살', '치킨', '곱창']);
                // titleArr.push('추가야식');
                // contentArr.push('곱창');
                // console.log(titleArr);
                // console.log(contentArr);

                // setTitleArr(titleArr);
                // setContentArr(contentArr);
                //let temp = titleArr; //얕은 복사
                let temp = [...titleArr];
                temp.push('추가야식');
                setTitleArr(temp);

                let temp2 = [...contentArr];
                temp2.push('곱창');
                setContentArr(temp2);3
            }}>컴포넌트 추가</button>

            {
                titleArr.map((item, index)=>{
                    return <Box title={titleArr[index]} content={contentArr[index]}/>;
                })
            }
            {/* <Box title= '아침' content = '시리얼'/>
            <Box title= '점심' content = '햄버거'/>
            <Box title= '저녁' content = '밥'/> */}
        </div>
    );
}
export default Props02;
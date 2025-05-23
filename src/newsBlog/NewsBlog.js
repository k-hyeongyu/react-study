import './NewsBlog.css';
import { useState } from 'react';
import Modal from './Modal';

function NewsBlog() {

    let title = "React Study";

    let [news1, setNews1] = useState('오늘의 뉴스');
    let [news2, setNews2] = useState('어제의 뉴스');
    let [news3, setNews3] = useState('내일의 뉴스');

    let [news, setNews] = useState(['오늘의 뉴스', '어제의 뉴스', '내일의 뉴스']);
    //                 ['Today News', '어제의 뉴스', '내일의 뉴스']

    let [likeCount1, setLikeCount1] = useState(0);
    let [likeCount2, setLikeCount2] = useState(0);
    let [likeCount3, setLikeCount3] = useState(0);

    let [likeCountArr, setLikeCountArr] = useState([0, 0, 0, 0]);

    let [showModal, setShowModal] = useState(false);
    //    0  1 

    let [selectedTitle, setSelectedTitle] = useState('');
    let [selectedLikeCount, setSelectedLikeCount] = useState(0);

    //imput 값을 저장할 변수
    let [inputText, setInputText] = useState('');

    return (
        <div>
            <div className='black-nav'>
                <h4>Blog Header</h4>
                <p style={{ color: "orange", fontSize: '20px' }}>{title}</p>
            </div>
            <div>
                <input type="text" value={inputText} onChange={(event) => {
                    //console.log(event);
                    console.log(event.target.value);
                    setInputText(event.target.value);
                }}></input>
                <button onClick={() => {
                    if (inputText.trim() === '') {
                        alert('내용을 입력하세요!');
                        return;
                    }
                    //입력된 값을 제목 배열에 추가
                    //입력된 값 : input요소에서 onChange가 발생할떄 -> inputText state변수에 저장
                    //제목배열 news 배열변수에 추가 -> 렌더링 -> news 배열의 갯수만큼 반복(map) 화면에 표시
                    let temp = [...news];
                    temp.push(inputText);
                    setNews(temp); //뉴스가 새로 추가되었을 경우에 새로운 뉴스의 좋아요도 가능하게 배열을 생성
                    
                    likeCountArr.push(0);
                    //배열state변슈 바꾸는 법 : 배열 복사 -> 값 변경/ 추가 / 삭제 -> set함수로 원래 배열에 저장
                    setInputText(''); //공백 -> input value= {inpuText}
                }}>등록</button>
            </div>
            {
                news.map((item, index) => {   // 0 1 2 
                    //return <div className='post-list'>
                    return (
                        <div className='post-list'>
                            <h4 onClick={() => {
                                setShowModal(!showModal);
                                setSelectedTitle(item);
                                setSelectedLikeCount(likeCountArr[index]);
                            }}>{item} <span onClick={(event) => {

                                event.stopPropagation();
                                let temp = [...likeCountArr];
                                temp[index] += 1;
                                setLikeCountArr(temp);

                            }}>❤</span>{likeCountArr[index]}</h4>
                            <p>내용 무</p>
                        </div>
                    )

                })
            }

            {
                //showModal == true ? <Modal/> : null
                //props 전달 
                // 변수, 배열, 객체, 함수, 요소(컴포넌트)
                showModal && <Modal title={selectedTitle} likeCount={selectedLikeCount}
                    news={news} setNews={setNews}
                    bgColor='lightblue' />
            }

        </div>
    );
}

export default NewsBlog;
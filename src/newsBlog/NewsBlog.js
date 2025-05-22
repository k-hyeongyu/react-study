import { useState } from 'react';
import './NewsBlog.css';

function NewsBlog() {

    let title = "React Study";

    let [news1, setNews1] = useState('오늘의 늬우스');
    let [news2, setNews2] = useState('어제의 늬우스');
    let [news3, setNews3] = useState('내일의 늬우스');
    let [news, setNews] = useState(['오늘의 늬우스', '어제의 늬우스', '내일의 늬우스']);

    let [like1, setLike1] = useState(0);
    let [like2, setLike2] = useState(0);
    let [like3, setLike3] = useState(0);

    let [likeCountArr, setLikeCountArr] = useState([0, 0, 0]);

    return (
        <div>
            <div className='black-nav'>
                <h4>Blog Header</h4>
                <p style={{ color: "orange", fontsize: '20px' }}>{title}</p>
            </div>
            {/* style={{ cursor: 'pointer', marginLeft: '10px' }} */}
            <div className='post-list'>
                <h4>{news[0]}<span onClick={() => {
                    
                    let temp = [...likeCountArr];
                    temp[0] += 1;
                    setLikeCountArr(temp);
                }}>😍</span>
                    {likeCountArr[0]}
                </h4>
                <p>퉁퉁퉁퉁퉁퉁퉁퉁퉁 사후르</p>
            </div>

            <div className='post-list'>
                <h4>{news[1]}<span onClick={() => setLike2(like2 + 1)}
                    style={{ cursor: 'pointer', marginLeft: '10px' }}
                >🥰</span>
                    {likeCountArr[1]}</h4>
                <p>트랄랄레로 트랄랄라</p>
            </div>

            <div className='post-list'>
                <h4>{news1}<span onClick={() => setLike3(like3 + 1)}
                    style={{ cursor: 'pointer', marginLeft: '10px' }}
                >(●'◡'●)💖</span>
                    {likeCountArr[2]}</h4>
                <p>엄마가 섬그늘에 굴따러 가면 아기는 혼자 남아 집을 봅니다</p>
                {/* <button onClick={()=>{
                    setNews1('Today News')
                }}>제목변경</button> */}
            </div>
        </div>
    );
}

export default NewsBlog;
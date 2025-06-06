import './Detail.css';
import { useParams } from 'react-router';
import { Container, Row, Col, Button } from "react-bootstrap";
function Detail({ foods }) {

    let { id } = useParams();
    // foods 전체 정보 보유

    // id : 현재 페이지에서 표시해야 하는 food의 id가 확인됨

    let food = foods.find((food)=>{
        return food.id == id;
    })

    if(food == undefined){

        return(
            <div><h1>존재하지 않는 상품입니다. 잘못된 접근입니다.</h1></div>
        )
    }
            return(
                <Container>
                    <Row>
                        <Col md={6}>
                            <img src={process.env.PUBLIC_URL + '/images/food1.jpg'} width="100%" />
                        </Col>
                        <Col md={6}>
                            <h4 style={{ paddingTop: '30px' }}>{food.title}</h4>
                            <p>완전식품</p>
                            <p>11000</p>
                            <p>
                                <Button variant="dark">-</Button>
                                <span> 0 </span>
                                <Button variant="dark">+</Button>
                            </p>

                            <Button variant="primary">주문하기</Button>
                        </Col>
                    </Row>
                </Container>
            );
}

export default Detail;
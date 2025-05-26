import {Card, Button} from 'react-bootstrap';

function FoodCard(props) {

    return (
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={process.env.PUBLIC_URL + props.food.imgPath}/>
                <Card.Body>
                    <Card.Title>{props.foods[props.index].title}</Card.Title>
                    <Card.Text>
                        {props.foods[props.index].content}
                    </Card.Text>
                    <Card.Text>
                        {props.foods[props.index].price}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
    );
}

export default FoodCard;
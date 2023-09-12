import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import fantasy from '../data/fantasy.json'
import Book from './Book';
import { Component } from "react";


class AllTheBooks extends Component {

    
   

   render(){
    
    return (
        <Container>
            <Row className='row-cols-2 row-cols-md-3 row-cols-md-4 gy-3'>
                {fantasy.map((book, index) => (
                    <Col key={`book-${index}`}>
                        <Book src={book.img} title={book.title} asin={book.asin} />
                    </Col>
                 
                ))}
            </Row>
        </Container>
    )
   }

}

export default AllTheBooks;
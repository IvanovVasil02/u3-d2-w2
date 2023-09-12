import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import { Container, Row } from "react-bootstrap";
import Book from "./Book";
import { useState } from "react";
import CommentList from "./CommentList";
import CommentArea from "./CommentArea";

const SearchBook = (props) => {
  const [searchValue, setSearchValue] = useState("");
  const [selected, setSelected] = useState(null);

  const setSelectedValue = (value) => {
    setSelected(value);
  };

  return (
    <>
      <Container fluid>
        <Row className='justify-content-center'>
          <Col md='8' className='px-2 my-3'>
            <Form className='d-flex'>
              <Form.Control
                type='search'
                placeholder='Search a book'
                className='me-2'
                aria-label='Search'
                onChange={(event) => setSearchValue(event.target.value)}
              />
            </Form>
          </Col>
        </Row>
        <Row>
          <Col xs='9'>
            <Row className='row-cols-sm-2 row-cols-md-3 row-cols-lg-4 px-3 border-1 border-black gy-2'>
              {props.books
                .filter((book) => book.title.toLowerCase().includes(searchValue))
                .map((book, index) => (
                  <Col key={`book-${index}`}>
                    <Book
                      src={book.img}
                      title={book.title}
                      asin={book.asin}
                      selected={selected}
                      setSelectedValue={setSelectedValue}
                    />
                  </Col>
                ))}
            </Row>
          </Col>

          <Col
            xs='3'
            className='sticky-top py-2 d-flex flex-column justify-content-between'
            style={{ height: "100vh" }}
          >
            <CommentList asin={selected} />

            {selected && <CommentArea asin={selected} />}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SearchBook;

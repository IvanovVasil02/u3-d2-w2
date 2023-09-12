import Card from "react-bootstrap/Card";

const Book = (props) => {
  const checkSelect = (value) => (value === props.selected ? "selected" : "");

  return (
    <>
      <Card onClick={() => props.setSelectedValue(props.asin)} className={(checkSelect(props.asin), "h-100")}>
        <Card.Img variant='top' src={props.src} />
        <Card.Body className='d-flex'>
          <Card.Title className='mt-auto'> {props.title}$</Card.Title>
        </Card.Body>
      </Card>

      {/* {this.state.selected && <CommentArea asin={this.props.asin} />} */}
    </>
  );
};

export default Book;

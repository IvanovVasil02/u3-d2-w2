import { useState, useEffect } from "react";
import { Alert, Spinner } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";

const CommentList = (props) => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasErrors, setHasErrors] = useState(false);
  const [firstLoading, setFirstLoading] = useState(true);

  const fetchComments = async () => {
    setIsLoading(true);
    setFirstLoading(false);

    const URL = "https://striveschool-api.herokuapp.com/api/comments/";

    try {
      const response = await fetch(URL, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGZmMGUyMzIxNGMzYTAwMTQzYzYyMTQiLCJpYXQiOjE2OTQ0MzY4OTksImV4cCI6MTY5NTY0NjQ5OX0.snMOVlbxPhtOos0CeGr0k2ua7Fh0CHimBND0wwDHrZY",
        },
      });

      const data = await response.json();
      let comments = await data.filter((book) => book.elementId === props.asin);
      console.log(data);
      console.log(comments);
      setComments(comments);
    } catch (error) {
      setHasErrors(true);
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchComments();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.asin]);

  return (
    <ListGroup variant='flush' className='overflow-hidden'>
      <ListGroup.Item className='d-flex align-items-start bg-success text-white'>
        Recensioni libro: {props.asin}
      </ListGroup.Item>

      {hasErrors && <Alert variant='danger'>C'è stato un'errore nel caricamento dei commenti</Alert>}

      {firstLoading && <ListGroup.Item variant='secondary'>Seleziona un libro per vedere le recensioni</ListGroup.Item>}

      {!firstLoading && comments.length <= 0 && (
        <ListGroup.Item variant='secondary'>Non ci sono recensioni riguardanti a questo libro...</ListGroup.Item>
      )}

      {comments &&
        comments.map((comm) => (
          <ListGroup.Item variant='secondary' key={comm["_id"]} className='my-1'>
            <b>{comm.author}:</b> {comm.comment}
          </ListGroup.Item>
        ))}

      {isLoading && <Spinner animation='border' variant='primary' className='m-auto mt-3' />}
    </ListGroup>
  );
};

export default CommentList;

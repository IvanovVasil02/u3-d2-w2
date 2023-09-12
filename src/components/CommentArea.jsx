import { useState } from "react";
import { Button, Form } from "react-bootstrap";

const CommentArea = (props) => {
  // const [isLoading, setIsLoading] = useState(false);
  // const [hasErrors, setHasErrors] = useState(false);
  const [personalComment, setPersonalComment] = useState({
    elementId: props.asin,
    rate: "",
    comment: "",
  });

  const handleChange = (fieldName, fieldValue) => {
    setPersonalComment({ ...personalComment, [fieldName]: fieldValue });
  };

  const handleSubmmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("https://striveschool-api.herokuapp.com/api/comments", {
        method: "POST",
        body: JSON.stringify(personalComment),
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGZmMGUyMzIxNGMzYTAwMTQzYzYyMTQiLCJpYXQiOjE2OTQ0MzY4OTksImV4cCI6MTY5NTY0NjQ5OX0.snMOVlbxPhtOos0CeGr0k2ua7Fh0CHimBND0wwDHrZY",
        },
      });

      setPersonalComment(personalComment);

      console.log(response);

      if (response.ok) {
        setPersonalComment({ author: "", elementId: "", rate: "", comment: "" });
        console.log("inviato con successo");
      }
    } catch (error) {
      // setHasErrors(true);
      console.log(error);
    } finally {
      // setIsLoading(false);
    }
  };

  return (
    <Form onSubmit={handleSubmmit}>
      <Form.Select
        aria-label='Default select example'
        onChange={(event) => handleChange("rate", event.target.value)}
        className='my-2'
      >
        <option value=''>Dai un voto al libro</option>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </Form.Select>

      <div className='d-flex'>
        <Form.Control
          as='textarea'
          onChange={(event) => handleChange("comment", event.target.value)}
          placeholder='Lascia qui il tuo commento'
        />
        <Button variant='primary' type='submit'>
          Invio
        </Button>
      </div>
    </Form>
  );
};

export default CommentArea;

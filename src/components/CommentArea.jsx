import { useState } from "react";
import { FloatingLabel, Form } from "react-bootstrap";

const CommentArea = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [hasErrors, setHasErrors] = useState(false);
  const [comment, setComment] = useState({
    email: "",
    textComment: "",
  });

  const handleChange = (fieldName, fieldValue) => {
    setComment({ ...comment, [fieldName]: fieldValue });
  };

  const handleSubmmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(URL, {
        method: "POST",
        body: JSON.stringify(comment),
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGZmMGUyMzIxNGMzYTAwMTQzYzYyMTQiLCJpYXQiOjE2OTQ0MzY4OTksImV4cCI6MTY5NTY0NjQ5OX0.snMOVlbxPhtOos0CeGr0k2ua7Fh0CHimBND0wwDHrZY",
        },
      });

      setComment(comment);

      console.log(response);

      if (response.ok) {
        setComment({ email: "", textComment: "" });
      }
    } catch (error) {
      setHasErrors(true);
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Form>
      <Form.Group controlId='formBasicEmail'>
        <FloatingLabel controlId='floatingTextarea' label='Email: Inserisci la tua email '>
          <Form.Control type='text' required />
        </FloatingLabel>
      </Form.Group>

      <Form.Select aria-label='Default select example' className='my-2'>
        <option value=''>Dai un voto al libro</option>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </Form.Select>

      <FloatingLabel controlId='floatingTextarea' label='Lascia qui la tua recensione e premi invio!' className='mb-3 '>
        <Form.Control as='textarea' />
      </FloatingLabel>
    </Form>
  );
};

export default CommentArea;

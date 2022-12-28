import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

export const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleClick = () => null;

  // const [error, _setError] = useState(null);

  return (
    <div>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="text"
            placeholder=""
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder=""
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        {/* {error && <p>{error}</p>} */}
        <Button onClick={handleClick}>Signin</Button>
      </Form>
    </div>
  );
};
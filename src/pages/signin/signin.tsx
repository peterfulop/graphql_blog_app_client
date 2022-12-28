import { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSigninMutation } from '../../apollo/queries/auth/auth.generated';
export const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<null | string>(null);

  const [signinMutation, { data, loading, error: signinError }] =
    useSigninMutation();

  const resetForm = () => {
    setEmail('');
    setPassword('');
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    await signinMutation({
      variables: {
        input: {
          email,
          password,
        },
      },
    });
  };

  useEffect(() => {
    if (signinError) {
      setError(signinError.message);
    }
    if (data) {
      if (data.signin.userErrors.length) {
        setError(data.signin.userErrors[0].message);
      }
      if (data.signin.token) {
        localStorage.setItem('token', data.signin.token);
        resetForm();
      }
    }
  }, [data]);

  return (
    <div>
      <Form onSubmit={(e) => handleSubmit(e)}>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="text"
            placeholder=""
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={loading}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder=""
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={loading}
          />
        </Form.Group>
        {error && <p>{error}</p>}
        <Button disabled={loading} type="submit">
          Signin
        </Button>
      </Form>
    </div>
  );
};

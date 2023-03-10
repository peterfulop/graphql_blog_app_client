import { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignupMutation } from '../../apollo/queries/auth/auth.generated';
import { sSTE } from '../../utilities/set-server-type-error';
import EnStrings from '../../utilities/strings';

export const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');

  const [error, setError] = useState<null | string>(null);

  const [signupMutation, { data, loading, error: signupError }] =
    useSignupMutation();

  const resetForm = () => {
    setError(null);
    setEmail('');
    setPassword('');
    setPasswordConfirm('');
    setName('');
    setBio('');
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    await signupMutation({
      variables: {
        input: {
          name,
          credentials: {
            email,
            password,
          },
          passwordConfirm,
          bio,
        },
      },
    });
  };

  useEffect(() => {
    if (signupError) {
      setError(EnStrings.ERRORS.SERVER_ERROR);
    }
    if (data) {
      if (data.signup.userErrors.length) {
        const errMessage = sSTE(data.signup.userErrors[0].message);
        setError(errMessage);
      }
      if (data.signup.token) {
        localStorage.setItem('token', data.signup.token);
        resetForm();
      }
    }
  }, [data]);

  return (
    <div>
      <Form onSubmit={(e) => handleSubmit(e)}>
        <Form.Group className="mb-3">
          <Form.Label>{EnStrings.SCREENS.SIGNUP.FORM.LABELS.NAME}</Form.Label>
          <Form.Control
            type="text"
            placeholder=""
            value={name}
            onChange={(e) => setName(e.target.value)}
            disabled={loading}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>{EnStrings.SCREENS.SIGNUP.FORM.LABELS.EMAIL}</Form.Label>
          <Form.Control
            type="text"
            placeholder=""
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={loading}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>
            {EnStrings.SCREENS.SIGNUP.FORM.LABELS.PASSWORD}
          </Form.Label>
          <Form.Control
            type="password"
            placeholder=""
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={loading}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>
            {EnStrings.SCREENS.SIGNUP.FORM.LABELS.PASSWORD_CONFIRM}
          </Form.Label>
          <Form.Control
            type="password"
            placeholder=""
            value={passwordConfirm}
            onChange={(e) => setPasswordConfirm(e.target.value)}
            disabled={loading}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>{EnStrings.SCREENS.SIGNUP.FORM.LABELS.BIO}</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            disabled={loading}
          />
        </Form.Group>
        {error && <p>{error}</p>}
        <Button type="submit">
          {EnStrings.SCREENS.SIGNUP.FORM.BUTTONS.SIGNUP_BUTTON}
        </Button>
      </Form>
    </div>
  );
};

import { currentYear, developedBy, developedByLink } from '../Context/constants.js';
import { Navigate, Route, Routes,Link } from 'react-router-dom';
import TextFormInput from '../Components/Forms/TextFormInput.js';
import PasswordFormInput from '../Components/Forms/PasswordFormInput.js';
import { Button, FormCheck } from 'react-bootstrap';

function Login () {
    return <form className="mt-sm-4">
    <TextFormInput name="email" type="email" placeholder="Enter email" containerClassName="mb-3 input-group-lg" />
    <div className="mb-3 position-relative">
      <PasswordFormInput name="password" placeholder="Enter password" size="lg" containerClassName="w-100" />
    </div>
    <div className="mb-3 d-sm-flex justify-content-between">
      <div>
        <FormCheck type="checkbox" label="Remember me?" id="rememberCheck" />
      </div>
      <Link to="/auth/forgot-pass">Forgot password?</Link>
    </div>
    <div className="d-grid">
      <Button variant="primary" size="lg" type="submit">
        Login
      </Button>
    </div>
    <p className="mb-0 mt-3">
      ©{currentYear}
      <Link target="_blank" to={developedByLink}>
        {developedBy}.
      </Link>
      All rights reserved
    </p>
  </form>;
};
export default Login;
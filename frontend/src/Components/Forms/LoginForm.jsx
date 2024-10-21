import {
  developedBy,
  developedByLink,
} from "../../Context/constants.js";
import { Link } from "react-router-dom";
import TextFormInput from "../Inputs/TextFormInput.jsx";
import PasswordFormInput from "../Inputs/PasswordFormInput.jsx";
import { Button, FormCheck } from "react-bootstrap";
import useSignIn from "../../Pages/Functions/UseSignIn.js";

const LoginForm = () => {
  const { loading, login, control } = useSignIn();
  return (
    <form className="mt-sm-4" onClick={login}>
      <TextFormInput
        name="email"
        type="email"
        placeholder="Enter email"
        control={control}
        containerClassName="mb-3 input-group-lg"
      />
      <div className="mb-3 position-relative">
        <PasswordFormInput
          name="password"
          placeholder="Enter password"
          control={control}
          size="lg"
          containerClassName="w-100"
        />
      </div>
      <div className="mb-3 d-sm-flex justify-content-between">
        <div>
          <FormCheck type="checkbox" label="Remember me?" id="rememberCheck" />
        </div>
        <Link to="/auth/forgot-pass">Forgot password?</Link>
      </div>
      <div className="d-grid">
        <Button variant="primary" size="lg" type="submit" disabled={loading}>
          Login
        </Button>
      </div>
      <p className="mb-0 mt-3">
        {/* ©{currentYear} */}
        <Link target="_blank" to={developedByLink}>
          {developedBy}.
        </Link>
        {/* All rights reserved */}
      </p>
    </form>
  );
};
export default LoginForm;

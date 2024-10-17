// import { Link } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';
import "../../Styles/SignIn.css"; 

const AuthAdvanceLayout = ({
  children
}) => {
  return(
        <div className="bg-secondary pb-0 position-relative">
          <Container>
            <Row className="justify-content-center  text-center vh-100 py-5">{children}</Row>
          </Container>
        </div>
      )
};
export default AuthAdvanceLayout;
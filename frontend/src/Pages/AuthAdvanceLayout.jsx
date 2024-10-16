// import { Link } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';
import "../Styles/SignIn.css"; 

const AuthAdvanceLayout = ({
  children
}) => {
  return <>
        <div className="bg-primary pt-5 pb-0 position-relative" style={{height : "100vh"}}>
          <Container>
            <Row className="justify-content-center text-center">{children}</Row>
          </Container>
        </div>
    </>;
};
export default AuthAdvanceLayout;
import { Col, Container, Row } from "react-bootstrap";
import "../../Styles/SignIn.css"; 
const AuthLayout = ({ children }) => {
  return (
    <div className="bg-secondary pb-0 position-relative">
      <Container>
        <Row className="justify-content-center align-items-center vh-100 py-5">
          <Col sm={10} md={8} lg={7} xl={6} xxl={5}>
            {children}
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default AuthLayout;

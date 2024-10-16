// import { Link } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';
import "../Styles/SignIn.css"; 

const AuthAdvanceLayout = ({
  children
}) => {
  return <>
      <main>
        <div className="bg-secondary pt-5 pb-0 position-relative">
          <Container>
            <Row className="justify-content-center text-center">{children}</Row>
          </Container>
        </div>
      </main>
    </>;
};
export default AuthAdvanceLayout;
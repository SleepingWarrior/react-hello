//React-Bootstrap Component - The Navbar is not linked to anything at the moment
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import "../styles.css";

function NavBar() {
  return (
    <>
      <Navbar bg="" variant="">
        <Container className="nav-container">
          <Nav className="links me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#Details">Details</Nav.Link>
            <Nav.Link href="#Interests">Interests</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
export default NavBar;

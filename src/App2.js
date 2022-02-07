import "./App2.css";
import { Nav, Button, Navbar, NavDropdown, Container } from "react-bootstrap";

function FanceCard(props) {
  return (
    <>
      <div class="card h-100">
        <img src={props.src} class="card-img-top" width={"450"}></img>
        <div class="card-body text-center">
          <h5 class="card-title">Sale Item</h5>
          <p className="text-danger">{props.star}</p>
          <p class="card-text">
            <del>{props.oldprice}</del> {props.nowprice}
          </p>
        </div>
        <div className="card-footer text-center border-0 bg-white">
          <a href="addtocard" className="btn btn-outline-dark mb-3">
            Add to cart
          </a>
        </div>
      </div>
    </>
  );
}
function App() {
  return (
    <>
      <header>
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="#">Start Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                // style={{ maxHeight: "100px" }}
                // navbarScroll
              >
                <Nav.Link href="#action1">Home</Nav.Link>
                <Nav.Link href="#action2">About</Nav.Link>
                <NavDropdown title="Shop" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Button
                variant="outline-dark"
                className="d-flex align-items-center "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-cart-fill mx-2"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                </svg>
                Card
                <span
                  variant="bg-dark"
                  className="bg-dark text-light countItems mx-2 px-2 rounded-pill"
                >
                  0
                </span>
              </Button>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
      <section>
        <div className="hero bg-dark text-light p-4 text-center">
          <h1 className="pt-4 mt-3 fw-bold">Shop in style</h1>
          <p className="text-secondary pb-4">
            With this shop hompeage template
          </p>
        </div>
      </section>
      <section>
        <div className="cards py-4 mt-4">
          <div className="container container-sm-fluid">
            <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-4 ali">
              <div className="col">
                <FanceCard
                  src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                  oldprice="$40.00"
                  nowprice="- $80.00"
                ></FanceCard>
              </div>
              <div className="col">
                <FanceCard
                  src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                  star="⭐⭐⭐⭐⭐"
                  oldprice="$20.00"
                  nowprice="$18.00"
                ></FanceCard>
              </div>
              <div className="col">
                <FanceCard
                  src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                  //   star="dsad"
                  oldprice="$50.00"
                  nowprice="$25.00"
                ></FanceCard>
              </div>
              <div className="col">
                <FanceCard
                  src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                  star="⭐⭐⭐⭐⭐"
                  //   oldprice="$40.00"
                  nowprice="$40.00"
                ></FanceCard>
              </div>
              <div className="col">
                <FanceCard
                  src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                  //   star="⭐⭐⭐⭐⭐"
                  oldprice="$50.00"
                  nowprice="- $25.00"
                ></FanceCard>
              </div>
              <div className="col">
                <FanceCard
                  src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                  //   star=""
                  //   oldprice="$40.00"
                  nowprice="$120.00 - $80.00"
                ></FanceCard>
              </div>
              <div className="col">
                <FanceCard
                  src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                  //   star="dsad"
                  star="⭐⭐⭐⭐⭐"
                  oldprice="$20.00"
                  nowprice="$18.00"
                ></FanceCard>
              </div>
              <div className="col">
                <FanceCard
                  src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                  //   star="dsad"
                  star="⭐⭐⭐⭐⭐"
                  //   oldprice="$40.00"
                  nowprice="$40.00"
                ></FanceCard>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="bg-dark text-light mt-4">
        <div className="container text-center py-2 pt-4">
          <p>Copyright © Your Website 2021</p>
        </div>
      </footer>
    </>
  );
}

export default App;

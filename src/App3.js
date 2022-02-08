// import "./App3.css";
import { Nav, Navbar, Container } from "react-bootstrap";

function App() {
  return (
    <>
      <header>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand href="#home" className="text-light">
              Start Bootstrap
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto ">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#about">About</Nav.Link>
                <Nav.Link href="#contact">Contact</Nav.Link>
                <Nav.Link href="#blog">Blog</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
      <section className="py-4 bg-light border-bottom">
        <div className="container-fluid text-center py-4 my-4">
          <h1 className="fw-bold mt-4">Welcome to Blog Home!</h1>
          <p className="fw-light fs-5 pb-1">
            A Bootstrap 5 starter layout for your next blog homepage
          </p>
        </div>
      </section>
      <section></section>
      <section>
        <div className="container-md-fluid container-lg">
          <div className="row">
            <div className="col-md-12 col-lg-8 my-4">
              <div class="card">
                <img
                  src="https://dummyimage.com/850x350/dee2e6/6c757d.jpg"
                  class="card-img-top"
                  alt="..."
                ></img>
                <div class="card-body">
                  <p className=" m-0 text-secondary fs-6">January 1, 2021</p>
                  <h2 class="card-title">Featured Post Title</h2>
                  <p class="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a
                    laboriosam. Dicta expedita corporis animi vero voluptate
                    voluptatibus possimus, veniam magni quis!
                  </p>
                  <a href="readmore" className="btn btn-primary">
                    Read More →
                  </a>
                </div>
              </div>
              <div className="row pt-4 g-4">
                <div className="col-md-12 col-lg-6">
                  <div class="card">
                    <img
                      src="https://dummyimage.com/700x350/dee2e6/6c757d.jpg"
                      class="card-img-top"
                      alt="..."
                    ></img>
                    <div class="card-body">
                      <p className=" m-0 text-secondary fs-6">
                        January 1, 2021
                      </p>
                      <h5 class="card-title">Post Title</h5>
                      <p class="card-text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Reiciendis aliquid atque, nulla.
                      </p>
                      <a href="readmore" className="btn btn-primary">
                        Read More →
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 col-lg-6">
                  <div class="card">
                    <img
                      src="https://dummyimage.com/700x350/dee2e6/6c757d.jpg"
                      class="card-img-top"
                      alt="..."
                    ></img>
                    <div class="card-body">
                      <p className=" m-0 text-secondary fs-6">
                        January 1, 2021
                      </p>
                      <h5 class="card-title">Post Title</h5>
                      <p class="card-text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Reiciendis aliquid atque, nulla.
                      </p>
                      <a href="readmore" className="btn btn-primary">
                        Read More →
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 col-lg-6">
                  <div class="card">
                    <img
                      src="https://dummyimage.com/700x350/dee2e6/6c757d.jpg"
                      class="card-img-top"
                      alt="..."
                    ></img>
                    <div class="card-body">
                      <p className=" m-0 text-secondary fs-6">
                        January 1, 2021
                      </p>
                      <h5 class="card-title">Post Title</h5>
                      <p class="card-text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Reiciendis aliquid atque, nulla.
                      </p>
                      <a href="readmore" className="btn btn-primary">
                        Read More →
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 col-lg-6">
                  <div class="card">
                    <img
                      src="https://dummyimage.com/700x350/dee2e6/6c757d.jpg"
                      class="card-img-top"
                      alt="..."
                    ></img>
                    <div class="card-body">
                      <p className=" m-0 text-secondary fs-6">
                        January 1, 2021
                      </p>
                      <h5 class="card-title">Post Title</h5>
                      <p class="card-text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Reiciendis aliquid atque, nulla.
                      </p>
                      <a href="readmore" className="btn btn-primary">
                        Read More →
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-12 col-lg-4 my-md-0 my-lg-4">
              <div className="card text-dark">
                <div className="card-head bg-light px-3 py-2 border-bottom">
                  Search
                </div>
                <div className="card-body">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter search term..."
                    ></input>
                    <button className="btn btn-primary">Go!</button>
                  </div>
                </div>
              </div>
              <div className="card text-dark mt-4">
                <div className="card-head bg-light px-3 py-2 border-bottom">
                  Categories
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-6">
                      <a href="web"> Web design</a> <br />
                      <a href="web"> HTML</a> <br />
                      <a href="web"> FREEBIES</a>
                    </div>
                    <div className="col-6">
                      <a href="web"> JavaScript</a> <br />
                      <a href="web"> CSS</a> <br />
                      <a href="web"> Tutorials</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card text-dark mt-4">
                <div className="card-head bg-light px-3 py-2 border-bottom">
                  Side Widget
                </div>
                <div className="card-body">
                  <p>
                    You can put anything you want inside of these side widgets.
                    They are easy to use, and feature the Bootstrap 5 card
                    component!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer>
        <div className="container-fluid bg-dark py-4 text-light text-center">
          <p>Copyright © Your Website 2021</p>
        </div>
      </footer>
    </>
  );
}

export default App;

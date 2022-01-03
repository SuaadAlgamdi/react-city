import { useContext } from "react"
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap"
import { Link } from "react-router-dom"
import CitiesContext from "../utils/CitiesContext"

function NavbarItem() {
  const {logout}=useContext(CitiesContext)
  return (
    <>
      <Navbar bg="" expand="lg">
        <Container>

          <Link to="/" className="navbar-brand d-flex align-items-center mx-auto" width="10">
            <img
              src="https://th.bing.com/th/id/R.7338aae3d73e2260bf65d1c6a8829ca8?rik=Z0Euo%2fFYzZoiQw&pid=ImgRaw&r=0"
              width="80"
              height="40"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
            <Link className="nav-link"to="/cities"> City</Link>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <a className="nav-link" href="https://mt.gov.sa/Pages/default.aspx" target="_blank">
                Ministry Of Tourism
              </a>
              <NavDropdown title="Cities" id="basic-nav-dropdown">
                <Link className="dropdown-item" to="/AlBaha">
                  AlBaha
                </Link>

                <NavDropdown.Divider />
                <Link className="dropdown-item" to="/Jeddah">
                  Jeddah
                </Link>
                <NavDropdown.Divider />
                <Link className="dropdown-item" to="/ AlRiyadh">
                  Al Riyadh
                </Link>

                <NavDropdown.Divider />
                <Link className="dropdown-item" to="/Dammam">
                  Dammam
                </Link>
              </NavDropdown>
            </Nav>
            {localStorage.tokenCities ? (
              <Nav className="ms-auto">
                <Link className="nav-link" to="/profile">
                  Profile
                </Link>
                <Link className="nav-link" to="/"onClick={logout}>
                  Logout
                </Link>
              </Nav>
            ) : (
              <Nav className="ms-auto">
                <Link className="nav-link" to="/login">
                  Login
                </Link>
                <Link className="nav-link" to="/signup">
                  Sign Up
                </Link>
              </Nav>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default NavbarItem

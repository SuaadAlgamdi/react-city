import { useContext } from "react"
import { Col, Row, Container, Card } from "react-bootstrap"
import { Link } from "react-router-dom"
import CityItem from "../components/CityItem"
import CitiesContext from "../utils/CitiesContext"

function Profile() {
  const { profile } = useContext(CitiesContext)
  if (!profile) return <h1>Loading...</h1>

  return (
    <>
      <Container>
        <Row
          style={{
            backgroundColor: `rgba(3889,12,240, 0.3)`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Col md="4">
            <img variant="top" src={profile.avatar} width="100%" style={{ borderRadius: "10px", margin: "20px" }} />
          </Col>
          <Col>
            <h1>
              {profile.firstName} {profile.lastName}
            </h1>

            <p>{profile.email}</p>
          </Col>
        </Row>
        <Row className="mt-5">
          <h3 className="favoretCity">Favourite Cities</h3>
          {profile.likes.map(city => (
            <Col key={city._id}>
              <Card border="light" style={{ maxWidth: "200px" }}>
                <Link to={`/city/${city._id}`}>
                  <Card.Img variant="top" src={city.photo} height="220px" style={{ borderRadius: "10px" }} />
                </Link>
                <Card.Body>
                  <Link to={`/city/${city._id}`} className="text-black" style={{ textDecoration: "none" }}>
                    <Card.Title>{city.name}</Card.Title>
                  </Link>
                  <Card.Text className="text-muted">{city.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  )
}

export default Profile

import { useContext } from "react"
import { Card, Col, Row, Button, CardGroup } from "react-bootstrap"
import { Link } from "react-router-dom"
import CitiesContext from "../utils/CitiesContext"

function CityList(props) {
  const { listTitle } = props
  const { cities } = useContext(CitiesContext)
  return (
    <>
      <Row>
        <h4 className="mt-5 mb-4">{listTitle}</h4>
      </Row>
      <Row>
        {cities.map(city => (
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
    </>
  )
}

export default CityList

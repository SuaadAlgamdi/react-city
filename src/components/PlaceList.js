import { useContext } from "react"
import { Card, Col, Row, Button, CardGroup } from "react-bootstrap"
import { Link } from "react-router-dom"
import CitiesContext from "../utils/CitiesContext"

function PlaceList(props) {
  const { listTitle, type } = props
  const { places } = useContext(CitiesContext)
  const placesType = places.filter(place => place.type === type)
  return (
    <>
      <Row>
        <h4 className="mt-5 mb-4">{listTitle}</h4>
      </Row>
      <Row>
        {placesType.map(place => (
          <Col key={place._id}>
            <Card border="light" style={{ maxWidth: "200px" }}>
              <Link to={`/${type}/${place._id}`}>
                <Card.Img variant="top" src={place.logo} height="220px" style={{ borderRadius: "10px" }} />
              </Link>
              <Card.Body>
                <Link to={`/${type}/${place._id}`} className="text-black" style={{ textDecoration: "none" }}>
                  <Card.Title>{place.name}</Card.Title>
                </Link>
                <Card.Text className="text-muted">{place.description}</Card.Text>
                <Card.Text>{place.city.name}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  )
}

export default PlaceList

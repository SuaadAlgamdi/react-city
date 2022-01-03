import { Card, Col } from "react-bootstrap"
import { Link } from "react-router-dom"

function CityItem(props) {
  const { city } = props
  return (
    <Col>
      <Card border="light" style={{ maxWidth: "200px" }}>
        <Link to={`/city/${city._id}`}>
          <Card.Img variant="top" src={city.poster} height="220px" style={{ borderRadius: "10px" }} />
        </Link>
        <Card.Body>
          <Link to={`/city/${city._id}`} className="text-black" style={{ textDecoration: "none" }}>
            <Card.Title>{city.title}</Card.Title>
          </Link>
          <Card.Text className="text-muted">{city.description}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default CityItem

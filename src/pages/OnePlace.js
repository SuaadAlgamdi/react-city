import { CommentsDisabled } from "@mui/icons-material"
import { useContext } from "react"
import { Button, Card, Col, Image, Row } from "react-bootstrap"
import { Link, useParams } from "react-router-dom"
import AddComment from "../components/AddComments"
import CitiesContext from "../utils/CitiesContext"

function OnePlace() {
  const { restaurantId, museumId, eventId, hotelId, mallId, touristPlaceId } = useParams()
  const { restaurants, museums, malls, events, hotels, touristPlaces, profile, deleteComment } =
    useContext(CitiesContext)

  if (
    restaurants?.length === 0 &&
    museums?.length === 0 &&
    hotels?.length === 0 &&
    malls?.length === 0 &&
    events?.length === 0 &&
    touristPlaces?.length === 0
  )
    return <h1>Loading...</h1>
  let place
  if (restaurantId) place = restaurants.find(restaurant => restaurant._id === restaurantId)
  else if (museumId) place = museums.find(museum => museum._id === museumId)
  else if (eventId) place = events.find(event => event._id === eventId)
  else if (mallId) place = malls.find(mall => mall._id === mallId)
  else if (touristPlaceId) place = touristPlaces.find(touristPlace => touristPlace._id === touristPlaceId)
  else if (hotelId) place = hotels.find(hotel => hotel._id === hotelId)

  if (!place) return <h1>Loading...</h1>
  if (!profile) return <h1>Loading...</h1>
  console.log(place)
  return (
    <>
      <Row
        style={{
          backgroundImage: `linear-gradient(rgba(2,25,160, 0.5), rgba(255,255,255, 0.3)),  url("${place.logo}")`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          display: "flex",
          alignItems: "center",
          color: "white",
          minHeight: 400,
        }}
      >
        <Col md="4">
          <img variant="top" src={place.logo} width="100%" style={{ borderRadius: "10px", margin: "20px" }} />
        </Col>
        <Col md={{ offset: 1 }}>
          <h1>{place.name}</h1>
        </Col>
        <Col md={{ offset: 1 }}>
          <h3>{place.description}</h3>
        </Col>
      </Row>

      <Row className="mt-5">
        <h3>Products</h3>
        {/* -------------------------------------------------هنا عرضت البرودكت داخل البليس-------------------------- */}
        {place.products.map(product => (
          <>
            {/* <p>{product.photo}</p> */}

            <Col md="2">
              <Card border="light" style={{ maxWidth: "200px" }}>
                <Card.Title>{product.name}</Card.Title>

                <Card.Img
                  variant="top"
                  src={product.logo}
                  height="220px"
                  style={{ borderRadius: "10px", objectFit: "cover" }}
                />
                <Card.Body>
                  <Card.Text> {product.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </>
        ))}
      </Row>

      {/* ----------------------------------------comments----------------------- */}
      <Row>
        <h3>Comments</h3>
        {place.comments.map(comment => (
          <Card style={{ margin: 20, maxWidth: 1100 }}>
            <Row>
              <Row style={{ display: "flex", alignItems: "center" }}>
                <Col md="1">
                  <Image src={comment.owner.avatar} width="80px" roundedCircle />
                </Col>
                <Col>
                  {comment.owner.firstName} {comment.owner.lastName}
                </Col>
              </Row>
              <Row>
                <Col md="10">{comment.comment}</Col>
                {profile._id == comment.owner._id ? (
                  <Col>
                    <Button variant="danger" onClick={() => deleteComment(place._id, comment._id)}>
                      delete
                    </Button>
                  </Col>
                ) : null}
              </Row>
            </Row>
          </Card>
        ))}
      </Row>
      <Row>
        <AddComment placeId={place._id} />
      </Row>
    </>
  )
}

export default OnePlace

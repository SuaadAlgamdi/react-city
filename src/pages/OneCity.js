import { Restaurant } from "@mui/icons-material"
import { useContext } from "react"
import { Button, Card, Col, Image, Row } from "react-bootstrap"
import { useParams } from "react-router"
import { Link } from "react-router-dom"
import CitiesContext from "../utils/CitiesContext"
import { MdFavorite, MdOutlineFavoriteBorder } from "react-icons/md"

function OneCity() {
  const { cityId } = useParams()
  const { cities, likeCity } = useContext(CitiesContext)

  if (cities.length === 0) return <h1>Loading...</h1>

  const city = cities.find(city => city._id === cityId)
  if (!city) return <h1>Loading...</h1>

  let liked = false
  if (city) liked = city.likes.includes(city._id)
  console.log(city)

  return (
    <>
      <Row
        style={{
          backgroundImage: `linear-gradient(rgba(2,25,160, 0.5), rgba(255,255,255, 0.3)),  url("${city.photo}")`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          display: "flex",
          alignItems: "center",
          color: "white",
        }}
      >
        <Col md="4">
          <img variant="top" src={city.photo} width="100%" style={{ borderRadius: "10px", margin: "20px" }} />
        </Col>
        <Col md={{ offset: 1 }}>
          <h1>{city.name}</h1>
          <div className="mb-2">
            {city.restaurants.map(restaurant => (
              <span>{restaurant.name}</span>
            ))}
          </div>
          <h3>Overview</h3>
          <p>{city.description}</p>{" "}
          <Button variant="dark" className="ms-3" onClick={() => likeCity(city._id)}>
            {liked ? <MdFavorite /> : <MdOutlineFavoriteBorder />}
          </Button>
          {/* <p>
            <Link to={`/place/${city.restaurant._id}`}>
              <p>{city.restaurants.description} </p>
            </Link> 
           </p>  */}
        </Col>
      </Row>
      <Row className="mt-5">
        {/* ---------------------------restorant----------------------- */}
        <h3>Restaurants</h3>
        {city.restaurants.map(restaurant => (
          <Col md="2">
            <Card border="light" style={{ maxWidth: "200px" }}>
              <Link to={`/Restaurant/${restaurant._id}`}>
                <Card.Img
                  variant="top"
                  src={restaurant.logo}
                  height="220px"
                  style={{ borderRadius: "10px", objectFit: "cover" }}
                />
              </Link>
              <Card.Body>
                <Link to={`/Restaurant/${restaurant._id}`} className="text-black" style={{ textDecoration: "none" }}>
                  <Card.Title>{restaurant.name}</Card.Title>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Row className="mt-5">
        {/* -------------------------------------museums--------------------------------- */}
        <h3>Museums</h3>
        {city.museums.map(museum => (
          <Col md="2">
            <Card border="light" style={{ maxWidth: "200px" }}>
              <Link to={`/Museum/${museum._id}`}>
                <Card.Img
                  variant="top"
                  src={museum.logo}
                  height="220px"
                  style={{ borderRadius: "10px", objectFit: "cover" }}
                />
              </Link>
              <Card.Body>
                <Link to={`/Museum/${museum._id}`} className="text-black" style={{ textDecoration: "none" }}>
                  <Card.Title>{museum.name}</Card.Title>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Row className="mt-5">
        {/* -------------------------------------events--------------------------------- */}
        <h3>Events</h3>
        {city.events.map(event => (
          <Col md="2">
            <Card border="light" style={{ maxWidth: "200px" }}>
              <Link to={`/Event/${event._id}`}>
                <Card.Img
                  variant="top"
                  src={event.logo}
                  height="220px"
                  style={{ borderRadius: "10px", objectFit: "cover" }}
                />
              </Link>
              <Card.Body>
                <Link to={`/Event/${event._id}`} className="text-black" style={{ textDecoration: "none" }}>
                  <Card.Title>{event.name}</Card.Title>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      {/* ---------------------------------hotal---------------------------------------------- */}
      <Row className="mt-5">
        <h3>Hotels</h3>
        {city.hotels.map(hotel => (
          <Col md="2">
            <Card border="light" style={{ maxWidth: "200px" }}>
              <Link to={`/Hotel/${hotel._id}`}>
                <Card.Img
                  variant="top"
                  src={hotel.logo}
                  height="220px"
                  style={{ borderRadius: "10px", objectFit: "cover" }}
                />
              </Link>
              <Card.Body>
                <Link to={`/Hotel/${hotel._id}`} className="text-black" style={{ textDecoration: "none" }}>
                  <Card.Title>{hotel.name}</Card.Title>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <Row className="mt-5">
        {/* -------------------------------------torestPlaces--------------------------------- */}
        <h3> TouristPlaces</h3>
        {city.touristPlaces.map(touristPlace => (
          <Col md="2">
            <Card border="light" style={{ maxWidth: "200px" }}>
              <Link to={`/TouristPlace/${touristPlace._id}`}>
                <Card.Img
                  variant="top"
                  src={touristPlace.logo}
                  height="220px"
                  style={{ borderRadius: "10px", objectFit: "cover" }}
                />
              </Link>
              <Card.Body>
                <Link
                  to={`/TouristPlace/${touristPlace._id}`}
                  className="text-black"
                  style={{ textDecoration: "none" }}
                >
                  <Card.Title>{touristPlace.name}</Card.Title>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {localStorage.tokenCitys ? (
        <>
          <Row className="mt-5">
            <h3>Comments</h3>

            {city.comments.map(comment => (
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
                    <Col md={{ offset: 1 }}>{comment.comment}</Col>
                  </Row>
                </Row>
              </Card>
            ))}
          </Row>
        </>
      ) : null}
    </>
  )
}

export default OneCity


import { Col, Form, Row,Button } from "react-bootstrap";
// import video from "../assets/video.mp4"

import desirt from "../assets/desirt.jpg"

function Showcase() {
    return (
     <Row>
          <Col
            style={{
              backgroundImage: `url("${desirt}")`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              height: 700,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <h1 className="text-white mb-3">Welcome</h1>
            <h2 className="text-white"></h2>
            <Form className="mt-5">
              <Row>
                <Col md="8">
                  <Form.Group>
                    <Form.Control
                      name="citySearch"
                      list="citySearch"
                      type="search"
                      placeholder="Search for a city, place"
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Button variant="primary" type="submit">
                    Search
                  </Button>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
    )
}
    
export default Showcase;
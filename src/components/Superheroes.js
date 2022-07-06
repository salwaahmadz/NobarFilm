import { Card, Container, Row, Col, Image } from "react-bootstrap"
import antmanImage from "../assets/images/superhero/antman.jpg"
import avengerImage from "../assets/images/superhero/avenger.jpg"
import batmanImage from "../assets/images/superhero/batman.jpg"
import robinhoodImage from "../assets/images/superhero/robinhood.jpg"
import spidermanImage from "../assets/images/superhero/spiderman-cover.jpg"
import supermanImage from "../assets/images/superhero/superman.jpg"

const Superhero = () => {
    return(
        <div>
            <Container>
                <br/>
                <h1 className="text-white text-center">SUPERHERO MOVIES</h1>
                <br/>
                <Row>
                    <Col md={4}  className="movieWrapper" id="superhero">
                        <Card className="movieImage">
                            <Image src= {antmanImage} alt="Ant-Man Movies" className="images"/>
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white ">
                                <Card.Title className="text-center">Ant-Man</Card.Title>
                                <Card.Text className="text-left">This is a wider card with supporting text below as a natural lead-in
                                to additional content.
                                </Card.Text>
                                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                            </div>
                            </div>
                        </Card>
                    </Col>

                    <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                            <Image src= {avengerImage} alt="Avenger Movies" className="images"/>
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white ">
                                <Card.Title className="text-center">Avengers: Endgame</Card.Title>
                                <Card.Text className="text-left">This is a wider card with supporting text below as a natural lead-in
                                to additional content.
                                </Card.Text>
                                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                            </div>
                            </div>
                        </Card>
                    </Col>

                    <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                            <Image src= {batmanImage} alt="Batman Movies" className="images"/>
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white ">
                                <Card.Title className="text-center">The Dark Knight</Card.Title>
                                <Card.Text className="text-left">This is a wider card with supporting text below as a natural lead-in
                                to additional content.
                                </Card.Text>
                                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                            </div>
                            </div>
                        </Card>
                    </Col>

                    <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                            <Image src= {robinhoodImage} alt="RobinHood Movies" className="images"/>
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white ">
                                <Card.Title className="text-center">Robin Hood</Card.Title>
                                <Card.Text className="text-left">This is a wider card with supporting text below as a natural lead-in
                                to additional content.
                                </Card.Text>
                                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                            </div>
                            </div>
                        </Card>
                    </Col>

                    <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                            <Image src= {spidermanImage} alt="Spiderman Movies" className="images"/>
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white ">
                                <Card.Title className="text-center">Spiderman: No Way Home</Card.Title>
                                <Card.Text className="text-left">This is a wider card with supporting text below as a natural lead-in
                                to additional content.
                                </Card.Text>
                                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                            </div>
                            </div>
                        </Card>
                    </Col>

                    <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                            <Image src= {supermanImage} alt="Superman Movies" className="images"/>
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white ">
                                <Card.Title className="text-center">Man Of Steel</Card.Title>
                                <Card.Text className="text-left">This is a wider card with supporting text below as a natural lead-in
                                to additional content.
                                </Card.Text>
                                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                            </div>
                            </div>
                        </Card>
                    </Col>
                </Row>
                <br/>
                <br/>
            </Container>
        </div>
    )
}

export default Superhero
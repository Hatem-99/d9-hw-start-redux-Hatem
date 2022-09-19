import { Container, Row, Col, Button, ListGroup } from "react-bootstrap";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    favorites: state.companys.favorites,
  };
};

const Favorites = ({ favorites }) => {
  console.log(favorites);
  return (
    <Container>
      <h1>Favorites Companys</h1>
      <Row>
        <Col>
          <ListGroup>
            { favorites.map((company, i) => {
               return <ListGroup.Item key={i}>{company[i]}</ListGroup.Item>
            })
            }
          
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default connect(mapStateToProps)(Favorites);

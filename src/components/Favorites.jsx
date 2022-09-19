import { Container, Row, Col, ListGroup, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { FaTrash } from "react-icons/fa";

const mapStateToProps = (state) => {
  return {
    favorites: state.companys.Favorites,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    removeFromFavorites: (indexToRemove) => {
      dispatch({
        type: "REMOVE_FROM_COMPANYS",
        payload: indexToRemove,
      });
    },
  };
};

const Favorites = ({ favorites, removeFromFavorites }) => {
  return (
    <Container>
      <h1>Favorites Companys</h1>
      <Row>
        <Col>
          <ListGroup>
            {favorites.map((company, i) => {
              return (
                <ListGroup.Item className="d-flex justify-content-between" key={i}>
                  {company}{" "}
                  <Button
                    variant="danger"
                    onClick={() => {
                      removeFromFavorites(i);
                    }}
                  >
                    <FaTrash />
                  </Button>
                </ListGroup.Item>
              );
            })}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);

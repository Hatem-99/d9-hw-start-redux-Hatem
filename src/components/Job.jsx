import { Row, Col } from "react-bootstrap";
import { Link , useNavigate} from "react-router-dom";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return {};
};


const mapDispatchToProps = dispatch => {

  return {
    addToFavorites: companyName => {
      dispatch({
        type: "ADD_TO_FAVORITES",
      
        payload: companyName,
      });
    },
  };
};




const Job = ({ data }) => { 
  
  const navigate = useNavigate()
  
  return(
  <Row
    className="mx-0 mt-3 p-3"
    style={{ border: "1px solid #00000033", borderRadius: 4 }}
  >
    <Col xs={3}>
      <Link to={`/${data.company_name}`}>{data.company_name}</Link>
    </Col>
    <Col xs={6}>
      <a href={data.url} target="_blank" rel="noreferrer">
        {data.title}
      </a>
    </Col>
    <Col xs={3}>
    <button onClick={() => {navigate('/favourites')}}> add to favorites   <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-bookmark-heart-fill"
          viewBox="0 0 16 16"
        >
          <path d="M2 15.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v13.5zM8 4.41c1.387-1.425 4.854 1.07 0 4.277C3.146 5.48 6.613 2.986 8 4.412z" />
        </svg></button>
    </Col>
  </Row>
);
}
export default connect(mapStateToProps,mapDispatchToProps)(Job);

import { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Job from './Job'
import { useParams } from 'react-router-dom'
import {connect} from 'react-redux'


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


const CompanySearchResults = () => {
  const [jobs, setJobs] = useState([])
  const params = useParams()

  const baseEndpoint = 'https://strive-jobs-api.herokuapp.com/jobs?company='

  useEffect(() => {
    getJobs()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const getJobs = async () => {
    try {
      const response = await fetch(baseEndpoint + params.companyName)
      if (response.ok) {
        const { data } = await response.json()
        setJobs(data)
        
      } else {
        alert('Error fetching results')
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Container>
      <Row>
        <Col>
          {jobs.map((jobData) => (
            <Job key={jobData._id} data={jobData} />
          ))}
        </Col>
      </Row>
    </Container>
  )
}

export default connect(mapStateToProps,mapDispatchToProps)(CompanySearchResults)

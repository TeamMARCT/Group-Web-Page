import React, { Fragment } from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import profiles from '../teamProfiles'

const HomeScreen = () => {
  interface ProfileInterface {
    id: number,
    name: string,
    image: string,
    description: string
  }

  return (
    <Fragment>
      <h1>Our Team</h1>
      <Container style={{maxWidth: '720px'}}>
        <Row>
          {/* Looping through our profiles and creating a list/array */}
          {profiles.map((profile) => (
            <Col sm={12} md={6} lg={4} xl={3}> 
              <h3>{profile.name}</h3>
            </Col>
          ))}
        </Row>
      </Container>
    </Fragment>
  )
}

export default HomeScreen
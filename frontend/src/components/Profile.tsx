import React from 'react'
import { Card } from 'react-bootstrap'

// Makes it clear that this is a Functional Component
const Profile: React.FC<{profile: {name: string, image: string, description: string, linkedin: string, github: string}}> = ({profile}) => {
  return (
    <Card className='my-3 p-3 rounded'>
      <a href={`${profile.linkedin}`}>
        <Card.Img src={profile.image} variant='top'/>
      </a>

      <Card.Body>
      <a href={`${profile.linkedin}`}>
        <Card.Title as='div'> <strong>{profile.name}</strong> </Card.Title>
      </a>

      <Card.Text as='div'>
        <p className="my-2">{profile.description}</p>
      </Card.Text>

      
      <Card.Text as='div'>
        <p className="my-2"><strong>Profile Links</strong></p>
        <a href={`${profile.linkedin}`}>
          <i className="fa-brands fa-linkedin"></i>
          {' '} LinkedIn
        </a>
        <br/>
        <a href={`${profile.github}`}>
          <i className="fa-brands fa-github"></i>
          {' '} Github
        </a>
      </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Profile
import React from 'react'
import { Container, Segment, Header, Image, Button, Icon } from 'semantic-ui-react'
import image from '../../../src/logo.png'

export default function HomePage({ history }) {
    return (
        <Segment inverted textAlign='center' vertical className='masthead'>
            <Container>
                <Header as='h1' inverted>
                    <Image size='massive' src={image} style={{ marginBottom: 12 }} />
                    Re-vents
                </Header>
                <Button onClick={() => history.push('/events')} size='huge' inverted>
                    Get Started
                    <Icon name='right arrow' inverted />
                </Button>
            </Container>
        </Segment>
    )
}
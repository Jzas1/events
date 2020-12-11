import React from 'react'
import { Route } from 'react-router-dom'
import { Container } from 'semantic-ui-react'
import EventDashboard from '../../features/events/eventDashboard/EventDashBoard'
import HomePage from '../../features/home/HomePage'
import NavBar from '../../features/nav/NavBar'
import EventForm from '../../features/eventForm/EventForm'
import EventDetailedPage from '../../features/events/eventDetailed/EventDetailedPage'

export default function App() {

  return (
    <>
      <Route exact path='/' component={HomePage} />
      <Route path={'/(.+)'} render={() => (
        <>
          <NavBar />
          <Container className='main'>
            <Route exact path='/events' component={EventDashboard} />
            <Route path='/events/:id' component={EventDetailedPage} />
            <Route path={['/createEvent', '/manage/:id']} component={EventForm} />
          </Container>
        </>
      )} />

    </>
  )

}




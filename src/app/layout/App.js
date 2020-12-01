import React, {Fragment , useState} from 'react'
import './styles.css';
import EventDashBoard from '../../features/events/eventDashBoard/EventDashBoard';
import NavBar from '../../features/nav/NavBar'
import { Container } from 'semantic-ui-react'

function App() {
  const [formOpen, setFormOpen] = useState(false)

  return (
    <Fragment>
        <NavBar setFormOpen={setFormOpen}/>
        <Container className='main'>
        <EventDashBoard formOpen={formOpen} setFormOpen={setFormOpen}/>
        </Container>
    </Fragment>
  );
}

export default App;

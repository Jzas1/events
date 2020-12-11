import React, { useState } from 'react'
import { Button, Container, Menu } from 'semantic-ui-react'
import image from '../../../src/logo.png'
import { NavLink, useHistory } from 'react-router-dom'
import SignedOutMenu from './SignedOutMenu'
import SignedInMenu from './SignedInMenu'

export default function NavBar({ setFormOpen }) {
    const history = useHistory()
    const [authenticated, setAuthenticated] = useState(false)

    function handleSignedOut() {
        setAuthenticated(false)
        history.push('/')
    }


    return (
        <Menu inverted fixed='top'>
            <Container>
                <Menu.Item as={NavLink} exact to='/' header>
                    <img src={image} alt="logo" style={{ marginRight: 15 }} />
                    Re-vents
                </Menu.Item>
                <Menu.Item as={NavLink} to='/events' name='Events' />
                {authenticated &&
                    <Menu.Item as={NavLink} to='/createEvent' >
                        <Button onClick={() => setFormOpen(true)} positive inverted content='Create Event' />
                    </Menu.Item>}
                {authenticated ? <SignedInMenu signOut={handleSignedOut} /> :
                    <SignedOutMenu setAuthenticated={setAuthenticated} />
                }
            </Container>
        </Menu>
    )
}
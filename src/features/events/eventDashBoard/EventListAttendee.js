import React from 'react'
import { List, Image } from 'semantic-ui-react'
import image from '../../../user.png'

function EventListAttendee({ attendee }) {
    return (
        <List.Item>
            <Image size='mini' circular src={attendee.photoURL} />
        </List.Item>
    )
}

export default EventListAttendee
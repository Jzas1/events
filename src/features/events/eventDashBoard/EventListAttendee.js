import React from 'react'
import { List, Image } from 'semantic-ui-react'
import user from '../../../user.png'

export default function EventListAttednee({attendee}){
    return (
        <List.Item>
            <Image size='mini' circular src={attendee.photoURL} />
        </List.Item>
    )
}
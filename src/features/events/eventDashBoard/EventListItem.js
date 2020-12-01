import React from 'react'
import { Segment } from 'semantic-ui-react'
import { Item, Icon, List, Button } from 'semantic-ui-react'
import EventListAttednee from './EventListAttendee'

export default function EventListItem({event}){
    return (
        <Segment.Group>
            <Segment>
                <Item.Group>
                    <Item>
                        <Item.Image size='tiny' circular src={event.hostPhotoURL} />
                        <Item.Content>
                            <Item.Header content={event.title}/>
                            <Item.Description>
                                Hosted by {event.hostedBy}
                            </Item.Description>
                        </Item.Content>
                    </Item>
                </Item.Group>
            </Segment>
            <Segment>
                <span>
                    <Icon name='clock' /> {event.date}
                    <Icon name='marker' /> {event.venue}
                 </span>
            </Segment>
            <Segment secondary>
                <List horizontal>
                    {event.attendees.map(attendee => (
                        <EventListAttednee key={attendee} attendee={attendee}/>

                    ))}
                </List>
            </Segment>
            <Segment clearing>
                <div>{}</div>
                <Button color="teal" floated='right' content="view"  />
            </Segment>
        </Segment.Group>
        )
}
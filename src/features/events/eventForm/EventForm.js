import React from 'react'
import { Form, Segment, Header, Button } from 'semantic-ui-react'

export default function EventForm ({setFormOpen}){
    return (
        <Segment clearing>
            <Form>
                <Header content='Create new event'/>
                    <Form.Field>
                        <input type="text" placeholder='Category'/>
                    </Form.Field>
                    <Form.Field>
                        <input type="text" placeholder='Description'/>
                    </Form.Field>
                    <Form.Field>
                        <input type="text" placeholder='City'/>
                    </Form.Field>
                    <Form.Field>
                        <input type="text" placeholder='Venue'/>
                    </Form.Field>
                    <Form.Field>
                        <input type="date" placeholder='Date'/>
                    </Form.Field>
                <Button type='submit' floated='right' positive content='Submit'  />
                <Button 
                onClick={() => setFormOpen(false)} 
                type='submit' 
                floated='right' 
                content='Cancel'  />
            </Form>
        </Segment>
    )
}
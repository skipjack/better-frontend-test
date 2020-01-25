import React, { useState } from 'react'
import { useWindowSize } from 'react-use'
import Wrapper from './wrapper.jsx'
import Container from './container.jsx'
import Message from './message.jsx'
import Form from './form.jsx'

// @tmp
import data from '../data.json'

const App = props => {
    const [user, setUser] = useState(data.users.find(obj => obj.id === 4))
    const [messages, setMessages] = useState(data.posts)
    const {width} = useWindowSize()

    return (
        <React.Fragment>
            <Wrapper>
                <Container>
                    {messages.map(message => {
                        const author = data.users.find(obj => message.user === obj.id)

                        return (
                            <Message
                                key={ message.id }
                                alt={ message.user === user.id }
                                // image={}
                                author={ author }
                                timestamp={ message.ts }
                                content={ message.message }
                                width={ width }
                            />
                        )
                    })}
                </Container>
                <Form
                    onSubmit={newMessage => {
                        // @todo post to server
                        setMessages([
                            ...messages,
                            {
                                id: messages.length,
                                user: user.id,
                                ts: Math.floor(Date.now() / 1000),
                                message: newMessage
                            }
                        ])
                    }}
                />
            </Wrapper>
        </React.Fragment>
    )
}

export default App
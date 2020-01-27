import React, { useState, useRef } from 'react'
import { useWindowSize } from 'react-use'
import Wrapper from './wrapper.jsx'
import Container from './container.jsx'
import Message from './message.jsx'
import Form from './form.jsx'

/**
 * Displays a chat client based on the given posts and users
 * 
 * @param  {array}  props.users - A list of user resources
 * @param  {array}  props.posts - A list of post resources
 * @return {object}             - React markup
 */
const App = ({
    users = [],
    posts = []
}) => {
    const [user, setUser] = useState(users.find(obj => obj.id === 4))
    const [messages, setMessages] = useState(posts)
    const {width} = useWindowSize()
    const container = useRef(null)

    return (
        <React.Fragment>
            <Wrapper>
                <Container ref={ container }>
                    {messages.map(message => {
                        const author = users.find(obj => message.user === obj.id)

                        return (
                            <Message
                                key={ message.id }
                                alt={ message.user === user.id }
                                image={ `/images/${author.username}.jpg` }
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
                        const message = {
                            id: messages.length,
                            user: user.id,
                            ts: Math.floor(Date.now() / 1000),
                            message: newMessage
                        }

                        fetch('/posts', {
                            method: 'POST',
                            body: JSON.stringify(message),
                            headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json'
                            }

                        }).then(response => {
                            setMessages([
                                ...messages,
                                message
                            ])

                            setTimeout(() => {
                                const { scrollHeight } = container.current
                                
                                container.current.scrollTop = scrollHeight
                            })

                        }).catch(error => {
                            alert('An error occurred.')
                            console.error(error)
                        })
                    }}
                />
            </Wrapper>
        </React.Fragment>
    )
}

export default App
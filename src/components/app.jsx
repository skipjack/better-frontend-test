import React from 'react'
import Message from './message.jsx'
import Form from './form.jsx'
import { colors } from '../utils.js'

const App = props => (
    <React.Fragment>
        <style>{`
            body { margin: 0; }
            body * { box-sizing: border-box; }
            input::placeholder { color: ${colors.grey}; }
        `}</style>
        <main
            style={{
                fontFamily: 'Roboto, sans-serif',
                display: 'flex',
                flexDirection: 'column',
                height: '100vh',
                maxWidth: 960,
                margin: '0 auto'
            }}
        >
            <div
                style={{
                    flex: '1 1 auto',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    padding: '0 24px'
                }}
            >
                <Message />
                <Message />
                <Message />
                <Message />
                <Message alt />
            </div>
            <Form
                onSubmit={ console.log }
            />
        </main>
    </React.Fragment>
)

export default App
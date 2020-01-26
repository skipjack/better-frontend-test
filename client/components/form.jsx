import React, { useState } from 'react'
import PropTypes from 'prop-types'
import SendIcon from './send.jsx'
import { colors } from '../utils.js'

/**
 * Display a small submission form for new messages
 * 
 * @param  {function} props.onSubmit - Callback fired with the message content
 * @return {object}                  - React markup
 */
const Form = ({
    onSubmit
}) => {
    const [message, setMessage] = useState('')
    const maxLength = 140

    return (
        <form
            style={{
                position: 'relative',
                flex: '0 0 auto',
                display: 'flex',
                alignItems: 'center',
                marginBottom: 0,
                borderTop: `1px solid ${colors.green}`
            }}
            onSubmit={ e => {
                e.preventDefault()
                onSubmit(message)
                setMessage('')
            }}
        >
            <span
                style={{
                    paddingLeft: 8,
                    marginRight: 8,
                    width: 30,
                    fontSize: 12,
                    color: colors.grey
                }}
            >
                { maxLength - message.length }
            </span>
            <input
                value={ message }
                placeholder="what's happening?"
                maxLength={ maxLength }
                onChange={ e => setMessage(e.target.value) }
                style={{
                    flex: '1 1 auto',
                    padding: '16px 0',
                    fontFamily: 'inherit',
                    fontSize: 14,
                    border: 'none',
                    outline: 'none'
                }}
            />
            <button
                type="submit"
                disabled={ !message.length }
                style={{
                    flex: '0 0 auto',
                    marginTop: 2,
                    background: 'none',
                    border: 'none',
                    outline: 'none',
                    color: message.length ? colors.green : colors.grey,
                    transition: 'color 250ms'
                }}
            >
                <SendIcon />
            </button>
        </form>
    )
}

Form.propTypes = {
    onSubmit: PropTypes.func
}

export default Form
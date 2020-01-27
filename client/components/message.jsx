import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Card from './card.jsx'
import Calendar from './calendar.jsx'
import Hypertext from './hypertext.jsx'
import { colors, timeAgo, getFormattedDate } from '../utils.js'

/**
 * Display a chat message and some meta data
 * 
 * @param  {boolean} props.alt       - Reverse the color scheme and position
 * @param  {string}  props.image     - URL of an avatar
 * @param  {object}  props.author    - An object describing the author
 * @param  {number}  props.timestamp - Epoch timestamp representing when the message was sent
 * @param  {string}  props.content   - Body of the message
 * @param  {number}  props.width     - Width of the current viewport
 * @return {object}                  - React markup
 */
const Message = ({
    alt = false,
    image,
    author,
    timestamp,
    content,
    width
}) => {
    const [ flipped, setFlipped ] = useState(false)

    return (
        <article
            style={{
                display: 'flex',
                width: '100%',
                maxWidth: 560,
                marginBottom: 16,
                marginLeft: alt ? 'auto' : 0,
                overflow: 'hidden'
            }}
        >
            <img
                src={ image }
                width={ width < 720 ? 40 : 50 }
                height={ width < 720 ? 40 : 50 }
                style={{
                    order: alt ? 1 : 0,
                    flex: '0 0 auto',
                    borderRadius: '100%',
                    overflow: 'hidden',
                    background: colors.lightgrey
                }}
            />
            <section
                style={{
                    flex: '1 1 auto',
                    padding: '0 12px',
                    overflow: 'hidden'
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        fontSize: 12,
                        marginBottom: 4,
                        padding: '0 6px',
                        color: colors.purple
                    }}
                >
                    <span
                        style={{
                            order: alt ? 2 : 0,
                            display: alt ? 'none' : null
                        }}
                    >
                        { author.real_name }
                        { width > 720 ? `- @${author.username}` : null }
                    </span>
                    <span
                        style={{
                            flex: '1 1 auto',
                            order: 1
                        }}
                    />
                    <span style={{ order: alt ? 0 : 2 }}>
                        { timeAgo(timestamp) }
                    </span>
                </div>
                <Card
                    alt={ alt }
                    flipped={ flipped }
                    onTouchEnd={ e => setFlipped(!flipped) }
                    onMouseOver={ e => setFlipped(true) }
                    onMouseOut={ e => setFlipped(false) }
                    back={(
                        <React.Fragment>
                            <Calendar />&nbsp;
                            active since&nbsp;
                            { 
                                getFormattedDate(
                                    new Date(author.active_since * 1000),
                                    null,
                                    false,
                                    true
                                )
                            }
                        </React.Fragment>
                    )}
                >
                    <Hypertext>
                        { content }
                    </Hypertext>
                </Card>
            </section>
        </article>
    )
}

Message.propTypes = {
    alt: PropTypes.bool,
    image: PropTypes.string,
    author: PropTypes.object.isRequired,
    timestamp: PropTypes.number.isRequired,
    content: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired
}

export default Message
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useSpring, animated } from 'react-spring'
import { colors } from '../utils.js'
import Calendar from './calendar.jsx'


const Message = ({
    alt = false,
    image = 'https://images.unsplash.com/profile-fb-1527368999-01bec71421e9.jpg?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128',
    author,
    timestamp = 1337774582,
    content = 'Message...'
}) => {
    const [ flipped, setFlipped ] = useState(false)
    const { transform, opacity } = useSpring({
        opacity: flipped ? 1 : 0,
        transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
        config: { mass: 5, tension: 500, friction: 80 }
    })

    return (
        <article
            style={{
                display: 'flex',
                width: '100%',
                maxWidth: 560,
                marginBottom: 16,
                alignSelf: alt ? 'flex-end' : 'auto'
            }}
        >
            <img
                src={ image }
                width={ 50 }
                height={ 50 }
                style={{
                    order: alt ? 1 : 0,
                    flex: '0 0 auto',
                    [alt ? 'marginLeft' : 'marginRight']: 12,
                    borderRadius: '100%',
                    overflow: 'hidden',
                    background: colors.lightgrey
                }}
            />
            <section
                style={{
                    flex: '1 1 auto'
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
                        John Doe - @jdoe
                    </span>
                    <span
                        style={{
                            flex: '1 1 auto',
                            order: 1
                        }}
                    />
                    <span style={{ order: alt ? 0 : 2 }}>
                        timeAgo
                    </span>
                </div>
                <div
                    onTouchEnd={ e => setFlipped(!flipped) }
                    onMouseOver={ e => setFlipped(true) }
                    onMouseOut={ e => setFlipped(false) }
                    style={{
                        position: 'relative',
                        color: alt || flipped ? 'white' : colors.purple
                    }}
                >
                    <animated.div
                        style={{
                            position: 'relative',
                            width: '100%',
                            fontSize: 14,
                            padding: 16,
                            borderRadius: 8,
                            lineHeight: 1.5,
                            background: alt ? colors.green : colors.lightgrey,
                            opacity: opacity.interpolate(o => 1 - o),
                            transform
                        }}
                    >
                        { content }
                    </animated.div>
                    <animated.div
                        style={{
                            position: 'absolute',
                            display: 'flex',
                            width: '100%',
                            height: '100%',
                            top: 0,
                            left: 0,
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: 12.8,
                            borderRadius: 8,
                            background: colors.purple,
                            opacity,
                            transform: transform.interpolate(t => `${t} rotateX(180deg)`)
                        }}
                    >
                        <Calendar />&nbsp;
                        active since July 13th, 2017
                    </animated.div>
                </div>
            </section>
        </article>
    )
}

Message.propTypes = {
    alt: PropTypes.bool,
    image: PropTypes.string,
    author: PropTypes.string,
    timestamp: PropTypes.number,
    content: PropTypes.string
}

export default Message
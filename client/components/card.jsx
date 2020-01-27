import React from 'react'
import PropTypes from 'prop-types'
import { useSpring, animated } from 'react-spring'
import { colors } from '../utils.js'

/**
 * Display a flippable card with content on front and back
 * 
 * @param  {boolean} props.alt      - Reverse the color scheme
 * @param  {boolean} props.flipped  - Indicate back side should be shown
 * @param  {number}  props.width    - Width of the current viewport
 * @param  {object}  props.back     - Content for the back side of the card
 * @param  {object}  props.children - Primary content shown on the front side
 * @return {object}                 - React markup
 */
const Card = ({
    alt,
    flipped,
    width,
    back,
    children,
    ...props
}) => {
    const { transform, opacity } = useSpring({
        opacity: flipped ? 1 : 0,
        transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
        config: { mass: 5, tension: 500, friction: 80 }
    })

    return (
        <div
            { ...props }
            style={{
                position: 'relative',
                color: alt || flipped ? 'white' : colors.purple
            }}
        >
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
                { back }
            </animated.div>
            <animated.div
                style={{
                    position: 'relative',
                    width: '100%',
                    fontSize: 14,
                    padding: width < 720 ? '8px 12px' : '12px 16px',
                    borderRadius: 8,
                    lineHeight: 1.5,
                    background: alt ? colors.green : colors.lightgrey,
                    opacity: opacity.interpolate(o => 1 - o),
                    transform
                }}
            >
                { children }
            </animated.div>
        </div>
    )
}

Card.propTypes = {
    flipped: PropTypes.bool,
    back: PropTypes.node,
    style: PropTypes.object,
    children: PropTypes.node
}

export default Card
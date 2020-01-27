import React from 'react'
import PropTypes from 'prop-types'
import { colors } from '../utils.js'

/**
 * Detects and hyperlinks any URLs within the given content
 * 
 * @param  {string} props.children - A string that possibly contains links
 * @return {object}                - React markup
 */
const Hypertext = ({
    children
}) => {
    const tokens = children.split(/(\s)/)

    return tokens.map((token, i) => {
        const isURL = /^https?\:\//.test(token)

        if (!isURL) return token
        else return (
            <a
                key={ i }
                href={ token }
                style={{
                    display: 'inline-block',
                    maxWidth: '100%',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                    textDecoration: 'none',
                    color: colors.green,
                    overflow: 'hidden'
                }}
            >
                { token }
            </a>
        )
    })
}

Hypertext.propTypes = {
    children: PropTypes.string
}

export default Hypertext
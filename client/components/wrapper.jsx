import React from 'react'
import PropTypes from 'prop-types'

/**
 * Top-level centered container for the application
 * 
 * @param  {object} props.children - Any valid react node(s)
 * @return {object}                - React markup
 */
const Wrapper = ({
    children
}) => (
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
        { children }
    </main>
)

Wrapper.propTypes = {
    children: PropTypes.node
}

export default Wrapper
import React from 'react'
import PropTypes from 'prop-types'


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
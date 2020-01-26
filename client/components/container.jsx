import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

/**
 * A container for the messages or any other scrollable content
 * 
 * @param  {object} props.children - Any valid react node(s)
 * @return {object}                - React markup
 */
const Container = forwardRef(({
    children
}, ref) => (
    <div
        ref={ ref }
        style={{
            flex: '1 1 auto',
            overflow: 'auto'
        }}
    >
        <div
            style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignContent: 'flex-end',
                minHeight: '100%',
                padding: '50px 24px'
            }}
        >
            { children }
        </div>
    </div>
))

Container.propTypes = {
    children: PropTypes.node
}

export default Container
import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/app.jsx'

const production = process.env.NODE_ENV === 'production'
const element = document.getElementById('root')
const approach = production ? 'hydrate' : 'render'

ReactDOM[approach](<App />, element)

if (module.hot) {
    module.hot.accept()
}
import fs from 'fs'
import path from 'path'
import cheerio from 'cheerio'
import React from 'react'
import ReactDOM from 'react-dom/server'
import App from '../client/components/app.jsx'

const templatePath = path.resolve('./dist/index.html')
const HTML_TEMPLATE = fs.readFileSync(templatePath).toString()

export default (req, res) => {
    const markup = ReactDOM.renderToString(<App />)
    const $template = cheerio.load(HTML_TEMPLATE)

    $template('#root').html(markup)
    res.send($template.html())
}
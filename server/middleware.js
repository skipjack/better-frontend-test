import fs from 'fs'
import path from 'path'
import cheerio from 'cheerio'
import React from 'react'
import ReactDOM from 'react-dom/server'
import App from '../client/components/app.jsx'
import data from './data.json'

const templatePath = path.resolve('./dist/index.html')
const HTML_TEMPLATE = fs.readFileSync(templatePath).toString()

export default (req, res) => {
    const app = <App users={data.users} posts={data.posts} />
    const markup = ReactDOM.renderToString(app)
    const $template = cheerio.load(HTML_TEMPLATE)
    
    $template('head').append(`
        <script>
            window.initialUsers = ${JSON.stringify(data.users)}
            window.initialPosts = ${JSON.stringify(data.posts)}
        </script>
    `)

    $template('#root').html(markup)
    res.send($template.html())
}
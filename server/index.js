import express from 'express'
import path from 'path'
import middleware from './middleware.js'
import data from './data.json'

const distDir = path.resolve('./dist')
const imagesDir = path.resolve('./images')

const app = express()

app.use(express.json())

// @todo double check file exposure and revise
app.get('/', middleware)
app.use(express.static(distDir))
app.use('/images', express.static(imagesDir))
app.get('/users', (req, res) => res.send(data.users))
app.get('/posts', (req, res) => res.send(data.posts))
app.post('/posts', (req, res) => res.send(req.body))
app.get('/*', middleware)

const port = process.env.PORT || 1234
app.listen(port, () => {
    console.log(`\nListening on port ${port}...`)
})
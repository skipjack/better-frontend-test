import express from 'express'
import path from 'path'
import middleware from './middleware.js'
import data from './data.json'

const clientDir = path.resolve(__dirname, './client')
const imagesDir = path.resolve(__dirname, './images')

const app = express()

app.use(express.json())
app.get('/', middleware)
app.use(express.static(clientDir))
app.use('/images', express.static(imagesDir))
app.get('/users', (req, res) => res.send(data.users))
app.get('/posts', (req, res) => res.send(data.posts))
app.post('/posts', (req, res) => res.send(req.body))
app.get('/*', middleware)

const port = process.env.PORT || 1234
app.listen(port, () => {
    console.log(`\nListening on port ${port}...`)
})
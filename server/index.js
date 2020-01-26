import express from 'express'
import path from 'path'
import middleware from './middleware.js'

const app = express()

const distDir = path.resolve('./dist')
const imagesDir = path.resolve('./images')

// @todo double check file exposure and revise
app.get('/', middleware)
app.use(express.static(distDir))
app.use('/images', express.static(imagesDir))
app.get('/*', middleware)

const port = process.env.PORT || 1234
app.listen(port, () => {
    console.log(`\nListening on port ${port}...`)
})
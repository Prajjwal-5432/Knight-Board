const express = require('express')
const ejs = require('ejs')
const { getPositions } = require('./getPositions')

const app = express()

const PORT = 3000

app.set('view engine', 'ejs')
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.render('pages/index')
})

app.get('/getpositions', async (req, res) => {
    if (!req.query.x || !req.query.y) {
        return res.send({
            error: 'Please provide both X and Y coordinates'
        })
    }

    let { x, y } = req.query
    if (!(Math.min(x, y) >= 1 && Math.max(x, y) <= 8)) {
        return res.send({
            error: 'X and Y coordinates should be between 1 to 8'
        })
    }

    try {
        let data = await getPositions(req.query.x, req.query.y)
        console.log(data)
        res.json(data)
    } catch (error) {
        console.log(error)
    }
})

app.listen(PORT, () => console.log('Server running at Port: ' + PORT))
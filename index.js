const multer = require('multer')
const tf = require('./models/tensorflow')

const express = require('express');
const app = express()

process.on('uncaughtException', (exception) => {
    console.log(exception)
    process.exit(1)
})
process.on('unhandledRejection', (rejection) => {
    console.log(rejection)
    process.exit(2)
})

app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))

app.set('view engine', 'ejs')

const storage = multer.memoryStorage()
const upload = multer({ storage: storage })
// const upload = multer({ dest: "uploads/" }) // if we want to store the uploaded file in dir named uploads/

app.get('/', (req, res) => {
    res.render('home', { prediction: null, imageBase64: null, message: req.query.message })
})

app.post('/upload', upload.single('image'), tf.predict, (req, res) => {
    res.render('home', { prediction: req.result, imageBase64: req.image, message: req.query.message })
})

app.listen(3000, () => {
    console.log(`listening to port 3000`)
})
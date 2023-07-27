// not working

fs = require('fs')
const classes = require('../class_name.json')

const mobilenet = require('@tensorflow-models/mobilenet')
fs.readFile('download.jpg', (err, data) => {
        if (!err) {
            mobilenet.load().then(model => {
                model.predict(data).then(prediction => {
                    console.log(prediction)
                })
            })
        }
})
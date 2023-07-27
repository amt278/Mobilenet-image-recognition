// fs = require('fs')
const classes = require('../data/class_name.json')
const tf = require('@tensorflow/tfjs-node')

const predict = (req, res, next) => {
    tf.loadLayersModel(
        "https://storage.googleapis.com/tfjs-models/tfjs/mobilenet_v1_0.25_224/model.json"
    ).then(async model => {
        console.log('loaded model')
        if (!/^image\/(jpe?g|png|gif)$/.test(req.file.mimetype)) {
            console.log(`Unsupported image type: ${req.file.mimetype}`)
            throw new Error(`Unsupported image type: ${req.file.mimetype}`)
        }
        var imageData = req.file.buffer
        const uint8Array = new Uint8Array(imageData)
        const decodedImage = tf.node.decodeImage(uint8Array)
        const resizedImage = tf.image.resizeBilinear(decodedImage, [224, 224])
        const normalizedImage = resizedImage.div(255.0).expandDims();
        let result = await model.predict(normalizedImage).topk(1).indices.dataSync()[0]
        req.result = classes[result]
        req.image = imageData.toString('base64')
        console.log(classes[result])
        next()
    }).catch((err) => {
        res.redirect("/?message=" + encodeURIComponent(err))
        next(err)
    })
}

module.exports = {predict}
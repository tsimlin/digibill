const express = require('express');
const PDFDocument = require('pdfkit');
var router = express.Router();

const app = express();

var port = process.env.PORT || 3000;
app.get('/', (req, res) => res.send('Halloooooo'));
app.listen(port, () => console.log("started.... "));

const PDFDocument =  require('pdfkit');

router.get('/generatePDF', async function(req, res, next) {
var myDoc = new PDFDocument({bufferPages: true});

let buffers = [];
myDoc.on('data', buffers.push.bind(buffers));
myDoc.on('end', () => {

    let pdfData = Buffer.concat(buffers);
    res.writeHead(200, {
    'Content-Length': Buffer.byteLength(pdfData),
    'Content-Type': 'application/pdf',
    'Content-disposition': 'attachment;filename=test.pdf',})
    .end(pdfData);

});

myDoc.font('Times-Roman')
     .fontSize(12)
     .text(`this is a test text`);
myDoc.end();
});

module.exports = router;
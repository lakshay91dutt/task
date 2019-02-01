let PDFkit = require('pdfkit');
let doc = PDFKit();

let fs = require('fs');

doc.pipe(fs.createWriteStream('myNewDoc.pdf'));

doc.font('/home/lakshay/.local/share/fonts/Roboto-Regular.ttf')
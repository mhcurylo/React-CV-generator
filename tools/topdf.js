
import pdf from 'html-pdf';

const html = 'http://localhost:3000/';
const options = {};


export default function cvToPdf() {
  pdf.create(html, options).toFile('./build/cv.pdf', (err, res) => {
    if (err) return console.log(err);
    console.log(res);
  });
}

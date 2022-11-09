
console.log('Creating slide index...');

// Import the filesystem module
const fs = require('fs');
const util = require('util');
const directory = '../docs/slides'
let slides = {}

// Function to get current filenames in a directory
fs.readdir(directory, (err, files) => {
    if (err)
        console.log(err);
    else {
        files.forEach(file => {
            console.log('file: ' + file)
            const pageNumber = file.split('-')[0]

            // if the page is part of a sub-section, add the sub-section to the slide object
            if (pageNumber.includes('_')) {
                const slide = pageNumber.split('_')[0]
                const subSlide = pageNumber.split('_')[1]
                console.log('       a: ' + slides[slide])

                if (slides[slide].constructor === Array) {
                    slides[slide] = slides[slide].push(file)
                    console.log('       x: ' + file)

                }
                else {
                    slides[slide] = [file]
                }
               
            } else {
                slides[pageNumber] = file;
            }
        })
    }
    // console.log('filesNames:' + util.inspect(filesNames));
    console.log('slides:' + util.inspect(slides));
    // console.log('slides:' + JSON.stringify(slides));
})



// fs.readFile(directory, 'utf8', function (err, data) {
//   if (err) {
//     return console.log(err);
//   }
//   console.log(data);
// });